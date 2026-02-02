import Image from "next/image";
import { SearchInput } from "../search";

export function Header() {
  return (
    <div className="flex justify-between px-9">
      <SearchInput />
      <Image
        alt=""
        src="/user-profile.png"
        height={70}
        width={70}
        className="rounded-full size-17.5 object-cover"
      />
    </div>
  );
}
