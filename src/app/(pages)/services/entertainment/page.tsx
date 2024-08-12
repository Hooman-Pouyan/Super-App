import { IServiceInfo } from "@/core/models/service.model";
import { CarouselDemo } from "@/shared/components/carousel";
import { Bell, House } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Tourism() {
  const serviceInfo: IServiceInfo = {
    header: {
      title: "گردشگری",
      color: "#FF6B3C",
    },
    banners: [
      {
        label: "banner 1",
        content: "banner 1",
        imageUrl: "",
        link: "",
      },
    ],
    segments: [
      {
        label: "banner 1",
        route: "banner 1",
        icon: "",
        coverImage: "",
      },
      {
        label: "banner 1",
        route: "banner 1",
        icon: "",
        coverImage: "",
      },
      {
        label: "banner 1",
        route: "banner 1",
        icon: "",
        coverImage: "",
      },
      {
        label: "banner 1",
        route: "banner 1",
        icon: "",
        coverImage: "",
      },
      {
        label: "banner 1",
        route: "banner 1",
        icon: "",
        coverImage: "",
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
      <section className="banner px-8 w-full h-full">
        {CarouselDemo({ classNames: "" })}
      </section>
      <section className="segments px-8 w-full h-full grid grid-cols-2 gap-5">
        {serviceInfo.segments.map((segment, index) => {
          return (
            <div key={index}>
              <div className="h-36 flex bg-slate-400 justify-center items-center p-5 rounded-md relative">
                <div>{segment.label}</div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}
