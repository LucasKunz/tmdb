"use client";

import { STRINGS } from "@/res/strings";
import { Compass, Film, Tv } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import { ReactElement, ReactNode } from "react";

export type RenderLinkParamsType = {
  icon: ReactElement;
  link: string;
  title: string;
};

export function LinksWrapper() {
  const pathname = usePathname();

  function getActiveLinkClassName(link: string) {
    return pathname === link ? "text-white" : "text-dove-gray";
  }

  function renderActiveBar(link: string) {
    if (pathname !== link) {
      return null;
    }

    return <span className="w-1.5 absolute h-10 right-0 bg-white" />;
  }

  function renderLink(params: RenderLinkParamsType) {
    const { icon, link, title } = params;

    const titleColorClassName = getActiveLinkClassName(link);

    return (
      <Link href={link} className="gap-3 flex items-center">
        {icon}
        <h1 className={`text-xl font-semibold ${titleColorClassName}`}>
          {title}
        </h1>
        {renderActiveBar(link)}
      </Link>
    );
  }

  return (
    <div className="mt-6 gap-7 flex flex-col w-full">
      {renderLink({
        icon: <Compass className={getActiveLinkClassName("/")} />,
        link: "/",
        title: STRINGS.COMPONENTS.SIDE_BAR.LIST.EXPLORE_TITLE,
      })}
      {renderLink({
        icon: <Film className={getActiveLinkClassName("/movies")} />,
        link: "/movies",
        title: STRINGS.COMPONENTS.SIDE_BAR.LIST.MOVIES_TITLE,
      })}
      {renderLink({
        icon: <Tv className={getActiveLinkClassName("/tv")} />,
        link: "/tv",
        title: STRINGS.COMPONENTS.SIDE_BAR.LIST.TV_TITLE,
      })}
    </div>
  );
}
