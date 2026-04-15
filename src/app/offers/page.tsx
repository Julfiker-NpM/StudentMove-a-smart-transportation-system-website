import Link from "next/link";
import SiteShell from "@/components/site-shell";
import { prisma } from "@/lib/prisma";

export default async function OffersPage() {
  const offers = await prisma.notification.findMany({
    where: { active: true },
    select: { id: true, title: true, message: true, createdAt: true },
    orderBy: { createdAt: "desc" },
    take: 10,
  });

  return (
    <SiteShell title="Offers" subtitle="Current promotions for students" isAuthenticated={false}>
      <section className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900/40">
        <div className="space-y-3">
          {offers.length === 0 ? (
            <p className="text-sm text-slate-600 dark:text-slate-300">No active offers at the moment.</p>
          ) : (
            offers.map((item) => (
              <article
                key={item.id}
                className="rounded-xl border border-amber-200 bg-amber-50 p-4 dark:border-amber-600/30 dark:bg-amber-600/10"
              >
                <h3 className="font-semibold text-slate-900 dark:text-slate-100">{item.title}</h3>
                <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">{item.message}</p>
                <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                  {new Date(item.createdAt).toLocaleString()}
                </p>
              </article>
            ))
          )}
        </div>
        <Link href="/dashboard" className="mt-5 inline-block text-sm font-medium text-blue-600 hover:underline">
          ← Back to Dashboard
        </Link>
      </section>
    </SiteShell>
  );
}
