import type { Metadata } from "next";
import { Inter, Sora, Manrope, Space_Grotesk, Outfit, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// Sleek, modern display-friendly sans for a more stylish look
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["300", "400", "500", "600", "700"],
});

// Slicker body font and display font
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  weight: ["300", "400", "500", "600", "700"],
});

// New cool pairing: Outfit (body) + Bricolage Grotesque (display)
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "SKATMA Holdings | Excellence Across Multiple Industries",
  description: "SKATMA Holdings is a dynamic company partnering with businesses to streamline operations. We offer services in farming, hospitality, construction materials, and automotive care.",
  keywords: "SKATMA Holdings, Cabal Villa, MSTA Holdings, Lumveleni, Agri-nema, farming, restaurant, bar, car wash, brick yards, Thohoyandou, South Africa",
  authors: [{ name: "SKATMA Holdings" }],
  creator: "SKATMA Holdings",
  publisher: "SKATMA Holdings",
  metadataBase: new URL('https://skatmaholdings.co.za'),
  openGraph: {
    title: "SKATMA Holdings | Excellence Across Multiple Industries",
    description: "We provide efficient and effective expertise that help businesses achieve their objectives.",
    url: 'https://skatmaholdings.co.za',
    siteName: 'SKATMA Holdings',
    locale: 'en_ZA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "SKATMA Holdings | Excellence Across Multiple Industries",
    description: "We provide efficient and effective expertise that help businesses achieve their objectives.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${sora.variable} ${inter.variable} ${manrope.variable} ${grotesk.variable} ${outfit.variable} ${bricolage.variable} font-sans antialiased overflow-x-hidden`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
