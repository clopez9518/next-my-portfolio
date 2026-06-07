import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Carlos López | Portfolio",
  description: "Portfolio de Carlos López, desarrollador fullstack .NET y React.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
