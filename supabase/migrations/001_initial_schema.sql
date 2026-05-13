-- ============================================================
-- Go Be Love — Initial Database Schema
-- ============================================================

-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- ── USER ROLES ENUM ──────────────────────────────────────
create type user_role as enum ('admin', 'moderator', 'user');

-- ── PROFILES ─────────────────────────────────────────────
create table public.profiles (
  id            uuid references auth.users(id) on delete cascade primary key,
  email         text not null,
  full_name     text,
  avatar_url    text,
  role          user_role not null default 'user',
  created_at    timestamptz not null default now(),
  updated_at    timestamptz not null default now()
);

-- Auto-create profile on signup
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, email, full_name)
  values (
    new.id,
    new.email,
    new.raw_user_meta_data->>'full_name'
  );
  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- Auto-update updated_at
create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger profiles_updated_at
  before update on public.profiles
  for each row execute procedure public.set_updated_at();

-- ── PRODUCTS ─────────────────────────────────────────────
create table public.products (
  id                  uuid primary key default uuid_generate_v4(),
  name                text not null,
  slug                text not null unique,
  description         text,
  price               integer not null, -- stored in cents
  compare_at_price    integer,
  images              text[] not null default '{}',
  category            text not null default 'hoodies',
  is_active           boolean not null default true,
  shopify_product_id  text,
  created_at          timestamptz not null default now(),
  updated_at          timestamptz not null default now()
);

create trigger products_updated_at
  before update on public.products
  for each row execute procedure public.set_updated_at();

create index products_slug_idx on public.products(slug);
create index products_category_idx on public.products(category);
create index products_active_idx on public.products(is_active);

-- ── PRODUCT VARIANTS ─────────────────────────────────────
create table public.product_variants (
  id                  uuid primary key default uuid_generate_v4(),
  product_id          uuid not null references public.products(id) on delete cascade,
  size                text not null,
  color               text not null,
  color_hex           text,
  inventory_count     integer not null default 0,
  shopify_variant_id  text,
  created_at          timestamptz not null default now()
);

create index variants_product_idx on public.product_variants(product_id);

-- ── ORDERS ───────────────────────────────────────────────
create type order_status as enum ('pending', 'confirmed', 'shipped', 'delivered', 'cancelled');

create table public.orders (
  id                uuid primary key default uuid_generate_v4(),
  user_id           uuid not null references public.profiles(id) on delete restrict,
  status            order_status not null default 'pending',
  total_amount      integer not null, -- cents
  shopify_order_id  text,
  shipping_address  jsonb,
  created_at        timestamptz not null default now(),
  updated_at        timestamptz not null default now()
);

create trigger orders_updated_at
  before update on public.orders
  for each row execute procedure public.set_updated_at();

create index orders_user_idx on public.orders(user_id);
create index orders_status_idx on public.orders(status);

-- ── ORDER ITEMS ──────────────────────────────────────────
create table public.order_items (
  id          uuid primary key default uuid_generate_v4(),
  order_id    uuid not null references public.orders(id) on delete cascade,
  product_id  uuid not null references public.products(id) on delete restrict,
  variant_id  uuid references public.product_variants(id) on delete set null,
  quantity    integer not null check (quantity > 0),
  unit_price  integer not null,
  created_at  timestamptz not null default now()
);

create index order_items_order_idx on public.order_items(order_id);

-- ── IMPACT STATS ─────────────────────────────────────────
create table public.impact_stats (
  id                  uuid primary key default uuid_generate_v4(),
  children_sponsored  integer not null default 0,
  hoodies_sold        integer not null default 0,
  countries_reached   integer not null default 0,
  updated_at          timestamptz not null default now()
);

-- Seed initial stats row
insert into public.impact_stats (children_sponsored, hoodies_sold, countries_reached)
values (47, 1200, 12);

-- ============================================================
-- ROW LEVEL SECURITY (RLS)
-- ============================================================

alter table public.profiles          enable row level security;
alter table public.products          enable row level security;
alter table public.product_variants  enable row level security;
alter table public.orders            enable row level security;
alter table public.order_items       enable row level security;
alter table public.impact_stats      enable row level security;

-- Helper: is the current user an admin?
create or replace function public.is_admin()
returns boolean
language sql
security definer
as $$
  select exists (
    select 1 from public.profiles
    where id = auth.uid() and role = 'admin'
  );
$$;

-- ── PROFILES POLICIES ────────────────────────────────────
create policy "Users can view own profile"
  on public.profiles for select
  using (auth.uid() = id);

create policy "Users can update own profile"
  on public.profiles for update
  using (auth.uid() = id)
  with check (
    auth.uid() = id
    -- Prevent users from escalating their own role
    and (role = (select role from public.profiles where id = auth.uid()))
  );

create policy "Admins can view all profiles"
  on public.profiles for select
  using (public.is_admin());

create policy "Admins can update all profiles"
  on public.profiles for update
  using (public.is_admin());

-- ── PRODUCTS POLICIES ────────────────────────────────────
create policy "Products are publicly readable"
  on public.products for select
  using (is_active = true);

create policy "Admins can view all products"
  on public.products for select
  using (public.is_admin());

create policy "Admins can insert products"
  on public.products for insert
  with check (public.is_admin());

create policy "Admins can update products"
  on public.products for update
  using (public.is_admin());

create policy "Admins can delete products"
  on public.products for delete
  using (public.is_admin());

-- ── VARIANTS POLICIES ────────────────────────────────────
create policy "Variants are publicly readable"
  on public.product_variants for select
  using (true);

create policy "Admins can manage variants"
  on public.product_variants for all
  using (public.is_admin());

-- ── ORDERS POLICIES ──────────────────────────────────────
create policy "Users can view own orders"
  on public.orders for select
  using (auth.uid() = user_id);

create policy "Users can create own orders"
  on public.orders for insert
  with check (auth.uid() = user_id);

create policy "Admins can view all orders"
  on public.orders for select
  using (public.is_admin());

create policy "Admins can update all orders"
  on public.orders for update
  using (public.is_admin());

-- ── ORDER ITEMS POLICIES ─────────────────────────────────
create policy "Users can view own order items"
  on public.order_items for select
  using (
    exists (
      select 1 from public.orders
      where id = order_items.order_id and user_id = auth.uid()
    )
  );

create policy "Users can insert own order items"
  on public.order_items for insert
  with check (
    exists (
      select 1 from public.orders
      where id = order_items.order_id and user_id = auth.uid()
    )
  );

create policy "Admins can view all order items"
  on public.order_items for select
  using (public.is_admin());

-- ── IMPACT STATS POLICIES ────────────────────────────────
create policy "Impact stats are publicly readable"
  on public.impact_stats for select
  using (true);

create policy "Admins can update impact stats"
  on public.impact_stats for update
  using (public.is_admin());
