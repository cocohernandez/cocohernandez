// The projects on /projects, in the order they appear.
//
// Each project's page is named after it (/projects/pupper), so links never
// change. The keycap number (1, 2, 3…) is just its position in the grid:
// reorder or archive a project (add `archived: true`) and the rest renumber.
export type Project = { slug: string; title: string; role: string; archived?: boolean };

export const PROJECTS: Project[] = [
  { slug: "creator", title: "@athenacocohernandez", role: "Content Creator" },
  { slug: "645-ventures", title: "645 Ventures", role: "Investment Fellow" },
  { slug: "node", title: "NODE", role: "Role to add" },
  { slug: "pupper", title: "Pupper", role: "Role to add" },
  { slug: "lovelace", title: "Lovelace", role: "Role to add" },
  { slug: "fashionx", title: "FashionX", role: "Role to add" },
];

/** The projects shown in the grid (everything not archived). */
export const CURRENT = PROJECTS.filter((p) => !p.archived);

export const projectHref = (slug: string) => `/projects/${slug}`;
