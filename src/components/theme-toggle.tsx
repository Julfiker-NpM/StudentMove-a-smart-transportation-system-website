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
      aria-label={theme === "dark" ? "Switch to day mode" : "Switch to night mode"}
      title={theme === "dark" ? "Switch to day mode" : "Switch to night mode"}
      className={`relative flex h-11 w-36 items-center rounded-full border px-2 transition ${
        theme === "dark"
          ? "border-slate-700 bg-black text-white"
          : "border-slate-300 bg-slate-200 text-slate-800"
      }`}
    >
      <span
        className={`pointer-events-none absolute top-1 flex h-8 w-8 items-center justify-center rounded-full text-base transition ${
          theme === "dark" ? "right-1 bg-white text-slate-900" : "left-1 bg-white text-slate-800"
        }`}
      >
        {theme === "dark" ? "☾" : "☀"}
      </span>
      <span className={`w-full text-center text-xs font-semibold tracking-[0.2em] ${theme === "dark" ? "pr-7" : "pl-7"}`}>
        {theme === "dark" ? "NIGHT MODE" : "DAY MODE"}
      </span>
    </button>
  );
}
