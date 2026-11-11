"use client";

import { useEffect, useState } from "react";

// Each key's box and position comes straight from the Figma frame, measured
// from the top-left of the "Hello" row (which lines up with the photo's top).
// Every key is its own image because Figma's rows clip some edges (H, O, D).
// Rotated keys overlap slightly, so `z` reproduces Figma's layer order.
const KEYS = [
  { char: "h", src: "hello-h", x: -9.72, y: -6.12, w: 86.5, h: 79, z: 10 },
  { char: "e", src: "hello-e", x: 64.74, y: -3.72, w: 76.5, h: 75, z: 9 },
  { char: "l", src: "hello-l1", x: 122.87, y: -15.39, w: 98, h: 97, z: 8 },
  { char: "l", src: "hello-l2", x: 189.17, y: -17.01, w: 101, h: 98.5, z: 7 },
  { char: "o", src: "hello-o", x: 258.47, y: -15.42, w: 102, h: 94.5, z: 6 },
  { char: "w", src: "world-w", x: 19.37, y: 56.59, w: 95.5, h: 86, z: 5 },
  { char: "o", src: "world-o", x: 85.36, y: 51.81, w: 102, h: 94.5, z: 4 },
  { char: "r", src: "world-r", x: 154.15, y: 44.74, w: 101, h: 106.5, z: 3 },
  { char: "l", src: "world-l", x: 220.65, y: 50.58, w: 101, h: 98.5, z: 2 },
  { char: "d", src: "world-d", x: 301.82, y: 62.78, w: 78.5, h: 75, z: 1 },
];

export default function Keycaps() {
  const [pressed, setPressed] = useState<string | null>(null);

  // Typing a letter on the real keyboard presses the matching keycap(s).
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement;
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      if (t.closest("input, textarea, [contenteditable]")) return;
      setPressed(e.key.toLowerCase());
    };
    const up = () => setPressed(null);
    window.addEventListener("keydown", down);
    window.addEventListener("keyup", up);
    return () => {
      window.removeEventListener("keydown", down);
      window.removeEventListener("keyup", up);
    };
  }, []);

  return (
    <h1 className="keys" aria-label="hello world">
      {KEYS.map((k, i) => (
        <span
          key={i}
          aria-hidden="true"
          className={`key${pressed === k.char ? " is-pressed" : ""}`}
          style={{ left: k.x, top: k.y, width: k.w, height: k.h, zIndex: k.z }}
        >
          <img src={`/images/keys/${k.src}.png`} alt="" />
        </span>
      ))}
    </h1>
  );
}
