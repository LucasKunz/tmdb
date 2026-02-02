"use client";
import Link from "next/link";
import { GenreLinkPropsType } from "./types";
import { usePathname } from "next/navigation";

export function GenreLink(props: GenreLinkPropsType) {
  const { genre } = props;
  const { id, name } = genre;

  const pathName = usePathname();

  const isActiveClassName =
    pathName === `/genre/${id}` ? "text-white" : "text-gray";

  return (
    <li key={id} className={`${isActiveClassName} font-semibold text-sm`}>
      <Link href={`/genre/${id}`}>{name}</Link>
    </li>
  );
}
