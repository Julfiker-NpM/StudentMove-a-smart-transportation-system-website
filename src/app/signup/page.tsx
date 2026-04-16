import Link from "next/link";

export default async function SignupPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const params = await searchParams;
  const hasError = params.error === "invalid";

  return (
    <main className="min-h-screen bg-slate-100 px-6 py-12 dark:bg-slate-900">
      <section className="mx-auto w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-xl dark:border-slate-700 dark:bg-slate-900/80">
        <h1 className="text-4xl font-semibold tracking-tight text-slate-800 dark:text-slate-100">
          Create Account
        </h1>
        <p className="mt-2 text-lg text-slate-500 dark:text-slate-300">
          Sign up to start your journey
        </p>

        <form action="/api/auth/signup" method="post" className="mt-10 space-y-5">
          {hasError ? (
            <div className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
              Please fill all required fields.
            </div>
          ) : null}
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-600 dark:text-slate-300">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your full name"
              className="w-full rounded-xl border border-slate-300 bg-transparent px-4 py-3 text-base text-slate-800 outline-none transition focus:border-blue-500 dark:border-slate-600 dark:text-slate-100"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-600 dark:text-slate-300">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
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
              placeholder="Create a password"
              className="w-full rounded-xl border border-slate-300 bg-transparent px-4 py-3 text-base text-slate-800 outline-none transition focus:border-blue-500 dark:border-slate-600 dark:text-slate-100"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-blue-600 py-3 text-lg font-semibold text-white shadow-md shadow-blue-300/30 transition hover:bg-blue-700"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-6 text-center text-lg text-slate-500 dark:text-slate-300">
          {"Already have an account? "}
          <Link href="/login" className="font-semibold text-blue-600 hover:underline">
            Sign In
          </Link>
        </p>

      </section>
    </main>
  );
}
