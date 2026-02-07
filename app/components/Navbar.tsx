"use client";

import { useTheme } from "../hooks/useTheme";
let pdf = "https://drive.google.com/uc?export=download&id=1FDi6FTc3jF13LVBwpJlRNpdCgthyZ53k"

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="
      fixed inset-x-0 top-0 z-50
      bg-white/70 dark:bg-neutral-950/60
      backdrop-blur
      border-b border-neutral-200 dark:border-neutral-800
    ">
      <nav className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
        {/* Identity */}
        <div className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
          Shiv Yadav
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-6 text-sm text-neutral-600 dark:text-neutral-400">
          <a
            href="#projects"
            className="transition hover:text-neutral-900 dark:hover:text-white"
          >
            Projects
          </a>

          <a
            href={pdf}
            target="_blank"
            rel="noreferrer"
            download
            className="transition hover:text-neutral-900 dark:hover:text-white"
          >
            Resume
          </a>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="
              rounded-md
              border border-neutral-300 dark:border-neutral-700
              px-3 py-1
              text-xs font-medium
              text-neutral-700 dark:text-neutral-300
              transition
              hover:bg-neutral-100 dark:hover:bg-neutral-800
            "
            aria-label="Toggle theme"
          >
            {theme === "dark" ? "Light" : "Dark"}
          </button>
        </div>
      </nav>
    </header>
  );
}
