"use client";

import { useMenu } from "@/context/menu";
import { MenuIcon } from "lucide-react";

export function Menu() {
  const { toggleMenu } = useMenu();

  return (
    <button onClick={toggleMenu} className="md:hidden" title="Abrir menu">
      <MenuIcon className="text-white" size={40} />
    </button>
  );
}
