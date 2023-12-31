import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import { getPages } from "@/sanity/sanity-utils";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Asad's portfolio",
  description: "Generated by Sanity",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pages = await getPages();
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
