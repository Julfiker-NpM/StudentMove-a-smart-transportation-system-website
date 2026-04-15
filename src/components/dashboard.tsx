"use client";

import { useEffect, useState } from "react";

type HealthResponse = {
  ok: boolean;
  service: string;
  timestamp: string;
};

type NotificationItem = {
  id: string;
  title: string;
  message: string;
};

export default function Dashboard() {
  const [health, setHealth] = useState<HealthResponse | null>(null);
  const [notifications, setNotifications] = useState<NotificationItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const [healthRes, notificationRes] = await Promise.all([
          fetch("/api/health"),
          fetch("/api/notifications"),
        ]);

        if (healthRes.ok) {
          setHealth((await healthRes.json()) as HealthResponse);
        }

        if (notificationRes.ok) {
          setNotifications((await notificationRes.json()) as NotificationItem[]);
        }
      } finally {
        setLoading(false);
      }
    }

    void load();
  }, []);

  return (
    <div className="space-y-6">
      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-lg font-semibold text-slate-900">System Status</h2>
        {loading ? (
          <p className="mt-2 text-slate-600">Loading status...</p>
        ) : (
          <div className="mt-2 space-y-1 text-sm text-slate-700">
            <p>API: {health?.ok ? "Healthy" : "Unavailable"}</p>
            <p>Service: {health?.service ?? "Unknown"}</p>
            <p>Last check: {health?.timestamp ?? "N/A"}</p>
          </div>
        )}
      </section>

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
