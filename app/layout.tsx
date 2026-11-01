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
  title: "Carlos López | Ingeniero en Informática & Full Stack Developer",
  description:
    "Portfolio profesional de Carlos López, Ingeniero en Informática y Full Stack Developer especializado en .NET, React, Next.js, PostgreSQL y AWS. Construyo soluciones web elegantes para problemas complejos.",
  keywords: [
    "Carlos López",
    "Carlos López Rodríguez",
    "Ingeniero en Informática",
    "Full Stack Developer",
    "Desarrollador Full Stack",
    ".NET",
    "ASP.NET Core",
    "C#",
    "React",
    "Next.js",
    "Nextjs",
    "TypeScript",
    "PostgreSQL",
    "AWS",
    "Clean Architecture",
    "SQL Server",
    "Cloud Computing",
    "Software Engineer",
    "Chile",
  ],
  authors: [{ name: "Carlos López", url: "https://github.com/clopez9518" }],
  creator: "Carlos López",
  metadataBase: new URL("https://carloslopezr.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "https://carloslopezr.dev",
    title: "Carlos López | Ingeniero en Informática & Full Stack Developer",
    description:
      "Ingeniero en Informática y Full Stack Developer especializado en .NET, React, Next.js, PostgreSQL y AWS. Construyo soluciones web elegantes para problemas complejos.",
    siteName: "Carlos López Portfolio",
    images: [
      {
        url: "/assets/profile-photo.webp",
        width: 800,
        height: 800,
        alt: "Carlos López - Ingeniero en Informática & Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Carlos López | Ingeniero en Informática & Full Stack Developer",
    description:
      "Ingeniero en Informática y Full Stack Developer especializado en .NET, React, Next.js, PostgreSQL y AWS.",
    images: ["/assets/profile-photo.webp"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Carlos López",
  alternateName: "Carlos López Rodríguez",
  jobTitle: ["Ingeniero en Informática", "Full Stack Developer"],
  url: "https://carloslopezr.dev",
  image: "https://carloslopezr.dev/assets/profile-photo.webp",
  sameAs: [
    "https://github.com/clopez9518",
    "https://www.linkedin.com/in/carlos-l%C3%B3pez-rodr%C3%ADguez-8b249424a",
  ],
  knowsAbout: [
    ".NET",
    "ASP.NET Core",
    "C#",
    "React",
    "PostgreSQL",
    "AWS",
    "Next.js",
    "TypeScript",
    "Clean Architecture",
    "Docker",
    "REST APIs",
  ],
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Duoc UC",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
