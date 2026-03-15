import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsAppFab } from "@/components/sections/whatsapp-fab";
import { company } from "@/lib/utils";

export const metadata: Metadata = {
  title: `${company.name} | ${company.tagline}`,
  description: "Premium music label and video production studio delivering end-to-end audio-visual experiences.",
  openGraph: {
    title: company.name,
    description: company.tagline,
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-glow">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFab />
      </body>
    </html>
  );
}
