import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-slate-100 px-6 py-10 dark:bg-slate-900">
      <section className="mx-auto mt-8 w-full max-w-md">
        <h1 className="text-5xl font-semibold tracking-tight text-slate-800 dark:text-slate-100">
          Welcome Back
        </h1>
        <p className="mt-3 text-2xl text-slate-500 dark:text-slate-300">
          Login to continue your journey
        </p>

        <form action="/api/auth/login" method="get" className="mt-14 space-y-6">
          <div>
            <label htmlFor="email" className="mb-3 block text-base font-medium text-slate-600 dark:text-slate-300">
              Email or Username
            </label>
            <input
              id="email"
              type="text"
              placeholder="Enter your email or username"
              className="w-full rounded-2xl border border-slate-300 bg-transparent px-5 py-4 text-lg text-slate-800 outline-none transition focus:border-blue-500 dark:border-slate-600 dark:text-slate-100"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="mb-3 block text-base font-medium text-slate-600 dark:text-slate-300">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-2xl border border-slate-300 bg-transparent px-5 py-4 text-lg text-slate-800 outline-none transition focus:border-blue-500 dark:border-slate-600 dark:text-slate-100"
              required
            />
            <div className="mt-3 text-right">
              <a href="#" className="text-base text-blue-600 hover:underline">
                Forgot Password?
              </a>
            </div>
          </div>

          <button
            type="submit"
            className="w-full rounded-2xl bg-blue-600 py-4 text-2xl font-semibold text-white shadow-md shadow-blue-300/40 transition hover:bg-blue-700"
          >
            Login
          </button>
        </form>

        <div className="mt-10 flex items-center gap-4 text-slate-400">
          <div className="h-px flex-1 bg-slate-300 dark:bg-slate-600" />
          <span className="text-base">or</span>
          <div className="h-px flex-1 bg-slate-300 dark:bg-slate-600" />
        </div>

        <p className="mt-8 text-center text-2xl text-slate-500 dark:text-slate-300">
          {"Don't have an account? "}
          <a href="#" className="font-semibold text-blue-600 hover:underline">
            Sign Up
          </a>
        </p>

        <div className="mt-10 text-center">
          <Link href="/" className="text-2xl text-slate-500 hover:text-slate-700 dark:text-slate-300 dark:hover:text-slate-100">
            &lsaquo; Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}
