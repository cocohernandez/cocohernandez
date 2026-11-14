"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { CURRENT, projectHref, projectImage } from "@/lib/projects";

// The 3 × 2 grid from the projects frame in Figma (222:1720). The whole card
// is a link, and typing 1–6 on the keyboard presses that number's keycap and
// opens the project.
export default function ProjectGrid() {
  const router = useRouter();
  const [pressed, setPressed] = useState<number | null>(null);

  useEffect(() => {
    const indexOf = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement;
      if (e.metaKey || e.ctrlKey || e.altKey) return null;
      if (t.closest("input, textarea, [contenteditable]")) return null;
      const n = Number(e.key);
      return Number.isInteger(n) && n >= 1 && n <= CURRENT.length ? n - 1 : null;
    };
    const down = (e: KeyboardEvent) => {
      const i = indexOf(e);
      if (i !== null) setPressed(i);
    };
    // Open the project when the key comes back up, so the press is visible.
    const up = (e: KeyboardEvent) => {
      const i = indexOf(e);
      setPressed(null);
      if (i !== null) router.push(projectHref(CURRENT[i].slug));
    };
    window.addEventListener("keydown", down);
    window.addEventListener("keyup", up);
    return () => {
      window.removeEventListener("keydown", down);
      window.removeEventListener("keyup", up);
    };
  }, [router]);

  return (
    <ul className="project-grid">
      {CURRENT.map((p, i) => (
        <li key={p.slug}>
          <Link href={projectHref(p.slug)} className={`project${pressed === i ? " is-pressed" : ""}`}>
            <img className="project-image" src={projectImage(p)} alt="" />
            <span className="project-caption">
              <img className="project-number" src={`/images/numbers/${i + 1}.png`} alt={`${i + 1}`} />
              <span>
                <span className="project-title">{p.title}</span>
                <span className="project-role">{p.role}</span>
              </span>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
