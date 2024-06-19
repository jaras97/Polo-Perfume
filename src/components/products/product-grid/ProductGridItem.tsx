"use client";

import { openSans, roboto } from "@/config/fonts";
import { Product } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoIosCart, IoIosHeartEmpty } from "react-icons/io";

interface Props {
  product: Product;
}

export const ProductGridItem = ({ product }: Props) => {
  const [displayImage, setDisplayImage] = useState(product.images[0]);
  return (
    <div className="relative rounded overflow-hidden lg:m-4 ">
      <IoIosHeartEmpty className="absolute top-2 right-2 w-7 h-7 text-gray-500 z-10" />
      <div className="relative w-full aspect-w-1 aspect-h-1 bg-gray-100 mb-6 z-0">
        <Image
          src={`/xer.jpg`}
          alt={product.title}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="rounded z-10"
        />
      </div>
      <div className="w-full flex flex-col gap-2 items-center md:items-start pt-3 pb-10">
        <span
          className={`${roboto.className} font-bold uppercase leading-none`}
        >
          Fahrenheit
        </span>
        <div className="flex flex-col md:flex-row gap-2 items-center w-full md:justify-between">
          <span
            className={`text-gray-500 ${openSans.className} leading-none mb-4`}
          >
            eau de parfum 100ml
          </span>
          <span className={`text-gray-500 ${openSans.className} leading-none`}>
            $85.000
          </span>
        </div>
      </div>
    </div>
  );
};
