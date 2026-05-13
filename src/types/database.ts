export type UserRole = "admin" | "moderator" | "user";

export type Json = string | number | boolean | null | { [key: string]: Json } | Json[];

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          email: string;
          full_name: string | null;
          avatar_url: string | null;
          role: UserRole;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          email: string;
          full_name?: string | null;
          avatar_url?: string | null;
          role?: UserRole;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          full_name?: string | null;
          avatar_url?: string | null;
          role?: UserRole;
          updated_at?: string;
        };
        Relationships: [];
      };
      products: {
        Row: {
          id: string;
          name: string;
          slug: string;
          description: string | null;
          price: number;
          compare_at_price: number | null;
          images: string[];
          category: string;
          is_active: boolean;
          shopify_product_id: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          slug: string;
          description?: string | null;
          price: number;
          compare_at_price?: number | null;
          images?: string[];
          category?: string;
          is_active?: boolean;
          shopify_product_id?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          name?: string;
          slug?: string;
          description?: string | null;
          price?: number;
          compare_at_price?: number | null;
          images?: string[];
          category?: string;
          is_active?: boolean;
          shopify_product_id?: string | null;
          updated_at?: string;
        };
        Relationships: [];
      };
      product_variants: {
        Row: {
          id: string;
          product_id: string;
          size: string;
          color: string;
          color_hex: string | null;
          inventory_count: number;
          shopify_variant_id: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          product_id: string;
          size: string;
          color: string;
          color_hex?: string | null;
          inventory_count?: number;
          shopify_variant_id?: string | null;
        };
        Update: {
          size?: string;
          color?: string;
          color_hex?: string | null;
          inventory_count?: number;
          shopify_variant_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "product_variants_product_id_fkey";
            columns: ["product_id"];
            isOneToOne: false;
            referencedRelation: "products";
            referencedColumns: ["id"];
          }
        ];
      };
      orders: {
        Row: {
          id: string;
          user_id: string;
          status: "pending" | "confirmed" | "shipped" | "delivered" | "cancelled";
          total_amount: number;
          shopify_order_id: string | null;
          shipping_address: Json | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          status?: "pending" | "confirmed" | "shipped" | "delivered" | "cancelled";
          total_amount: number;
          shopify_order_id?: string | null;
          shipping_address?: Json | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          status?: "pending" | "confirmed" | "shipped" | "delivered" | "cancelled";
          total_amount?: number;
          shopify_order_id?: string | null;
          shipping_address?: Json | null;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "orders_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "profiles";
            referencedColumns: ["id"];
          }
        ];
      };
      order_items: {
        Row: {
          id: string;
          order_id: string;
          product_id: string;
          variant_id: string | null;
          quantity: number;
          unit_price: number;
          created_at: string;
        };
        Insert: {
          id?: string;
          order_id: string;
          product_id: string;
          variant_id?: string | null;
          quantity: number;
          unit_price: number;
        };
        Update: {
          quantity?: number;
          unit_price?: number;
        };
        Relationships: [
          {
            foreignKeyName: "order_items_order_id_fkey";
            columns: ["order_id"];
            isOneToOne: false;
            referencedRelation: "orders";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "order_items_product_id_fkey";
            columns: ["product_id"];
            isOneToOne: false;
            referencedRelation: "products";
            referencedColumns: ["id"];
          }
        ];
      };
      impact_stats: {
        Row: {
          id: string;
          children_sponsored: number;
          hoodies_sold: number;
          countries_reached: number;
          updated_at: string;
        };
        Insert: {
          id?: string;
          children_sponsored?: number;
          hoodies_sold?: number;
          countries_reached?: number;
          updated_at?: string;
        };
        Update: {
          children_sponsored?: number;
          hoodies_sold?: number;
          countries_reached?: number;
          updated_at?: string;
        };
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: {
      is_admin: {
        Args: Record<string, never>;
        Returns: boolean;
      };
    };
    Enums: {
      user_role: "admin" | "moderator" | "user";
      order_status: "pending" | "confirmed" | "shipped" | "delivered" | "cancelled";
    };
    CompositeTypes: Record<string, never>;
  };
}
