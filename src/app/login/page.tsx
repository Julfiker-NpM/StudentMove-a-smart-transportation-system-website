import SiteShell from "@/components/site-shell";

export default function LoginPage() {
  return (
    <SiteShell title="Welcome Back" subtitle="Login to continue your journey" isAuthenticated={false}>
      <section className="mx-auto w-full max-w-xl rounded-2xl border border-slate-200 bg-white/95 p-8 shadow-sm dark:border-slate-700 dark:bg-slate-900/60">
        <form action="/api/auth/login" method="get" className="space-y-4">
          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">
              Email or Username
            </label>
            <input
              id="email"
              type="text"
              placeholder="Enter your email or username"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-800 outline-none focus:border-blue-500 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100"
            />
          </div>
          <div>
            <label htmlFor="password" className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-800 outline-none focus:border-blue-500 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-xl bg-blue-600 py-3 text-base font-semibold text-white hover:bg-blue-700"
          >
            Login
          </button>
        </form>
      </section>
    </SiteShell>
  );
}
