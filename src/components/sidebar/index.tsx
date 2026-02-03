"use client";

import { useMenu } from "@/context/menu";
import { SidebarPropsType } from "./types";
import { X } from "lucide-react";
import { useEffect } from "react";

export function Sidebar(props: SidebarPropsType) {
  const { children } = props;

  const { isOpen, toggleMenu } = useMenu();

  const sidebarClassname = isOpen
    ? "max-md:translate-x-0"
    : "max-md:-translate-x-full";

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isOpen);
  }, [isOpen]);

  function renderOverlay() {
    const overlayClassname = isOpen ? "block" : "hidden";

    return (
      <div
        onClick={toggleMenu}
        className={`${overlayClassname} bg-cod-gray/90 absolute z-20 h-full w-full md:hidden`}
      >
        <X className="absolute top-6 right-6 text-white" size={30} />
      </div>
    );
  }

  return (
    <>
      {renderOverlay()}
      <aside
        className={`bg-mine-shaft w-3xs min-w-3xs flex-1 flex-col items-center justify-start gap-20 px-11 py-16 transition-transform duration-400 max-md:absolute max-md:z-20 max-md:h-full max-md:overflow-y-scroll md:relative md:block md:gap-12 ${sidebarClassname}`}
      >
        {children}
      </aside>
    </>
  );
}
