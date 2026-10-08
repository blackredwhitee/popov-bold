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
  title: { default: "Михаил Попов — предприниматель, основатель Talkbank и EasyFinance", template: `%s — ${SITE_NAME}` },
  description: "Михаил Попов — предприниматель в финтехе и инновациях, основатель Talkbank и EasyFinance. Нахожу, где бизнес теряет деньги, и помогаю собственнику превратить потери в прибыль.",
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
