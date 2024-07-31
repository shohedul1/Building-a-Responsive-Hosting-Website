import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "./components/Navbar/ResponsiveNav";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/Helper/ScrollToTop";

const inter = Plus_Jakarta_Sans({
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Web Host | Template Next.js",
  description: "Web Host website Template using Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col items-center justify-center w-full h-full">
          <div className="w-full max-w-[1440px]">
            <ResponsiveNav />
            {children}
            <Footer />
            <ScrollToTop/>
          </div>
        </div>
      </body>
    </html>
  );
}
