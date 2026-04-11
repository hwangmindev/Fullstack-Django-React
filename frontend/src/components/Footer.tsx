import AuthNavItems from "@/components/AuthNavItems";

const footerLinkClass =
  "text-foreground/70 transition-colors hover:text-primary";

const footerLogoutClass =
  `${footerLinkClass} cursor-pointer border-0 bg-transparent p-0 font-inherit text-left underline-offset-2 hover:underline`;

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-background dark:border-zinc-800">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-foreground/70">
            © {new Date().getFullYear()} Full-Stack App. All rights reserved.
          </p>
          <nav
            className="flex flex-wrap gap-x-6 gap-y-2 text-sm"
            aria-label="Footer navigation"
          >
            <AuthNavItems
              linkClassName={footerLinkClass}
              logoutButtonClassName={footerLogoutClass}
            />
          </nav>
        </div>
      </div>
    </footer>
  );
}
