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
      <section className="w-full h-full">
        <CarouselDemo classNames="basis-2/3" />
      </section>
      <section className="w-full h-full">
        <CarouselDemo classNames="basis-2/3" />
      </section>
    </>
  );
}
