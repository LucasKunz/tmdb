"use client";

import { STRINGS } from "@/res/strings";
import { Compass, Film, Tv } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RenderLinkParamsType } from "./types";

export function LinksWrapper() {
  const pathname = usePathname();

  function getActiveLinkClassName(link: string) {
    return pathname === link ? "text-white" : "text-gray";
  }

  function renderActiveBar(link: string) {
    if (pathname !== link) {
      return null;
    }

    return <span className="absolute right-0 h-10 w-1.5 bg-white" />;
  }

  function renderLink(params: RenderLinkParamsType) {
    const { icon, link, title } = params;

    const titleColorClassName = getActiveLinkClassName(link);

    return (
      <Link href={link} className="flex items-center gap-3">
        {icon}
        <h1 className={`text-xl font-semibold ${titleColorClassName}`}>
          {title}
        </h1>
        {renderActiveBar(link)}
      </Link>
    );
  }

  return (
    <div className="my-20 flex w-full flex-col gap-7">
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
