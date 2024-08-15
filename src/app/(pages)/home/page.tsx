"use client";

import { CarouselDemo } from "@/shared/components/carousel";
import { Axios } from "axios";
import Header from "./(components)/header";
import Sections from "./(components)/sections";

export default function Home() {
  const banners1 = [
    "sliders/discounts/1.png",
    "sliders/discounts/2.png",
    "sliders/discounts/3.png",
  ];
  const banners2 = ["sliders/festivals/1.jpeg", "sliders/festivals/2.jpeg"];

  return (
    <>
      <section>
        <Header />
      </section>
      <section className="relative rounded-t-3xl bg-white -mt-4 z-50">
        <Sections />
      </section>
      <section className="w-full h-full mt-5">
        <h2 className="px-5 text-sm font-bold">تخفیفات داغ رو از دست نده</h2>
        <CarouselDemo
          images={banners1}
          classNames="basis-5/6 px-3 rounded-md"
          isHome={true}
        />
      </section>
      <div className="w-11/12 h-[1px] mx-auto bg-slate-200 rounded-lg shadow-sm mt-16"></div>
      <section className="w-full h-full mt-5">
        <h2 className="px-5 text-sm">جشنواره های شگفت انگیز</h2>
        <CarouselDemo
          images={banners2}
          classNames="basis-5/6 px-3 rounded-md"
          isHome={true}
        />
      </section>
    </>
  );
}
