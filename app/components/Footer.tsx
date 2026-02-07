export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-900 bg-neutral-50/50 dark:bg-neutral-950/50 py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 md:flex-row md:items-center md:justify-between">
        {/* Left */}
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          © {new Date().getFullYear()} Shiv Yadav. Frontend Product Engineer.
        </p>

        {/* Right */}
        <div className="flex items-center gap-6 text-sm text-neutral-600 dark:text-neutral-400">
          <a
            href="mailto:devshiv097@gmail.com"
            className="transition hover:text-neutral-900 dark:hover:text-white"
          >
            Email
          </a>

          <a
            href="https://www.linkedin.com/in/shiv-pratap-singh-yadav-252b25236/"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-neutral-900 dark:hover:text-white"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/shivprataps123"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-neutral-900 dark:hover:text-white"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
