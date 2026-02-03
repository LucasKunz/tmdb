"use client";

import { STRINGS } from "@/res/strings";
import { Search } from "lucide-react";
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
    <div className="bg-mine-shaft flex h-12 w-full items-center gap-6 rounded-full px-4 py-4 md:h-16 md:w-1/2 md:px-10">
      <Search size={35} className="text-gray max-md:hidden" />
      <input
        id="search-input"
        type="text"
        autoComplete="off"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeyDown}
        className="placeholder:text-dove-gray w-full font-semibold text-white placeholder:text-xl placeholder:font-semibold placeholder:text-shadow-lg focus:outline-0 md:text-2xl placeholder:md:text-2xl"
        placeholder={STRINGS.SCREENS.HOME.SEARCH_PLACEHOLDER}
      />
    </div>
  );
}
