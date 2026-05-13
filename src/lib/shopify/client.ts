// Shopify Storefront API client
// Connect your Shopify store by adding credentials to .env.local
// Docs: https://shopify.dev/docs/api/storefront

const SHOPIFY_STORE_DOMAIN = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN;
const SHOPIFY_STOREFRONT_TOKEN = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN;

export const isShopifyConfigured =
  Boolean(SHOPIFY_STORE_DOMAIN) && Boolean(SHOPIFY_STOREFRONT_TOKEN);

export async function shopifyFetch<T>(query: string, variables?: Record<string, unknown>): Promise<T> {
  if (!isShopifyConfigured) {
    throw new Error("Shopify is not configured. Add store credentials to .env.local");
  }

  const endpoint = `https://${SHOPIFY_STORE_DOMAIN}/api/2024-01/graphql.json`;

  const res = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": SHOPIFY_STOREFRONT_TOKEN!,
    },
    body: JSON.stringify({ query, variables }),
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error(`Shopify fetch failed: ${res.statusText}`);
  }

  const json = await res.json();
  return json.data as T;
}
