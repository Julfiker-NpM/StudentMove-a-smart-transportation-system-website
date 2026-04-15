import Link from "next/link";
import SiteShell from "@/components/site-shell";

const arrivals = [
  { route: "Uttara → Dhanmondi", eta: "6 min", status: "On Time" },
  { route: "Mirpur → Farmgate", eta: "11 min", status: "Slight Delay" },
  { route: "Azimpur → Mohakhali", eta: "14 min", status: "On Time" },
];

export default async function NextBusArrivalPage() {
  return (
    <SiteShell title="Next Bus Arrival" subtitle="Upcoming buses and ETA" isAuthenticated={false}>
      <section className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900/40">
        <div className="space-y-3">
          {arrivals.map((item) => (
            <article
              key={item.route}
              className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800/70"
            >
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-slate-100">{item.route}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-300">{item.status}</p>
              </div>
              <span className="rounded-full bg-blue-600 px-3 py-1 text-sm font-semibold text-white">{item.eta}</span>
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
