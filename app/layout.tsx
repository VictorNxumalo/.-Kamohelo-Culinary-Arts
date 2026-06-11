import type { Metadata, Viewport } from "next";
import { Cinzel, Inter, Montserrat } from "next/font/google";
import { Analytics } from "@/components/Analytics";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { PageLoader } from "@/components/PageLoader";
import { ScrollProgress } from "@/components/ScrollProgress";
import { BRAND, BRAND_STATEMENT } from "@/lib/constants";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500"],
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${BRAND.visual} | ${BRAND.chef}`,
    template: `%s | ${BRAND.visual}`,
  },
  description: BRAND_STATEMENT,
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: `${BRAND.visual} | ${BRAND.chef}`,
    description: BRAND_STATEMENT,
    type: "website",
    locale: "en_ZA",
    siteName: BRAND.visual,
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1024,
        height: 1024,
        alt: `${BRAND.visual} logo`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${BRAND.visual} | ${BRAND.chef}`,
    description: BRAND_STATEMENT,
    images: [DEFAULT_OG_IMAGE],
  },
};

export const viewport: Viewport = {
  themeColor: "#121212",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${inter.variable} ${cinzel.variable}`}
    >
      <body className="min-h-screen font-body">
        <Analytics />
        <ScrollProgress />
        <PageLoader />
        <Header />
        <main className="pt-[72px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
