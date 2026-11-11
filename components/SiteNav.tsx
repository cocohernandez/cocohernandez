"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const PAGES = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/media", label: "Media" },
  { href: "/about", label: "About" },
];

export default function SiteNav() {
  const pathname = usePathname();

  return (
    <header className="nav">
      <Link href="/" className="nav-logo" aria-label="Coco, home">
        <img src="/images/signature.svg" alt="" />
      </Link>
      <nav className="nav-links" aria-label="Main">
        {PAGES.map(({ href, label }) => (
          // The current page is bolded via [aria-current="page"] in globals.css.
          <Link
            key={href}
            href={href}
            aria-current={pathname === href ? "page" : undefined}
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
