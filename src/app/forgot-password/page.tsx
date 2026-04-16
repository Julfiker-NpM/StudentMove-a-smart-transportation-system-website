import Link from "next/link";

export default function ForgotPasswordPage() {
  return (
    <main className="min-h-screen bg-slate-100 px-6 py-10 dark:bg-slate-900">
      <section className="mx-auto mt-8 w-full max-w-md rounded-2xl border border-slate-200 bg-white/95 p-8 shadow-sm dark:border-slate-700 dark:bg-slate-900/60">
        <h1 className="text-4xl font-semibold text-slate-800 dark:text-slate-100">Forgot Password</h1>
        <p className="mt-3 text-lg text-slate-500 dark:text-slate-300">
          Enter your email and we will send a reset instruction.
        </p>

        <form className="mt-8 space-y-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full rounded-xl border border-slate-300 bg-transparent px-4 py-3 text-slate-800 outline-none focus:border-blue-500 dark:border-slate-600 dark:text-slate-100"
          />
          <button
            type="button"
            className="w-full rounded-xl bg-blue-600 py-3 text-lg font-semibold text-white hover:bg-blue-700"
          >
            Send Reset Link
          </button>
        </form>

        <div className="mt-8 text-center">
          <Link href="/login" className="text-slate-500 hover:text-slate-700 dark:text-slate-300 dark:hover:text-slate-100">
            &lsaquo; Back to Sign In
          </Link>
        </div>
      </section>
    </main>
  );
}
