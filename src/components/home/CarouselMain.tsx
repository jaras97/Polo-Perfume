"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade, Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { useEffect, useState } from "react";

interface CarouselProps {
  images: {
    src: string;
    alt: string;
    title: string;
    description: string;
  }[];
}

const CarouselMain: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const [textFade, setTextFade] = useState(false);

  const handleSlideChange = (swiper: any) => {
    setFade(true);
    setTextFade(true);
    setTimeout(() => {
      setCurrentIndex(swiper.realIndex);
      setFade(false);
    }, 500);
  };

  useEffect(() => {
    if (!fade) {
      setTimeout(() => {
        setTextFade(false);
      }, 500);
    }
  }, [fade]);

  return (
    <Swiper
      modules={[Navigation, Pagination, EffectFade, Autoplay]}
      effect="fade"
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      onSlideChange={handleSlideChange}
      className="relative w-full"
    >
      <div
        className={`absolute bottom-4 left-4 text-white pb-5 px-2 z-10 flex flex-col gap-1 transition-opacity duration-500 ${
          fade ? "opacity-0" : "opacity-100"
        }`}
      >
        <span
          className={`text-xl md:text-3xl font-bold transition-all duration-500 ${
            textFade ? "opacity-0 -translate-x-10" : "opacity-100 translate-x-0"
          }`}
        >
          {images[currentIndex].title}
        </span>
        <span
          className={`text-xs md:text-base font-bold transition-all duration-500 ${
            textFade ? "opacity-0 -translate-x-10" : "opacity-100 translate-x-0"
          }`}
        >
          {images[currentIndex].description}
        </span>
        <button className=" bg-white w-[150px] md:w-[200px] h-8 md:h-10 mt-5 text-black font-semibold">
          BUY NOW
        </button>
      </div>
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <div className="relative aspect-w-3 aspect-h-4 md:aspect-w-16 md:aspect-h-9">
            <Image
              src={image.src}
              alt={image.alt}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="rounded"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CarouselMain;
