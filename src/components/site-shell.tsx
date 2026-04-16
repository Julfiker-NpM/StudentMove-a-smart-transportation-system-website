import Link from "next/link";
import type { ReactNode } from "react";
import ThemeToggle from "@/components/theme-toggle";

const leftNavItems = [
  { href: "/", label: "Home" },
  { href: "/next-bus-arrival", label: "Live Location" },
];

export default function SiteShell({
  title,
  subtitle,
  children,
  showIntroCard = true,
  isAuthenticated = false,
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
  showIntroCard?: boolean;
  isAuthenticated?: boolean;
}) {
  return (
    <div className="app-shell min-h-screen">
      <header className="app-header border-b">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4">
          <div>
            <h1 className="text-xl font-bold text-white">StudentMove</h1>
            <p className="text-sm text-blue-100">Smart Transport Solution</p>
          </div>
          <nav className="flex items-center gap-2">
            {leftNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md bg-white/10 px-3 py-2 text-sm font-medium text-blue-100 hover:bg-white/20"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <nav className="flex items-center gap-2">
            <ThemeToggle />
            {isAuthenticated ? (
              <>
                <Link
                  href="/dashboard"
                  className="rounded-md bg-white/10 px-3 py-2 text-sm font-medium text-blue-100 hover:bg-white/20"
                >
                  Dashboard
                </Link>
                <Link
                  href="/notifications"
                  className="rounded-md bg-white/10 px-3 py-2 text-sm font-medium text-blue-100 hover:bg-white/20"
                >
                  Notifications
                </Link>
                <Link
                  href="/api/auth/logout"
                  className="rounded-md bg-rose-500/80 px-3 py-2 text-sm font-medium text-white hover:bg-rose-500"
                >
                  Logout
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-100"
                >
                  Sign in
                </Link>
                <a
                  href="/driver/login"
                  className="rounded-md bg-white/10 px-3 py-2 text-sm font-medium text-blue-100 hover:bg-white/20"
                >
                  Driver
                </a>
                <a
                  href="/admin/login"
                  className="rounded-md bg-white/10 px-3 py-2 text-sm font-medium text-blue-100 hover:bg-white/20"
                >
                  Admin
                </a>
              </>
            )}
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl px-6 py-8">
        {showIntroCard ? (
          <section className="mb-6 rounded-xl border border-blue-200/30 bg-white/95 p-6 shadow-sm dark:bg-slate-900/50">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">{title}</h2>
            {subtitle ? <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{subtitle}</p> : null}
          </section>
        ) : null}
        {children}
      </main>
    </div>
  );
}
