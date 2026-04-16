"use client";

import { useEffect, useState } from "react";

type NotificationItem = {
  id: string;
  title: string;
  message: string;
};

export default function Dashboard() {
  const [notifications, setNotifications] = useState<NotificationItem[]>([]);

  useEffect(() => {
    async function load() {
      try {
        const notificationRes = await fetch("/api/notifications");

        if (notificationRes.ok) {
          setNotifications((await notificationRes.json()) as NotificationItem[]);
        }
      } catch {
        // Keep silent for dashboard widget-level errors.
      }
    }

    void load();
  }, []);

  return (
    <div className="space-y-6">
      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-lg font-semibold text-slate-900">Latest Notifications</h2>
        <div className="mt-3 space-y-3">
          {notifications.length === 0 ? (
            <p className="text-sm text-slate-600">No active notifications yet.</p>
          ) : (
            notifications.map((item) => (
              <article key={item.id} className="rounded-lg border border-slate-100 p-3">
                <h3 className="font-medium text-slate-900">{item.title}</h3>
                <p className="text-sm text-slate-700">{item.message}</p>
              </article>
            ))
          )}
        </div>
      </section>
    </div>
  );
}
