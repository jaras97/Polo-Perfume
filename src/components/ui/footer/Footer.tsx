import React from "react";

export const Footer = () => {
  return (
    <div className="w-full flex flex-col bg-black text-white items-center pb-16">
      <span className="py-8 w-full text-center border-b font-bold">
        POLO PERFUME
      </span>

      <button className="mx-6 my-5 w-[80%] md:max-w-80 h-12 border border-white bg-gray-500">
        Contactanos
      </button>
      <span className="text-center mt-6 mb-4">
        ©2024 XERJOFF.COM - Xerjoff Group S.p.a. Via Carlo Tenivelli 29
      </span>
      <span>correodeprueba2526@jajaja.com</span>
    </div>
  );
};
