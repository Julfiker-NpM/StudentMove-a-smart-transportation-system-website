import Link from "next/link";
import Dashboard from "@/components/dashboard";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      <main className="mx-auto w-full max-w-6xl px-6 py-10">
        <header className="mb-6 rounded-xl border border-slate-200 bg-white p-6">
          <h1 className="text-2xl font-bold text-slate-900">
            StudentMove - Full Stack (Next.js + TypeScript + Prisma)
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            Frontend and backend are both running in Next.js. Data layer uses PostgreSQL with Prisma.
          </p>
          <div className="mt-4 flex flex-wrap gap-2 text-sm">
            {["Auth", "Routes", "Subscriptions", "Notifications", "Feedback", "Admin", "Driver"].map((item) => (
              <span key={item} className="rounded-full border border-slate-300 bg-slate-100 px-3 py-1">
                {item}
              </span>
            ))}
          </div>
        </header>

        <section className="mb-6 grid gap-4 md:grid-cols-2">
          <article className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="font-semibold text-slate-900">API Endpoints</h2>
            <ul className="mt-3 space-y-1 text-sm text-slate-700">
              <li>
                <code>GET /api/health</code>
              </li>
              <li>
                <code>GET|POST /api/route-suggestions</code>
              </li>
              <li>
                <code>GET|POST /api/subscriptions</code>
              </li>
              <li>
                <code>GET /api/notifications</code>
              </li>
              <li>
                <code>GET|POST /api/feedback</code>
              </li>
            </ul>
          </article>

          <article className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="font-semibold text-slate-900">Quick Actions</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              <Link
                href="https://vercel.com/new"
                target="_blank"
                className="rounded-lg bg-black px-4 py-2 text-sm text-white"
              >
                Deploy to Vercel
              </Link>
              <Link
                href="https://www.prisma.io/docs/guides/deployment/deploying-to-vercel"
                target="_blank"
                className="rounded-lg border border-slate-300 px-4 py-2 text-sm text-slate-800"
              >
                Prisma + Vercel Guide
              </Link>
            </div>
          </article>
        </section>

        <Dashboard />
      </main>
    </div>
  );
}
