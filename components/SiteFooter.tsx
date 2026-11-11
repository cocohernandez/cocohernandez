const LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/cocohernandez" },
  { label: "Instagram", href: "https://www.instagram.com/cocohdzz" },
  { label: "TikTok", href: "https://www.tiktok.com/@cocopuffffffffs" },
  { label: "GitHub", href: "#" }, // TODO: your GitHub URL
  { label: "Email", href: "mailto:you@example.com" }, // TODO: your public email
  { label: "Résumé", href: "/resume.pdf" }, // drop your résumé PDF into /public as resume.pdf
];

export default function SiteFooter() {
  return (
    <footer className="footer">
      <nav className="footer-links" aria-label="Contact">
        {LINKS.map(({ label, href }) =>
          // Email opens the mail app, so it stays in the same tab; a new tab
          // would just leave an empty window behind.
          href.startsWith("mailto:") ? (
            <a key={label} href={href}>
              {label}
            </a>
          ) : (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer">
              {label}
            </a>
          ),
        )}
      </nav>
    </footer>
  );
}
