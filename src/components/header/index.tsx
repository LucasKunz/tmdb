import Image from "next/image";
import { SearchInput } from "../search";
import { Menu } from "../menu";

export function Header() {
  return (
    <div className="flex items-center justify-between gap-4 px-9">
      <Menu />
      <SearchInput />
      <Image
        alt="User profile"
        src="/user-profile.png"
        height={70}
        width={70}
        className="hidden rounded-full object-cover md:block md:size-17.5"
      />
    </div>
  );
}
