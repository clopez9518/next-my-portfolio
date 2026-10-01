import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Carlos López | Full-Stack Developer .NET & React",
  description:
    "Portfolio profesional de Carlos López, Desarrollador Full-Stack especializado en .NET, React, Next.js y Clean Architecture. Construyo soluciones web elegantes para problemas complejos.",
  keywords: [
    "Carlos López",
    "Full-Stack Developer",
    "Desarrollador Fullstack",
    ".NET",
    "ASP.NET Core",
    "C#",
    "React",
    "Next.js",
    "TypeScript",
    "Clean Architecture",
    "SQL Server",
    "PostgreSQL",
    "Cloud Computing",
    "Software Engineer",
    "Chile",
  ],
  authors: [{ name: "Carlos López", url: "https://github.com/clopez9518" }],
  creator: "Carlos López",
  metadataBase: new URL("https://carlos-lopez.dev"),
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "https://carlos-lopez.dev",
    title: "Carlos López | Full-Stack Developer .NET & React",
    description:
      "Construyo soluciones web elegantes para problemas complejos con .NET, React y Clean Architecture.",
    siteName: "Carlos López Portfolio",
    images: [
      {
        url: "/assets/profile-photo.webp",
        width: 800,
        height: 800,
        alt: "Carlos López - Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Carlos López | Full-Stack Developer .NET & React",
    description:
      "Construyo soluciones web elegantes para problemas complejos con .NET, React y Clean Architecture.",
    images: ["/assets/profile-photo.webp"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning className={inter.variable}>
      <body className={`${inter.className} antialiased bg-background text-foreground transition-colors duration-300`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
