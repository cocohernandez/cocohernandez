import ComingSoon from "@/components/ComingSoon";
import { PROJECTS } from "@/lib/projects";

// One page per project (/projects/pupper…). The site is static, so every
// page is built ahead of time; any other name is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export default function ProjectPage() {
  return <ComingSoon />;
}
