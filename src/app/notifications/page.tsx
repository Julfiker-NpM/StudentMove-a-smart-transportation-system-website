import SiteShell from "@/components/site-shell";
import { prisma } from "@/lib/prisma";

type NotificationItem = {
  id: string;
  title: string;
  message: string;
  createdAt: string;
};

async function getNotifications(): Promise<NotificationItem[]> {
  const rows = await prisma.notification.findMany({
    where: { active: true },
    orderBy: { createdAt: "desc" },
    take: 20,
  });

  return rows.map((item) => ({
    id: item.id,
    title: item.title,
    message: item.message,
    createdAt: item.createdAt.toISOString(),
  }));
}

export default async function NotificationsPage() {
  const notifications = await getNotifications();

  return (
    <SiteShell title="Notifications" subtitle="Latest service updates and offers" isAuthenticated={false}>
      <section className="rounded-xl border border-slate-200 bg-white p-6">
        <div className="space-y-3">
          {notifications.length === 0 ? (
            <p className="text-sm text-slate-600">No notifications at the moment.</p>
          ) : (
            notifications.map((item) => (
              <article
                key={item.id}
                className="rounded-xl border-l-4 border-l-blue-500 border-slate-200 bg-slate-50 p-4"
              >
                <h3 className="font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-1 text-sm text-slate-700">{item.message}</p>
                <p className="mt-2 text-xs text-slate-500">
                  {new Date(item.createdAt).toLocaleString()}
                </p>
              </article>
            ))
          )}
        </div>
      </section>
    </SiteShell>
  );
}
