import SiteShell from "@/components/site-shell";
import { getCurrentUser } from "@/lib/session";

export default async function FeedbackPage() {
  const user = await getCurrentUser();

  return (
    <SiteShell title="Feedback & Support" subtitle="Send bug report, suggestion, or complaint" isAuthenticated={Boolean(user)}>
      <section className="sm-card p-6">
        {!user ? (
          <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
            Please sign in to submit feedback.
          </p>
        ) : (
          <form className="space-y-4">
            <div>
              <label className="mb-1 block text-sm">Category</label>
              <select className="w-full rounded-xl border border-slate-300 px-3 py-2">
                <option>Suggestion</option>
                <option>Bug</option>
                <option>Complaint</option>
              </select>
            </div>
            <div>
              <label className="mb-1 block text-sm">Subject</label>
              <input className="w-full rounded-xl border border-slate-300 px-3 py-2" />
            </div>
            <div>
              <label className="mb-1 block text-sm">Message</label>
              <textarea className="w-full rounded-xl border border-slate-300 px-3 py-2" rows={4} />
            </div>
            <button type="button" className="sm-primary-btn rounded-xl px-4 py-2 font-medium">
              Submit Feedback
            </button>
          </form>
        )}
      </section>
    </SiteShell>
  );
}
