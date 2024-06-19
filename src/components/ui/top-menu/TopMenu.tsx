"use client";

import { roboto, titleFont } from "@/config/fonts";
import { useUIStore } from "@/store";
import Image from "next/image";

import Link from "next/link";
import { IoCartOutline, IoSearchOutline, IoMenu } from "react-icons/io5";

export const TopMenu = () => {
  const isSideMenuOpen = useUIStore((state) => state.isSideMenuOpen);
  const openSideMenu = useUIStore((state) => state.openSideMenu);
  const closeMenu = useUIStore((state) => state.closeSideMenu);
  return (
    <nav className="flex flex-col mt-2 md:mt-5 border-b border-gray-300 px-2 md:px-5 mb-4  md:mb-0">
      <div className="flex justify-between mb-2  md:mb-0">
        <div className="flex items-center ">
          <IoMenu
            className="w-7 h-7 md:hidden"
            onClick={isSideMenuOpen ? closeMenu : openSideMenu}
          />
          <Image
            className="rounded-full hidden md:block"
            src={"/polo_logo.jpeg"}
            alt={""}
            width={50}
            height={50}
          />
        </div>

        <div className="flex items-center">
          <Image
            className="rounded-full block md:hidden mr-2"
            src={"/polo_logo.jpeg"}
            alt={""}
            width={50}
            height={50}
          />
          <span
            className={`${titleFont.className} antialiased font-bold text-lg md:text-5xl`}
          >
            Polo perfume
          </span>
        </div>

        <div className="flex items-center">
          <Link href={"/search"} className="mx-2">
            <IoSearchOutline className="w-7 h-7" />
          </Link>
          <Link href={"/cart"} className="mx-2">
            <div className="relative">
              <span className="absolute text-xs px-1 rounded-full font-bold -top-2 -right-2 bg-blue-700 text-white">
                3
              </span>
              <IoCartOutline className="w-7 h-7" />
            </div>
          </Link>
        </div>
      </div>
      <div className=" justify-evenly hidden sm:flex">
        {/* <div className="hidden sm:block"> */}
        <Link
          className={`${roboto.className} font-bold m-2 p-2 rounded-md transition-all hover:bg-gray-100 text-xl`}
          href={"/"}
        >
          Home
        </Link>
        <Link
          className={`${roboto.className} font-bold m-2 p-2 rounded-md transition-all hover:bg-gray-100 text-xl`}
          href={"/products"}
        >
          Productos
        </Link>
        <Link
          className={`${roboto.className} font-bold m-2 p-2 rounded-md transition-all hover:bg-gray-100 text-xl`}
          href={"/category/kids"}
        >
          Nosotros
        </Link>
      </div>
    </nav>
  );
};
