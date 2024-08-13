import { IServiceInfo } from "@/core/models/service.model";
import { CarouselDemo } from "@/shared/components/carousel";
import { Bell, Hotel, House, Plane, TentTree, TrainFront } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import mainbanner from "../../../../../public/media/images/tourism/1a01d32131c6222f6a9bc4590b9c3dbb.jpeg";
import segment1 from "../../../../../public/media/images/tourism/0e8ea6caf6708cf7938f253acf18f4d6.png";
import segment2 from "../../../../../public/media/images/tourism/23ff6245eb81e5129b605d05f0acfc5c.png";
import segment3 from "../../../../../public/media/images/tourism/e25382d74399d1ebc4fa43cf039ff81d.png";
import segment4 from "../../../../../public/media/images/tourism/f368da68375b68f8a819422523b7d7b0.png";

export default function Tourism() {
  const serviceInfo: any = {
    header: {
      title: "گردشگری",
      color: "#FF6B3C",
    },
    banners: [
      {
        label: "banner 1",
        content: "banner 1",
        image: mainbanner as any,
        link: "",
      },
    ],
    segments: [
      {
        label: "رزرو هتل",
        route: "https://www.iranhotelonline.com/",
        icon: <Hotel size={30} />,
        coverImage: segment1 as any,
      },
      {
        label: "اجاره ویلا و سوییت",
        route: "https://www.shab.ir/",
        icon: <TentTree size={30} />,
        coverImage: segment2 as any,
      },
      {
        label: "بلیط قطار",
        route: "https://www.raja.ir/",
        icon: <TrainFront size={30} />,
        coverImage: segment3 as any,
      },
      {
        label: "بلیط هواپیما",
        route: "https://www.flytoday.ir/",
        icon: <Plane size={30} />,
        coverImage: segment4 as any,
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
        <CarouselDemo
          images={[mainbanner]}
          classNames="basis-full px-3 rounded-md"
        />
      </section>
      <section className="segments px-8 w-full h-full grid grid-cols-2 gap-5">
        {serviceInfo.segments.map((segment: any, index: any) => {
          return (
            <div className="!roudned-lg" key={index}>
              <Link href={segment.route}>
                <div className="h-36 flex bg-slate-400 overflow-hidden justify-center items-center p-5 rounded-lg relative after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-black after:opacity-60 after:rounded-xl">
                  <Image
                    className={
                      "w-full h-full object-cover rounded-md absolute top-0 left-0"
                    }
                    src={segment.coverImage}
                    alt="avatar"
                    draggable={false}
                  ></Image>
                  <div className="flex flex-col w-full h-full justify-center items-center z-20 text-white font-extrabold text-[14px]">
                    <div className="w-full h-full text-nowrap flex justify-center items-center">
                      {segment.icon}
                    </div>
                    <div className="w-full h-full text-nowrap flex justify-center items-center -mt-10">
                      {segment.label}
                    </div>
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
