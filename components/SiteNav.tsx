"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const PAGES = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
];

export default function SiteNav() {
  const pathname = usePathname();

  return (
    <header className="nav">
      {/* The signature is the home link (there's no "Home" item in the nav). */}
      <Link
        href="/"
        className="nav-logo"
        aria-label="Coco, home"
        aria-current={pathname === "/" ? "page" : undefined}
      >
        <img src="/images/signature.svg" alt="" />
      </Link>
      <nav className="nav-links" aria-label="Main">
        {PAGES.map(({ href, label }) => (
          // The current page is bolded via [aria-current="page"] in globals.css.
          <Link
            key={href}
            href={href}
            aria-current={pathname === href || pathname.startsWith(href + "/") ? "page" : undefined}
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
