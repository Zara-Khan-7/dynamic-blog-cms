import type { Metadata } from "next";
import { Belleza } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Head from "next/head";

const belleza = Belleza({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "ZK Blogs",
  description: "My Dynamic Blog Web using CMS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        {/* Add the viewport meta tag for responsive design */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>ZK Blogs</title> {/* You can set the title here or in metadata */}
      </Head>
      <body className={belleza.className}>
        <div className="fixed z-20 w-full top-0">
          <Navbar />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
