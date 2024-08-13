"use client";

import { CarouselDemo } from "@/shared/components/carousel";
import { Axios } from "axios";
import Header from "./(components)/header";
import Sections from "./(components)/sections";
import profilePic1 from "../../../../public/media/images/banners/1.png";
import profilePic2 from "../../../../public/media/images/banners/3f5f9a8d1ae1978e3ef0df634706f94b.jpeg";
import profilePic3 from "../../../../public/media/images/banners/95fe6c8a99184b3d8100a56a162db836.jpeg";
import profilePic4 from "../../../../public/media/images/banners/bd2babf72acfe37d0004f762b6a40ce4.png";
import profilePic5 from "../../../../public/media/images/banners/b2100f08e3eb8ca4136b2eedb3a83171.png";

export default function Home() {
  const banners1 = [profilePic1, profilePic2, profilePic5];
  const banners2 = [profilePic3, profilePic4];

  return (
    <>
      <section>
        <Header />
      </section>
      <section className="relative rounded-t-3xl bg-white -mt-4 z-50">
        <Sections />
      </section>
      <section className="w-full h-full mt-5">
        <h2 className="px-5 text-xl font-bold">تخفیفات داغ رو از دست نده</h2>
        <CarouselDemo
          images={banners1}
          classNames="basis-5/6 px-3 rounded-md"
        />
      </section>
      <div className="w-11/12 h-[1px] mx-auto bg-slate-200 rounded-lg shadow-sm mt-20"></div>
      <section className="w-full h-full mt-10">
        <h2 className="px-5 text-xl font-bold">جشنواره های شگفت انگیز</h2>
        <CarouselDemo
          images={banners2}
          classNames="basis-5/6 px-3 rounded-md"
        />
      </section>
    </>
  );
}
