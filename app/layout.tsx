import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { Flowbite } from "flowbite-react";
import Theme from "@/theme.config";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import "./globals.css";

const openSan = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PatternX",
  description:
    "PatternX is a powerful tool that learns the best way to match similar rows in your Excel spreadsheet or database. Using cutting-edge research in machine learning we will quickly, accurately, and easily clean up your data—saving you time and money.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Flowbite theme={{ theme: Theme }}>
        <body className={openSan.className}>
          <Header />
          {children}
          <Footer />
        </body>
      </Flowbite>
    </html>
  );
}
