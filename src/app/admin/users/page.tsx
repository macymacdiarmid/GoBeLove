import { createClient } from "@/lib/supabase/server";
import type { Database } from "@/types/database";

type Profile = Database["public"]["Tables"]["profiles"]["Row"];

export const metadata = { title: "Admin — Users" };

const ROLE_COLORS: Record<string, { bg: string; text: string }> = {
  admin: { bg: "rgba(212,150,58,0.25)", text: "#D4963A" },
  moderator: { bg: "rgba(45,94,63,0.25)", text: "#2D5E3F" },
  user: { bg: "rgba(245,237,216,0.08)", text: "rgba(245,237,216,0.5)" },
};

export default async function AdminUsersPage() {
  const supabase = await createClient();
  const { data: profiles } = await supabase
    .from("profiles")
    .select("*")
    .order("created_at", { ascending: false }) as { data: Profile[] | null };

  return (
    <div>
      <h1 className="font-serif font-black text-3xl mb-10" style={{ color: "#F5EDD8" }}>
        Users
      </h1>

      {profiles && profiles.length > 0 ? (
        <div className="border" style={{ borderColor: "rgba(245,237,216,0.1)" }}>
          <table className="w-full text-sm">
            <thead>
              <tr style={{ borderBottom: "1px solid rgba(245,237,216,0.1)" }}>
                {["Name", "Email", "Role", "Joined"].map((h) => (
                  <th key={h} className="text-left px-4 py-3 text-xs font-bold tracking-widest uppercase" style={{ color: "rgba(245,237,216,0.4)" }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {profiles.map((profile) => {
                const colors = ROLE_COLORS[profile.role] ?? ROLE_COLORS.user;
                return (
                  <tr key={profile.id} style={{ borderBottom: "1px solid rgba(245,237,216,0.06)" }}>
                    <td className="px-4 py-3 font-medium" style={{ color: "#F5EDD8" }}>
                      {profile.full_name ?? "—"}
                    </td>
                    <td className="px-4 py-3" style={{ color: "rgba(245,237,216,0.6)" }}>
                      {profile.email}
                    </td>
                    <td className="px-4 py-3">
                      <span className="px-2 py-1 text-xs font-bold capitalize" style={{ backgroundColor: colors.bg, color: colors.text }}>
                        {profile.role}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-xs" style={{ color: "rgba(245,237,216,0.4)" }}>
                      {new Date(profile.created_at).toLocaleDateString()}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="border p-16 text-center" style={{ borderColor: "rgba(245,237,216,0.1)" }}>
          <p className="text-sm" style={{ color: "rgba(245,237,216,0.4)" }}>No users yet.</p>
        </div>
      )}
    </div>
  );
}
