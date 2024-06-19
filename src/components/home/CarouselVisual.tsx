"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade, Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

interface CarouselProps {
  images: {
    src: string;
    alt: string;
    title: string;
    description: string;
  }[];
}

const CarouselVisual: React.FC<CarouselProps> = ({ images }) => {
  return (
    <div className=" w-full bg-white p-3 z-0">
      <Swiper
        modules={[Navigation, Pagination, EffectFade, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 5,
          },
        }}
        className="w-full z-10 "
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full ">
              <div className={`relative aspect-w-1 aspect-h-1 bg-black`}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  className="rounded z-10"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselVisual;
