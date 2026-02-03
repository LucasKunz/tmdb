import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import { Header } from "@/components";
import { RootLayoutPropsType } from "./types";
import { SidebarWrapper } from "@/components/sidebar-wrapper";
import { MenuProvider } from "@/context/menu";
import { STRINGS } from "@/res/strings";

const poppinsSans = Poppins({
  weight: ["400", "500", "600"],
  variable: "--font-poppins-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: STRINGS.METADATA.TITLE,
  description: STRINGS.METADATA.DESCRIPTION,
};

export default function RootLayout(props: RootLayoutPropsType) {
  const { children } = props;

  return (
    <html lang={STRINGS.METADATA.LANG} className="h-full">
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
