import Link from "next/link";
import Keycaps from "@/components/Keycaps";
import { projectHref } from "@/lib/projects";

export default function Home() {
  return (
    <main className="hero">
      <img
        className="hero-photo"
        src="/images/photo.jpg"
        alt="Coco walking across white rock formations by the sea, shot on film"
      />

      <div className="hero-text">
        <Keycaps />

        <div className="bio">
          <p>
            I’m Coco, a software engineer and designer studying computer
            science at Stanford.
          </p>
          <p>
            I build robot puppies<Link className="fn" href={projectHref("pupper")}>¹</Link>,
            design for my clothing brand Lovelace
            <Link className="fn" href={projectHref("lovelace")}>²</Link>, make fashion +
            tech content for 25k followers
            <Link className="fn" href={projectHref("creator")}>³</Link>, and explain blockchain art in
            downtown Palo Alto<Link className="fn" href="/about#node">⁴</Link>.
          </p>
          <div className="verse">
            <span>In every medium I touch,</span>
            <span>I take the technical, the abstract,</span>
            <span>and give it form,</span>
            <span className="pixel" aria-label="down to the pixel.">{"down to the p                      l.\n                             i          e\n                                  x"}</span>
          </div>
          <p>
            The ⌘ in my signature is an homage to my favorite designer,
            Susan Kare, who chose it for Macintosh’s command key.
          </p>
        </div>
      </div>
    </main>
  );
}
