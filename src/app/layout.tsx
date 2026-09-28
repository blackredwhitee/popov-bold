import type { Metadata, Viewport } from "next";
import { Inter_Tight } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LeadModal from "@/components/LeadModal";
import Reveal from "@/components/Reveal";
import { SITE_NAME, SITE_URL } from "@/lib/config";
import "./globals.css";

const inter = Inter_Tight({ subsets: ["cyrillic", "latin"], weight: ["400", "500", "600", "700", "800"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL + "/"),
  title: { default: "Михаил Попов — внешний директор по развитию", template: `%s — ${SITE_NAME}` },
  description: "Нахожу, где бизнес теряет деньги, и остаюсь, пока это не превратится в прибыль. 25+ лет в управлении: «Магнит», ГК ПИК, BORK. Для собственников с выручкой от 300 млн ₽.",
};

export const viewport: Viewport = { themeColor: "#F2F1ED" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" suppressHydrationWarning className={inter.variable}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <LeadModal />
        <Reveal />
      </body>
    </html>
  );
}
