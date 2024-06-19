import CarouselMain from "@/components/home/CarouselMain";
import CarouselSender from "@/components/home/CarouselSender";
import CarouselVisual from "@/components/home/CarouselVisual";
import { initialData } from "@/seed/seed";
import Image from "next/image";

export default function Home() {
  const images = [
    {
      src: "/carrusel1.jpg",
      alt: "Carrusel 1",
      title: "LEVAR DEL SOL",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde enim provident dolore!",
    },
    {
      src: "/carrusel2.jpg",
      alt: "Carrusel 2",
      title: "DEIFIED FEAT.",
      description:
        "Get ready to enter the second chapter of the unexpected venture to surprise the senses with the new scent.",
    },
    {
      src: "/hol1.webp",
      alt: "Hola",
      title: "DEIFIED FEAT.",
      description:
        "Get ready to enter the second chapter of the unexpected venture to surprise the senses with the new scent.",
    },
  ];

  const images2 = [
    {
      src: "/ima1.jpg",
      alt: "Carrusel 1",
      title: "LEVAR DEL SOL",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde enim provident dolore!",
    },
    {
      src: "/ima2.jpg",
      alt: "Carrusel 2",
      title: "DEIFIED FEAT.",
      description:
        "Get ready to enter the second chapter of the unexpected venture to surprise the senses with the new scent.",
    },
    {
      src: "/ima1.jpg",
      alt: "ima1",
      title: "DEIFIED FEAT.",
      description:
        "Get ready to enter the second chapter of the unexpected venture to surprise the senses with the new scent.",
    },
    {
      src: "/ima2.jpg",
      alt: "ima1 2",
      title: "DEIFIED FEAT.",
      description:
        "Get ready to enter the second chapter of the unexpected venture to surprise the senses with the new scent.",
    },
  ];

  const products = initialData.products;

  const images3 = [
    {
      src: "/Tony.jpg",
      alt: "Carrusel 1",
      title: "LEVAR DEL SOL",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde enim provident dolore!",
    },
    {
      src: "/ima2.jpg",
      alt: "Carrusel 2",
      title: "DEIFIED FEAT.",
      description:
        "Get ready to enter the second chapter of the unexpected venture to surprise the senses with the new scent.",
    },
    {
      src: "/ima1.jpg",
      alt: "ima1",
      title: "DEIFIED FEAT.",
      description:
        "Get ready to enter the second chapter of the unexpected venture to surprise the senses with the new scent.",
    },
  ];

  return (
    <div className="flex justify-center min-h-screen bg-gray-100">
      <div className="w-full h-auto">
        <CarouselMain images={images} />

        <div className="flex flex-col px-3 py-7 md:py-10 items-center gap-3 ">
          <p className="text-lg font-semibold leading-none">DEIFIED FEAT.</p>
          <p className="text-2xl font-semibold leading-none">TONY IOMMI</p>
          <span className="block text-center text-sm font-light">
            Get ready to enter the second chapter of the unexpected venture to
            surprise the senses with the new scent,
          </span>
          <span>Tony Iommi Deified for Xerjoff Blends.</span>
        </div>

        <div className="w-full">
          <CarouselVisual images={images3} />
        </div>

        <div className="flex flex-col gap-2 items-center py-7 bg-white">
          <span className="text-sm uppercase font-semibold">Los</span>
          <span className="text-2xl uppercase font-extrabold">
            mas vendidos
          </span>
          <CarouselSender products={products} />
        </div>
      </div>
    </div>
  );
}
