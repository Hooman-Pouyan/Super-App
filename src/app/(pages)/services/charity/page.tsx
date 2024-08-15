"use client";
import { IServiceInfo } from "@/core/models/service.model";
import { usePathname } from "next/navigation";
import ImageLoader from "@/lib/utils/image-loader";
import { CarouselDemo } from "@/shared/components/carousel";
import { Bell, Hotel, House, Plane, TentTree, TrainFront } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Tourism() {
  const activatedRoute = usePathname();
  const serviceInfo: any = {
    header: {
      title: "نیکوکاری",
      color: "#A347FF",
    },
    banners: [],
    segments: [
      {
        label: "کمک به زنان سرپرست خانوار",
        route: "https://kahrizakcharity.com/online-payment",
        icon: <Hotel size={30} />,
        coverImage: activatedRoute.split("/")[2] + "/1.png",
      },
    ],
  };
  return (
    <>
      <section
        className="header w-full h-48 px-8 flex justify-between items-center text-lg font-extrabold text-white"
        style={{ backgroundColor: serviceInfo.header.color }}
      >
        <div>
          <Link href="/">
            <House size={30} />
          </Link>
        </div>
        <div>{serviceInfo.header.title}</div>
        <div>
          <Bell size={30} />
        </div>
      </section>
      <div className="relative w-full h-5 rounded-t-3xl -mt-5 z-50 bg-white"></div>
      {/* <section className="banner px-8 w-full h-full">
                <CarouselDemo
          images={[serviceInfo.banners[0].image]}
          classNames="basis-full rounded-md"
        />
      </section> */}
      <section className="segments px-8 w-full h-full flex flex-col">
        {serviceInfo.segments.map((segment: any, index: any) => {
          return (
            <div className="!roudned-lg" key={index}>
              <Link href={segment.route}>
                <div className="h-fit flex flex-col overflow-hidden justify-center items-center p-2 mt-5 rounded-lg relative">
                  <ImageLoader
                    classnames="w-full h-52 object-cover rounded-t-md -z-10"
                    src={segment.coverImage}
                  />
                  <div className="flex w-full h-full justify-between items-center shadow-md bg-white z-20 font-extrabold text-[14px] bg-transparent text-black p-7 rounded-b-xl">
                    <div>{segment.label}</div>
                    <div className="text-green-600 text-nowrap">مشاهده</div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </section>
    </>
  );
}
