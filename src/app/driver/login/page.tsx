import Link from "next/link";

export default function DriverLoginPage() {
  return (
    <main className="min-h-screen bg-slate-100 px-6 py-10 dark:bg-slate-900">
      <section className="mx-auto mt-8 w-full max-w-md rounded-2xl border border-slate-200 bg-white/95 p-8 shadow-sm dark:border-slate-700 dark:bg-slate-900/60">
        <h1 className="text-4xl font-semibold text-slate-800 dark:text-slate-100">Driver Login</h1>
        <p className="mt-3 text-lg text-slate-500 dark:text-slate-300">
          Driver portal access for bus location and trip updates.
        </p>
        <div className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-700 dark:border-amber-700/40 dark:bg-amber-700/10 dark:text-amber-300">
          Driver authentication service will be integrated in the next backend milestone.
        </div>
        <div className="mt-8 text-center">
          <Link href="/" className="text-slate-500 hover:text-slate-700 dark:text-slate-300 dark:hover:text-slate-100">
            &lsaquo; Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}
