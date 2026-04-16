import SiteShell from "@/components/site-shell";

export default function Home() {
  return (
    <SiteShell
      title="Welcome to StudentMove"
      subtitle="Smart Transport Solution for Dhaka City Students"
      showIntroCard={false}
      isAuthenticated={false}
    >
      <section className="hero-home flex min-h-[65vh] items-center justify-center rounded-2xl border border-white/10 p-8 text-center">
        <div className="w-full max-w-4xl">
          <h2 className="text-4xl font-bold text-white md:text-6xl">StudentMove</h2>
          <p className="mt-4 text-lg text-blue-100 md:text-xl">
            Smart bus route management with live tracking, subscription, and alerts.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href="/login" className="sm-primary-btn rounded-lg px-5 py-2.5 font-medium hover:brightness-110">
              Get Started
            </a>
            <a href="/signup" className="rounded-lg bg-slate-100 px-5 py-2.5 font-medium text-slate-800 hover:bg-white">
              Sign Up
            </a>
            <a href="/driver/login" className="rounded-lg bg-amber-500 px-5 py-2.5 font-medium text-white hover:bg-amber-600">
              Driver Login
            </a>
            <a href="/admin/login" className="rounded-lg bg-purple-600 px-5 py-2.5 font-medium text-white hover:bg-purple-700">
              Admin Login
            </a>
          </div>
        </div>
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-3">
        <article className="sm-card p-5">
          <h3 className="text-lg font-semibold" style={{ color: "var(--text-primary)" }}>
            Live Bus Tracking
          </h3>
          <p className="mt-2 text-sm" style={{ color: "var(--text-secondary)" }}>
            Track bus location and ETA updates in near real-time.
          </p>
        </article>
        <article className="sm-card p-5">
          <h3 className="text-lg font-semibold" style={{ color: "var(--text-primary)" }}>
            Route Suggestion
          </h3>
          <p className="mt-2 text-sm" style={{ color: "var(--text-secondary)" }}>
            Get ranked route options based on time and fare.
          </p>
        </article>
        <article className="sm-card p-5">
          <h3 className="text-lg font-semibold" style={{ color: "var(--text-primary)" }}>
            Notification Center
          </h3>
          <p className="mt-2 text-sm" style={{ color: "var(--text-secondary)" }}>
            Receive delay and schedule alerts in one place.
          </p>
        </article>
      </section>

      <section className="mt-8 sm-card p-6">
        <h3 className="text-2xl font-bold" style={{ color: "var(--text-primary)" }}>
          Subscription Plans
        </h3>
        <p className="mt-1 text-sm" style={{ color: "var(--text-secondary)" }}>
          Choose a plan and manage transport access easily.
        </p>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <article className="rounded-xl border border-slate-200 p-4">
            <h4 className="font-semibold">Monthly</h4>
            <p className="mt-1 text-xl font-bold" style={{ color: "var(--primary)" }}>
              ৳1,500
            </p>
          </article>
          <article className="rounded-xl border border-slate-200 p-4">
            <h4 className="font-semibold">Six-Month</h4>
            <p className="mt-1 text-xl font-bold" style={{ color: "var(--primary)" }}>
              ৳8,100
            </p>
          </article>
          <article className="rounded-xl border border-slate-200 p-4">
            <h4 className="font-semibold">Yearly</h4>
            <p className="mt-1 text-xl font-bold" style={{ color: "var(--primary)" }}>
              ৳14,400
            </p>
          </article>
        </div>
      </section>
    </SiteShell>
  );
}
