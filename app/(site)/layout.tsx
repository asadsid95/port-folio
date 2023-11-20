import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import { getPages } from "@/sanity/sanity-utils";

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
      <body className={`${inter.className} `}>
        {/* <header className='w-full flex items-center justify-between py-1 px-9 text-gray-400 selection:text-white bg-[#EDFFEC] '>
          <Link href='/'
            className='font-bold text-6xl'
          >
            Asad
          </Link>

          <div className='max-w-5xl flex items-center gap-5 text-md font-bold text-gray-400'>
            {pages.map((page) => (
              <Link key={page._id}
                href={`/${page.slug}`}
                className='hover:underline'
              >
                {page.title}
              </Link>
            ))}
          </div>

        </header> */}

        <main>{children}</main>
      </body>
    </html>
  );
}
