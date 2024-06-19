"use client";

import { roboto } from "@/config/fonts";
import { useUIStore } from "@/store";
import clsx from "clsx";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  IoCloseOutline,
  IoLogInOutline,
  IoLogOutOutline,
  IoPeopleOutline,
  IoPersonOutline,
  IoSearchOutline,
  IoShirtOutline,
  IoTicketOutline,
} from "react-icons/io5";

type MenuKey = "explore" | "xerjoff" | "casamorati";

export const SideBarResponsive = () => {
  const isSideMenuOpen = useUIStore((state) => state.isSideMenuOpen);
  const closeMenu = useUIStore((state) => state.closeSideMenu);
  const [openMenus, setOpenMenus] = useState({
    explore: false,
    xerjoff: false,
    casamorati: false,
  });

  //   useEffect(() => {
  //     if (isSideMenuOpen) {
  //       document.body.style.overflow = "hidden";
  //     } else {
  //       document.body.style.overflow = "auto";
  //     }
  //   }, [isSideMenuOpen]);

  const toggleMenu = (menu: MenuKey) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };
  return (
    <div>
      <nav
        className={clsx(
          "fixed p-2 left-0 top-16 w-screen h-full bg-white z-20 shadow-2xl transform transition-all duration-300 overflow-y-auto",
          {
            "-translate-x-full": !isSideMenuOpen,
          }
        )}
      >
        {/* aqui abajo */}
        <div className="w-full bg-white">
          <div className="border-b border-t p-4 cursor-pointer flex justify-end">
            <IoCloseOutline
              size={25}
              className="cursor-pointer"
              onClick={closeMenu}
            />
          </div>
          <div
            className="border-b p-4 cursor-pointer"
            onClick={() => toggleMenu("explore")}
          >
            <span className="font-semibold">EXPLORE</span>
            <span className="float-right">&#x25BC;</span>
          </div>
          {openMenus.explore && (
            <div className="pl-4">
              <div className="border-b p-4">Submenu Item 1</div>
              <div className="border-b p-4">Submenu Item 2</div>
            </div>
          )}

          <div
            className="border-b p-4 cursor-pointer"
            onClick={() => toggleMenu("xerjoff")}
          >
            <span className="font-semibold">XERJOFF</span>
            <span className="float-right">&#x25BC;</span>
          </div>
          {openMenus.xerjoff && (
            <div className="pl-4">
              <div className="border-b p-4">Submenu Item 1</div>
              <div className="border-b p-4">Submenu Item 2</div>
            </div>
          )}

          <div
            className="border-b p-4 cursor-pointer"
            onClick={() => toggleMenu("casamorati")}
          >
            <span className="font-semibold">CASAMORATI</span>
            <span className="float-right">&#x25BC;</span>
          </div>
          {openMenus.casamorati && (
            <div className="pl-4">
              <div className="border-b p-4">Submenu Item 1</div>
              <div className="border-b p-4">Submenu Item 2</div>
            </div>
          )}

          <div className="border-b p-4 cursor-pointer">
            <Link
              className={`${roboto.className} font-semibold uppercase `}
              href={"/"}
              onClick={closeMenu}
            >
              Home
            </Link>
          </div>
          <div className="border-b p-4 cursor-pointer">
            <Link
              className={`${roboto.className} font-semibold uppercase `}
              href={"/products"}
              onClick={closeMenu}
            >
              Productos
            </Link>
          </div>
          <div className="border-b p-4 cursor-pointer">
            <Link
              className={`${roboto.className} font-semibold uppercase `}
              href={"/category/kids"}
              onClick={closeMenu}
            >
              Nosotros
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};
