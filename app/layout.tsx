import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Cahier - Mon français Blog",
    template: "%s | Cahier",
  },
  description: "Mon français Blog",
  keywords: ["blog", "markdown", "next.js", "writing"],
  authors: [{ name: "Cahier" }],
  creator: "Lucas",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cahier.vercel.app",
    siteName: "Lucas",
    title: "Cahier - Mon français Blog",
    description: "Mon français Blog",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cahier - Mon français Blog",
    description: "Mon français Blog",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
