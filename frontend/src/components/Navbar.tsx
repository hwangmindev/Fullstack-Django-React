import Link from "next/link";
import AuthNavItems from "@/components/AuthNavItems";

const navLinkClass =
  "rounded-md px-2.5 py-1.5 text-sm font-medium text-foreground/80 transition-colors hover:bg-zinc-100 hover:text-foreground dark:hover:bg-zinc-900";

const logoutClass =
  `${navLinkClass} inline-flex cursor-pointer items-center border-0 bg-transparent font-inherit`;

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200/80 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 dark:border-zinc-800/80">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          href="/"
          className="shrink-0 text-lg font-semibold tracking-tight text-foreground transition-colors hover:text-primary"
        >
          Full-Stack App
        </Link>
        <nav
          className="flex flex-wrap items-center justify-end gap-1 sm:gap-2"
          aria-label="Main navigation"
        >
          <AuthNavItems
            linkClassName={navLinkClass}
            logoutButtonClassName={logoutClass}
          />
        </nav>
      </div>
    </header>
  );
}
