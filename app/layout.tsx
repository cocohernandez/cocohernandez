import type { Metadata } from "next";
import "@fontsource/inter/500.css";
import "@fontsource/inter/700.css";
import "./globals.css";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Coco Hernandez",
  description:
    "Software engineer and designer studying computer science at Stanford.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        {/* Nav + page content fill the first screen; the footer sits below the fold. */}
        <div className="screen">
          <SiteNav />
          {children}
        </div>
        <SiteFooter />
      </body>
    </html>
  );
}
