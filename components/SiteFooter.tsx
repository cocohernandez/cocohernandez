const LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/cocohernandez" },
  { label: "Instagram", href: "https://www.instagram.com/athenacocohernandez" },
  { label: "TikTok", href: "https://www.tiktok.com/@athenacocohernandez" },
  { label: "YouTube", href: "https://www.youtube.com/@athenacocohernandez" },
  { label: "GitHub", href: "https://github.com/cocohernandez" },
  { label: "Email", href: "mailto:you@example.com" }, // TODO: your public email
  { label: "Résumé", href: "/resume.pdf" }, // drop your résumé PDF into /public as resume.pdf
];

function FooterLink({ label, href }: { label: string; href: string }) {
  // Email opens the mail app, so it stays in the same tab; a new tab would
  // just leave an empty window behind.
  return href.startsWith("mailto:") ? (
    <a href={href}>{label}</a>
  ) : (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {label}
    </a>
  );
}

export default function SiteFooter() {
  // One line on desktop; on mobile, socials on the first row and
  // GitHub/Email/Résumé on the second (as in Figma, plus YouTube).
  const rows = [LINKS.slice(0, 4), LINKS.slice(4)];
  return (
    <footer className="footer">
      <nav className="footer-links" aria-label="Contact">
        {rows.map((row, i) => (
          <div className="footer-row" key={i}>
            {row.map((link) => (
              <FooterLink key={link.label} {...link} />
            ))}
          </div>
        ))}
      </nav>
    </footer>
  );
}
