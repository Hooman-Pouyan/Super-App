import { IServiceInfo } from "@/core/models/service.model";
import { CarouselDemo } from "@/shared/components/carousel";
import { Bell, Hotel, House, Plane, TentTree, TrainFront } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import image1 from "../../../../../public/media/images/sports/1.png";
import image2 from "../../../../../public/media/images/sports/2.png";
import image3 from "../../../../../public/media/images/sports/3.png";
import image4 from "../../../../../public/media/images/sports/4.png";
import image5 from "../../../../../public/media/images/sports/5.png";
import image6 from "../../../../../public/media/images/sports/6.png";
import banner from "../../../../../public/media/images/sports/banner.png";

export default function Tourism() {
  const serviceInfo: any = {
    header: {
      title: "",
      color: "",
    },
    banners: [
      {
        label: "",
        content: "banner 1",
        image: banner as any,
        link: "",
      },
    ],
    segments: [
      {
        label: "",
        route: "",
        icon: <Hotel size={30} />,
        coverImage: image1 as any,
      },
      {
        label: "",
        route: "",
        icon: <TentTree size={30} />,
        coverImage: image2 as any,
      },
      {
        label: "",
        route: "",
        icon: <TrainFront size={30} />,
        coverImage: image3 as any,
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
        <CarouselDemo images={[banner]} classNames="basis-full rounded-md" />
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
