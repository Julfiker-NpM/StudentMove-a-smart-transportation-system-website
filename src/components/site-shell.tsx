import Link from "next/link";
import type { ReactNode } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/notifications", label: "Notifications" },
];

export default function SiteShell({
  title,
  subtitle,
  children,
  showIntroCard = true,
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
  showIntroCard?: boolean;
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
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md bg-white/10 px-3 py-2 text-sm font-medium text-blue-100 hover:bg-white/20"
              >
                {item.label}
              </Link>
            ))}
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
