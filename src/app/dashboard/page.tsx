import Link from "next/link";
import SiteShell from "@/components/site-shell";
import Dashboard from "@/components/dashboard";
import { requireAuth } from "@/lib/require-auth";

export default async function DashboardPage() {
  await requireAuth();

  return (
    <SiteShell title="Welcome back, Student!" subtitle="What do you want to do today?" isAuthenticated>
      <section className="mb-6 grid gap-4 md:grid-cols-3">
        <article className="rounded-xl border border-blue-200 bg-blue-50 p-5">
          <h3 className="text-lg font-semibold text-blue-900">Next Bus Arrival</h3>
          <p className="mt-2 text-sm text-blue-700">Check upcoming bus arrivals in real-time.</p>
          <Link href="/next-bus-arrival" className="mt-4 inline-block font-medium text-blue-700">
            Open →
          </Link>
        </article>

        <article className="rounded-xl border border-emerald-200 bg-emerald-50 p-5">
          <h3 className="text-lg font-semibold text-emerald-900">Personalized Route Suggestion</h3>
          <p className="mt-2 text-sm text-emerald-700">Get ranked route options for your trip.</p>
          <Link href="/route-suggestion" className="mt-4 inline-block font-medium text-emerald-700">
            Open →
          </Link>
        </article>

        <article className="rounded-xl border border-slate-200 bg-white p-5">
          <h3 className="text-lg font-semibold text-slate-900">Past Routes Taken</h3>
          <p className="mt-2 text-sm text-slate-600">Uttara to DSC</p>
          <p className="text-sm text-slate-600">Uttara to DU</p>
        </article>
      </section>

      <section className="mb-6 rounded-xl border border-indigo-200 bg-gradient-to-r from-indigo-500 to-sky-500 p-6 text-white">
        <h3 className="text-xl font-semibold">Save on Student Pass</h3>
        <p className="mt-2 text-sm text-indigo-100">Flat daily rates for city routes. Best for regular commuters.</p>
        <Link href="/offers" className="mt-4 inline-block rounded-lg bg-white px-4 py-2 font-medium text-indigo-700">
          Get Pass
        </Link>
      </section>

      <Dashboard />
    </SiteShell>
  );
}
