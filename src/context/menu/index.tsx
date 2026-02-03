"use client";

import { createContext, useContext, useState } from "react";

const MenuContext = createContext({
  isOpen: false,
  toggleMenu: () => {},
});

export function MenuProvider({ children }) {
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
