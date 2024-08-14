import { IServiceInfo } from "@/core/models/service.model";
import { CarouselDemo } from "@/shared/components/carousel";
import { Bell, Hotel, House, Plane, TentTree, TrainFront } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import image1 from "../../../../../public/media/images/shopping/1.png";
import image2 from "../../../../../public/media/images/shopping/2.png";
import image3 from "../../../../../public/media/images/shopping/3.png";
import image4 from "../../../../../public/media/images/shopping/4.png";
import image5 from "../../../../../public/media/images/shopping/5.png";
import image6 from "../../../../../public/media/images/shopping/6.png";
import image7 from "../../../../../public/media/images/shopping/7.png";

export default function Tourism() {
  const serviceInfo: any = {
    header: {
      title: "فروشگاهی",
      color: "#E7344A",
    },
    banners: [],
    segments: [
      {
        label: "خرید از فروشگاه های شهروند",
        route: "https://www.shahrvand.ir/",
        icon: <Hotel size={30} />,
        coverImage: image1 as any,
      },
      {
        label: "هفته‌ی پرتخفیف رفاه",
        route: "https://refah.ir/",
        icon: <TentTree size={30} />,
        coverImage: image2 as any,
      },
      {
        label: "جشنواره ۱+۱ افق کوروش",
        route: "https://okcs.com/",
        icon: <TrainFront size={30} />,
        coverImage: image3 as any,
      },
      {
        label: "تخفیفات ویژه هایپرمی",
        route: "https://www.hyperme.ir/",
        icon: <TrainFront size={30} />,
        coverImage: image4 as any,
      },
      {
        label: "تخفیف ویژه انواع لبنیات",
        route: "https://www.haftstores.com/",
        icon: <TrainFront size={30} />,
        coverImage: image5 as any,
      },
      {
        label: "اتکا برای خانواده",
        route: "https://etka-stores.imtmc.co/",
        icon: <TrainFront size={30} />,
        coverImage: image6 as any,
      },
      {
        label: "بهترین قیمت ها در هایپر استار",
        route: "https://www.hyperstariran.com/",
        icon: <TrainFront size={30} />,
        coverImage: image7 as any,
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
        <CarouselDemo images={[banner]} classNames="basis-full rounded-md" />
      </section> */}
      <section className="segments px-8 w-full h-full flex flex-col">
        {serviceInfo.segments.map((segment: any, index: any) => {
          return (
            <div className="!roudned-lg" key={index}>
              <Link href={segment.route}>
                <div className="h-fit flex flex-col overflow-hidden justify-center items-center p-2 mt-5 rounded-lg relative">
                  <Image
                    className={"w-full h-52 object-cover rounded-t-md -z-10"}
                    src={segment.coverImage}
                    alt="avatar"
                    draggable={false}
                  ></Image>
                  <div className="flex w-full h-full justify-between items-center shadow-md bg-white z-20 font-extrabold text-[14px] bg-transparent text-black p-7 rounded-b-xl">
                    <div>{segment.label}</div>
                    <div className="text-green-600 text-nowrap">مشاهده همه</div>
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
