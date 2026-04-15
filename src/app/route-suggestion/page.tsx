import Link from "next/link";
import SiteShell from "@/components/site-shell";

const routes = [
  { rank: 1, path: "Uttara → Airport → Banani → Dhanmondi", duration: "42 min" },
  { rank: 2, path: "Uttara → Mohakhali → Farmgate → Dhanmondi", duration: "49 min" },
  { rank: 3, path: "Uttara → Mirpur → Asad Gate → Dhanmondi", duration: "55 min" },
];

export default async function RouteSuggestionPage() {
  return (
    <SiteShell title="Personalized Route Suggestion" subtitle="Top ranked route options" isAuthenticated={false}>
      <section className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900/40">
        <div className="space-y-3">
          {routes.map((item) => (
            <article
              key={item.rank}
              className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800/70"
            >
              <div className="mb-2 flex items-center justify-between">
                <span className="rounded-full bg-emerald-600 px-2.5 py-1 text-xs font-semibold text-white">
                  Rank #{item.rank}
                </span>
                <span className="text-sm font-medium text-slate-600 dark:text-slate-300">{item.duration}</span>
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-slate-100">{item.path}</h3>
            </article>
          ))}
        </div>
        <Link href="/dashboard" className="mt-5 inline-block text-sm font-medium text-blue-600 hover:underline">
          ← Back to Dashboard
        </Link>
      </section>
    </SiteShell>
  );
}
