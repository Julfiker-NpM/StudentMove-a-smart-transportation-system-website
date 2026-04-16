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
        <div className="w-full max-w-5xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-blue-200">StudentMove</p>
          <h2 className="text-4xl font-bold text-white md:text-6xl">Smart Transportation for Dhaka City Students</h2>
          <p className="mx-auto mt-4 max-w-3xl text-base text-blue-100 md:text-xl">
            Plan your route, track your bus in real-time, and arrive on time with a unified student transport platform.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href="/login" className="sm-primary-btn rounded-lg px-5 py-2.5 font-medium hover:brightness-110">
              Get Started
            </a>
            <a href="/signup" className="rounded-lg bg-white px-5 py-2.5 font-medium text-slate-900 hover:bg-slate-100">
              Sign Up
            </a>
          </div>
        </div>
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-3">
        <article className="sm-card p-5 text-center">
          <p className="text-4xl font-bold" style={{ color: "var(--primary)" }}>1500+</p>
          <p className="mt-1 text-sm" style={{ color: "var(--text-secondary)" }}>Students Served</p>
        </article>
        <article className="sm-card p-5 text-center">
          <p className="text-4xl font-bold" style={{ color: "var(--primary)" }}>42</p>
          <p className="mt-1 text-sm" style={{ color: "var(--text-secondary)" }}>University Routes</p>
        </article>
        <article className="sm-card p-5 text-center">
          <p className="text-4xl font-bold" style={{ color: "var(--accent-success)" }}>93%</p>
          <p className="mt-1 text-sm" style={{ color: "var(--text-secondary)" }}>On-time Arrival</p>
        </article>
      </section>

      <section id="features" className="mt-8 sm-card p-6">
        <h3 className="text-2xl font-bold" style={{ color: "var(--text-primary)" }}>Core Features</h3>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <article className="rounded-xl border border-slate-200 p-4">
            <h4 className="font-semibold">Real-time Bus Tracking</h4>
            <p className="mt-1 text-sm" style={{ color: "var(--text-secondary)" }}>
              View bus locations and expected arrival times from one dashboard.
            </p>
          </article>
          <article className="rounded-xl border border-slate-200 p-4">
            <h4 className="font-semibold">Route Planning & Scheduling</h4>
            <p className="mt-1 text-sm" style={{ color: "var(--text-secondary)" }}>
              Find optimized route options based on destination and timing.
            </p>
          </article>
          <article className="rounded-xl border border-slate-200 p-4">
            <h4 className="font-semibold">Delay Notifications</h4>
            <p className="mt-1 text-sm" style={{ color: "var(--text-secondary)" }}>
              Get schedule delay and route change alerts through your notification panel.
            </p>
          </article>
          <article className="rounded-xl border border-slate-200 p-4">
            <h4 className="font-semibold">Feedback & Support</h4>
            <p className="mt-1 text-sm" style={{ color: "var(--text-secondary)" }}>
              Submit bugs, suggestions, or complaints and track admin responses.
            </p>
          </article>
        </div>
      </section>

      <section className="mt-8 sm-card p-6">
        <h3 className="text-2xl font-bold" style={{ color: "var(--text-primary)" }}>Choose Your Plan</h3>
        <p className="mt-1 text-sm" style={{ color: "var(--text-secondary)" }}>
          Starting at BDT 50/day. Select the plan that suits your route and schedule.
        </p>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <article className="rounded-xl border border-slate-200 p-4">
            <h4 className="font-semibold">Monthly Plan</h4>
            <p className="mt-1 text-xl font-bold" style={{ color: "var(--primary)" }}>৳1,500 / month</p>
            <p className="mt-1 text-sm" style={{ color: "var(--text-secondary)" }}>BDT 50 per day</p>
          </article>
          <article className="rounded-xl border-2 p-4" style={{ borderColor: "var(--primary)" }}>
            <h4 className="font-semibold">6 Months Plan</h4>
            <p className="mt-1 text-xl font-bold" style={{ color: "var(--primary)" }}>৳8,100 / 6 months</p>
            <p className="mt-1 text-sm" style={{ color: "var(--text-secondary)" }}>Save 10%</p>
          </article>
          <article className="rounded-xl border border-slate-200 p-4">
            <h4 className="font-semibold">1 Year Plan</h4>
            <p className="mt-1 text-xl font-bold" style={{ color: "var(--primary)" }}>৳14,400 / year</p>
            <p className="mt-1 text-sm" style={{ color: "var(--text-secondary)" }}>Save 20%</p>
          </article>
        </div>
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-2">
        <article id="testimonials" className="sm-card p-6">
          <h3 className="text-xl font-semibold" style={{ color: "var(--text-primary)" }}>What Students Say</h3>
          <blockquote className="mt-3 text-sm" style={{ color: "var(--text-secondary)" }}>
            “StudentMove makes commuting easier. I always know where my bus is and when it will arrive.”
          </blockquote>
          <p className="mt-2 text-sm font-medium">Md Julfikar Hasan, Dhaka University</p>
        </article>
        <article id="contact" className="sm-card p-6">
          <h3 className="text-xl font-semibold" style={{ color: "var(--text-primary)" }}>Contact</h3>
          <p className="mt-2 text-sm" style={{ color: "var(--text-secondary)" }}>
            Email: studentmove.dhaka@gmail.com
          </p>
          <p className="mt-1 text-sm" style={{ color: "var(--text-secondary)" }}>
            Support available for route, subscription, and delay issues.
          </p>
        </article>
      </section>
    </SiteShell>
  );
}
