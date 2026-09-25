import type { Metadata, Viewport } from "next";
import { themeInitScript } from "@ds/lib/theme-script";
import { company } from "@/content/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(company.url),
  title: { default: `${company.name} — ${company.tagline}`, template: `%s · ${company.name}` },
  description: company.description,
  applicationName: company.name,
  openGraph: { type: "website", locale: "pt_BR", siteName: company.name, url: "/" },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: LayoutProps<"/">) {
  // Dark is the brand default; the inline script applies the visitor's saved choice before first paint.
  return (
    <html lang="pt-BR" data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
