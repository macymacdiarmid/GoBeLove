import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Go Be Love — Purpose-Driven Streetwear",
    template: "%s | Go Be Love",
  },
  description:
    "Gender-neutral hoodies that fund children's education at Xhope Children's School in Uganda. Streetwear with soul.",
  keywords: ["hoodies", "streetwear", "purpose-driven", "Uganda", "charity", "apparel"],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Go Be Love",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
