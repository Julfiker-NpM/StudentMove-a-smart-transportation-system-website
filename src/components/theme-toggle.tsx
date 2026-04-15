"use client";

import { useEffect, useState } from "react";

type ThemeMode = "dark" | "light";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    if (typeof window === "undefined") {
      return "dark";
    }
    const stored = localStorage.getItem("studentmove_theme") as ThemeMode | null;
    return stored ?? "dark";
  });

  useEffect(() => {
    localStorage.setItem("studentmove_theme", theme);
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  function toggleTheme() {
    const nextTheme: ThemeMode = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("studentmove_theme", nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="rounded-md bg-white/10 px-3 py-2 text-sm font-medium text-blue-100 hover:bg-white/20"
    >
      {theme === "dark" ? "Day Mode" : "Dark Mode"}
    </button>
  );
}
