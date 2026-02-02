import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import { Header } from "@/components";
import { Sidebar } from "@/components/sidebar";

const poppinsSans = Poppins({
  weight: ["400", "500", "600"],
  variable: "--font-poppins-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Movie Explorer",
  description:
    "Discover movies, explore trending titles, search by genre, and dive into detailed information powered by TMDB. Your go-to movie explorer for films, ratings, and cast details",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${poppinsSans.className} antialiased h-full overflow-x-hidden`}
      >
        <div className="flex flex-nowrap flex-row font-sans">
          <Sidebar />
          <main className="w-full h-full py-11 gap-10 flex-col flex">
            <Header />
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
