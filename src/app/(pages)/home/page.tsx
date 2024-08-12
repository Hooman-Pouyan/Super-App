import { CarouselDemo } from "@/shared/components/carousel";
import { Axios } from "axios";
import Header from "./(components)/header";
import Sections from "./(components)/sections";

export default function Home() {
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
        <CarouselDemo classNames="basis-2/3" />
      </section>
      <div className="w-11/12 h-[1px] mx-auto bg-slate-200 rounded-lg shadow-sm mt-20"></div>
      <section className="w-full h-full mt-10">
        <h2 className="px-5 text-xl font-bold">جشنواره های شگفت انگیز</h2>
        <CarouselDemo classNames="basis-2/3" />
      </section>
    </>
  );
}
