const LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/cocohernandez" },
  { label: "Instagram", href: "https://www.instagram.com/athenacocohernandez" },
  { label: "TikTok", href: "https://www.tiktok.com/@athenacocohernandez" },
  { label: "YouTube", href: "https://www.youtube.com/@athenacocohernandez" },
  { label: "GitHub", href: "https://github.com/cocohernandez" },
  { label: "Email", href: "mailto:athenacocohernandez@gmail.com" },
  { label: "Résumé", href: "/resume" }, // Coming soon page for now
];

function FooterLink({ label, href }: { label: string; href: string }) {
  // Only outside sites open in a new tab. Email opens the mail app and
  // pages on this site (like Résumé) stay in the same tab.
  return !href.startsWith("http") ? (
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
