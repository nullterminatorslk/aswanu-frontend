import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";
import Footer from "@/components/Footer";
import DeviceProvider from "@/providers/DeviceProvider";
import { isMobileDevice } from "@/lib/isMobileDevice";
import CurrentFocusedSectionProvider from "@/providers/CurrentFocusedSectionProvider";
import { Manrope } from "next/font/google";

const font = Manrope({ subsets: ["latin-ext"] });

export const metadata: Metadata = {
  title: "Laundryland",
  description:
    "Laundryland (Pvt) Ltd is Sri Lanka's premier laundry service, dedicated to providing exceptional care for your garments. With our 24/7 availability and fast turnaround times, we offer a hassle-free laundry experience like no other.",
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
