"use client";

import { createContext, useContext, useState } from "react";
import { MenuContextType, MenuProviderPropsType } from "./types";

const MenuContext = createContext<MenuContextType>({
  isOpen: false,
  toggleMenu: () => {},
});

export function MenuProvider({ children }: MenuProviderPropsType) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <MenuContext.Provider value={{ isOpen, toggleMenu }}>
      {children}
    </MenuContext.Provider>
  );
}

export const useMenu = () => useContext(MenuContext);
