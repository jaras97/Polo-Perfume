"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade, Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { ProductGridItem } from "../products/product-grid/ProductGridItem";
import { Product } from "@/interfaces";

interface CarouselProps {
  products: Product[];
}

const CarouselSender: React.FC<CarouselProps> = ({ products }) => {
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
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        className="w-full z-10 "
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <ProductGridItem product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselSender;
