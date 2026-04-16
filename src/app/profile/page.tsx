import SiteShell from "@/components/site-shell";
import { getCurrentUser } from "@/lib/session";

export default async function ProfilePage() {
  const user = await getCurrentUser();

  return (
    <SiteShell title="Profile" subtitle="Manage your account details" isAuthenticated={Boolean(user)}>
      <section className="sm-card p-6">
        {!user ? (
          <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
            Please sign in to view and update your profile.
          </p>
        ) : (
          <div className="grid gap-3 md:grid-cols-2">
            <div>
              <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                Name
              </p>
              <p className="font-semibold">{user.name}</p>
            </div>
            <div>
              <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                Email
              </p>
              <p className="font-semibold">{user.email}</p>
            </div>
            <div>
              <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                Phone
              </p>
              <p className="font-semibold">{user.phone || "Not set"}</p>
            </div>
            <div>
              <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                Student ID
              </p>
              <p className="font-semibold">{user.studentId || "Not set"}</p>
            </div>
            <div className="md:col-span-2">
              <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                University
              </p>
              <p className="font-semibold">{user.university || "Not set"}</p>
            </div>
          </div>
        )}
      </section>
    </SiteShell>
  );
}
