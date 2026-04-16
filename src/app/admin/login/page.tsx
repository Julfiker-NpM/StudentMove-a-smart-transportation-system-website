export default function AdminLoginPage() {
  return (
    <main className="min-h-screen bg-slate-100 px-6 py-10 dark:bg-slate-900">
      <section className="mx-auto mt-8 w-full max-w-md rounded-2xl border border-slate-200 bg-white/95 p-8 shadow-sm dark:border-slate-700 dark:bg-slate-900/60">
        <h1 className="text-4xl font-semibold text-slate-800 dark:text-slate-100">Admin Login</h1>
        <p className="mt-3 text-lg text-slate-500 dark:text-slate-300">
          Admin panel access for users, reports, and transport management.
        </p>
        <div className="mt-8 rounded-xl border border-purple-200 bg-purple-50 p-4 text-sm text-purple-700 dark:border-purple-700/40 dark:bg-purple-700/10 dark:text-purple-300">
          Admin authentication flow will be integrated in the next backend milestone.
        </div>
      </section>
    </main>
  );
}
