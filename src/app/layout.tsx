import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import { Header } from "@/components";
import { RootLayoutPropsType } from "./types";
import { SidebarWrapper } from "@/components/sidebar-wrapper";
import { MenuProvider } from "@/context/menu";

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

export default function RootLayout(props: RootLayoutPropsType) {
  const { children } = props;

  return (
    <html lang="en" className="h-full">
      <body
        className={`${poppinsSans.className} h-full overflow-x-hidden antialiased`}
      >
        <div className="flex w-full flex-row flex-nowrap font-sans">
          <MenuProvider>
            <SidebarWrapper />
            <main className="flex h-full w-full flex-col gap-10 py-11">
              <Header />
              {children}
            </main>
          </MenuProvider>
        </div>
      </body>
    </html>
  );
}
