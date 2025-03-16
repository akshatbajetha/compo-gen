import type { Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "@/components/Navbar";
import { Analytics } from "@vercel/analytics/next";
import Footer from "@/components/Footer";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://compogen.vercel.app/"),
  title: {
    default: "CompoGen - AI React Component Generator",
    template: "%s | CompoGen",
  },
  description: "Generate AI-powered React components instantly from text",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: {
      default: "CompoGen - AI React Component Generator",
      template: "%s | CompoGen",
    },
    description: "Generate AI-powered React components instantly from text",
    url: "https://compogen.vercel.app/",
    siteName: "CompoGen",
    images: [
      {
        url: "/compogen.png", // Ensure this path is correct
        width: 1200,
        height: 630,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={`${inter.className} ${inter.className} antialiased`}>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <Navbar />
            {children}
            <Footer />
            <Toaster />
            <Analytics />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
