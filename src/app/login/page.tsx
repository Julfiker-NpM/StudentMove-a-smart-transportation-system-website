import Link from "next/link";

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const params = await searchParams;
  const isInvalid = params.error === "invalid";

  return (
    <main className="min-h-screen bg-slate-100 px-6 py-12 dark:bg-slate-900">
      <section className="mx-auto w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-xl dark:border-slate-700 dark:bg-slate-900/80">
        <h1 className="text-4xl font-semibold tracking-tight text-slate-800 dark:text-slate-100">
          Welcome Back
        </h1>
        <p className="mt-2 text-lg text-slate-500 dark:text-slate-300">
          Login to continue your journey
        </p>

        <form action="/api/auth/login" method="post" className="mt-10 space-y-5">
          {isInvalid ? (
            <div className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
              Invalid email or password. Try again.
            </div>
          ) : null}
          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-600 dark:text-slate-300">
              Email or Username
            </label>
            <input
              id="email"
              name="email"
              type="text"
              placeholder="Enter your email or username"
              className="w-full rounded-xl border border-slate-300 bg-transparent px-4 py-3 text-base text-slate-800 outline-none transition focus:border-blue-500 dark:border-slate-600 dark:text-slate-100"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="mb-2 block text-sm font-medium text-slate-600 dark:text-slate-300">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-xl border border-slate-300 bg-transparent px-4 py-3 text-base text-slate-800 outline-none transition focus:border-blue-500 dark:border-slate-600 dark:text-slate-100"
              required
            />
            <div className="mt-3 text-right">
              <Link href="/forgot-password" className="text-base text-blue-600 hover:underline">
                Forgot Password?
              </Link>
            </div>
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-blue-600 py-3 text-lg font-semibold text-white shadow-md shadow-blue-300/30 transition hover:bg-blue-700"
          >
            Login
          </button>
        </form>

        <div className="mt-8 flex items-center gap-4 text-slate-400">
          <div className="h-px flex-1 bg-slate-300 dark:bg-slate-600" />
          <span className="text-base">or</span>
          <div className="h-px flex-1 bg-slate-300 dark:bg-slate-600" />
        </div>

        <p className="mt-6 text-center text-lg text-slate-500 dark:text-slate-300">
          {"Don't have an account? "}
          <Link href="/signup" className="font-semibold text-blue-600 hover:underline">
            Sign Up
          </Link>
        </p>
        <p className="mt-2 text-center text-sm text-slate-400">
          Accounts require university info + student ID during signup.
        </p>

      </section>
    </main>
  );
}
