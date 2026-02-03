import { Sidebar } from "../sidebar";
import Image from "next/image";
import { LinksWrapper } from "../sidebar/components/links-wrapper";
import { Suspense } from "react";
import { Genres } from "../genres";
import Link from "next/link";

export function SidebarWrapper() {
  return (
    <Sidebar>
      <Link href="/">
        <Image alt="MBC Logo" src="/logo.svg" height={36} width={106} />
      </Link>
      <LinksWrapper />
      <Suspense fallback={<p>loading</p>} defer>
        <Genres />
      </Suspense>
    </Sidebar>
  );
}
