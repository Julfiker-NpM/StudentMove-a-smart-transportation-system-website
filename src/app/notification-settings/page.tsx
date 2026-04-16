import SiteShell from "@/components/site-shell";
import { getCurrentUser } from "@/lib/session";

export default async function NotificationSettingsPage() {
  const user = await getCurrentUser();

  return (
    <SiteShell title="Notification Settings" subtitle="Delay, offer, and system alerts" isAuthenticated={Boolean(user)}>
      <section className="sm-card p-6">
        {!user ? (
          <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
            Please sign in to manage notification preferences.
          </p>
        ) : (
          <ul className="space-y-2 text-sm">
            <li>Delay Alerts: {user.notifyDelay ? "Enabled" : "Disabled"}</li>
            <li>Offer Alerts: {user.notifyOffer ? "Enabled" : "Disabled"}</li>
            <li>System Alerts: {user.notifySystem ? "Enabled" : "Disabled"}</li>
            <li>Language: {user.preferredLanguage === "bn" ? "Bangla" : "English"}</li>
          </ul>
        )}
      </section>
    </SiteShell>
  );
}
