import Image from "next/image";
import Link from "next/link";
import { Genres } from "../genres";
import { Suspense } from "react";
import { LinksWrapper } from "./components/links-wrapper";

export async function Sidebar() {
  return (
    <aside className="flex flex-col flex-1 justify-start gap-12 items-center min-w-3xs bg-mine-shaft w-3xs py-16 px-11 relative">
      <Link href="/">
        <Image alt="MBC Logo" src="/logo.svg" height={36} width={106} />
      </Link>
      <LinksWrapper />
      <Suspense fallback={<p>loading</p>} defer>
        <Genres />
      </Suspense>
    </aside>
  );
}
