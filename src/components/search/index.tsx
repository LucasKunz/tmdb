"use client";

import { STRINGS } from "@/res/strings";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function SearchInput() {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (search) {
        router.push(`/search?q=${search}`);
      } else {
        router.push("/");
      }

      setSearch("");
    }
  };

  return (
    <div className="w-1/2 rounded-full bg-mine-shaft h-16 flex px-10 py-4 gap-6 items-center">
      <Image alt="Search icon" src="/search.svg" height={35} width={35} />
      <input
        id="search-input"
        type="text"
        autoComplete="off"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeyDown}
        className="placeholder:font-semibold placeholder:text-2xl focus:outline-0 placeholder:text-dove-gray text-white font-semibold w-full text-2xl placeholder:text-shadow-lg"
        placeholder={STRINGS.SCREENS.HOME.SEARCH_PLACEHOLDER}
      />
    </div>
  );
}
