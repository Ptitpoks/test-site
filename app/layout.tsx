import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pixel & Co — Agence Web Créative",
  description:
    "Pixel & Co, agence web spécialisée dans la création de sites modernes, le développement d'applications et le référencement naturel.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="bg-white text-gray-900 antialiased">{children}</body>
    </html>
  );
}
