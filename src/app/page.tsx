import Link from "next/link";
import SiteShell from "@/components/site-shell";

export default function Home() {
  return (
    <SiteShell
      title="Welcome to StudentMove"
      subtitle="Smart Transport Solution for Dhaka City Students"
    >
      <section className="rounded-xl border border-slate-200 bg-white p-8 text-center">
        <p className="mb-6 text-slate-600">
          Use the quick links below to access your dashboard, notifications, and route services.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link href="/dashboard" className="rounded-lg bg-blue-600 px-5 py-2.5 font-medium text-white hover:bg-blue-700">
            Go to Dashboard
          </Link>
          <a href="#" className="rounded-lg bg-gray-200 px-5 py-2.5 font-medium text-gray-800 hover:bg-gray-300">
            Register
          </a>
          <a href="#" className="rounded-lg bg-amber-500 px-5 py-2.5 font-medium text-white hover:bg-amber-600">
            Driver Login
          </a>
          <a href="#" className="rounded-lg bg-purple-600 px-5 py-2.5 font-medium text-white hover:bg-purple-700">
            Admin Login
          </a>
        </div>
      </section>
    </SiteShell>
  );
}
