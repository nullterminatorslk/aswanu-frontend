import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { isMobileDevice } from "@/lib/isMobileDevice";
import { cn } from "@/lib/utils";
import CurrentFocusedSectionProvider from "@/providers/CurrentFocusedSectionProvider";
import DeviceProvider from "@/providers/DeviceProvider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const font = Inter({ subsets: ["latin-ext"] });

export const metadata: Metadata = {
  title: "Aswanna",
  description:
    "  Aswanna is a revolutionary auction platform that empowers vegetable farmers to connect directly with wholesale buyers, ensuring fair prices and efficient distribution. Discover fresh, locally sourced produce and support sustainable agriculture.",
  icons: [
    {
      rel: "apple-touch-icon",
      type: "",
      sizes: "180x180",
      url: "/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon-16x16.png",
    },
    { rel: "manifest", url: "/site.webmanifest" },
  ],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isMobile = await isMobileDevice();

  return (
    <html lang="en">
      <body className={cn(`antialiased text-foreground`, font.className)}>
        <DeviceProvider isMobile={isMobile}>
          <CurrentFocusedSectionProvider>
            <Navbar />
            {children}
            <Footer />
          </CurrentFocusedSectionProvider>
        </DeviceProvider>
      </body>
    </html>
  );
}
