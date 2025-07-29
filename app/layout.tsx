import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "CineFlow | Video Editor, Filmmaker, Content Creator Portfolio",
  description:
    "Explore my portfolio featuring video editing, filmmaking, and content creation work. Discover my latest projects, films, and vlogs.",
  keywords: [
    "video editor portfolio",
    "filmmaker portfolio",
    "content creator portfolio",
    "video production",
    "film making",
    "editing",
    "DaVinci Resolve",
    "Adobe Premiere Pro",
    "After Effects",
    "Videography",
  ],
  authors: [{ name: "Rohit Pujari", url: "https://rohit-pujari.github.io" }],
  creator: "Rohit Pujari",
  metadataBase: new URL("https://cineflow.vercel.app"),
  openGraph: {
    title: "CineFlow | Video Editor, Filmmaker, Content Creator Portfolio",
    description: "Explore my work, films, and vlogs.",
    url: "https://cineflow.vercel.app",
    siteName: "CineFlow Portfolio",
    locale: "en_IN",
    type: "website",
    images: [
      { url: "https://cineflow.vercel.app/images/hero.png", alt: "CineFlow Portfolio" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="bg-black text-white "
      >
        {children}
      </body>
    </html>
  );
}
