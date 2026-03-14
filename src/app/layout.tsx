import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/Providers";

export const metadata: Metadata = {
  title: "Kitchen Bunker | Arquitetura de Integração",
  description: "Estação Grill de alta performance integrada ao cockpit culinário de elite. Design industrial soberano.",
  icons: {
    icon: '/favicon.svg',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning={true}>
      <body className="antialiased selection:bg-accent/30 selection:text-accent">
        <Providers>
          <div className="scanline" />
          {children}
        </Providers>
      </body>
    </html>
  );
}
