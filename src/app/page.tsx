import SiteShell from "@/components/site-shell";

export default function Home() {
  return (
    <SiteShell
      title="Welcome to StudentMove"
      subtitle="Smart Transport Solution for Dhaka City Students"
      showIntroCard={false}
      isAuthenticated={false}
    >
      <section className="hero-home flex min-h-[70vh] items-center justify-center rounded-2xl border border-white/10 p-8 text-center">
        <div className="w-full max-w-3xl">
          <h2 className="text-4xl font-bold text-white md:text-5xl">Welcome to StudentMove</h2>
          <p className="mt-4 text-lg text-blue-100">Smart Transport Solution for Dhaka City Students</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href="/login" className="rounded-lg bg-blue-600 px-5 py-2.5 font-medium text-white hover:bg-blue-700">
              Get Started
            </a>
            <a href="/signup" className="rounded-lg bg-slate-100 px-5 py-2.5 font-medium text-slate-800 hover:bg-white">
              Sign Up
            </a>
            <a href="#" className="rounded-lg bg-amber-500 px-5 py-2.5 font-medium text-white hover:bg-amber-600">
              Driver Login
            </a>
            <a href="#" className="rounded-lg bg-purple-600 px-5 py-2.5 font-medium text-white hover:bg-purple-700">
              Admin Login
            </a>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
