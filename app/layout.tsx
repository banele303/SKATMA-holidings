import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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
      <body className={`${inter.variable} font-sans antialiased`}>
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
