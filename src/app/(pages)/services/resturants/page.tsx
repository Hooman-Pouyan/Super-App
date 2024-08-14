import { IServiceInfo } from "@/core/models/service.model";
import { CarouselDemo } from "@/shared/components/carousel";
import { Bell, Hotel, House, Plane, TentTree, TrainFront } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import image1 from "../../../../../public/media/images/resturants/1.png";
import image2 from "../../../../../public/media/images/resturants/2.png";
import image3 from "../../../../../public/media/images/resturants/3.png";
import image4 from "../../../../../public/media/images/resturants/4.png";
import image5 from "../../../../../public/media/images/resturants/5.png";
import image6 from "../../../../../public/media/images/resturants/6.png";
import image7 from "../../../../../public/media/images/resturants/7.png";
import banner from "../../../../../public/media/images/resturants/banner.png";

export default function Tourism() {
  const serviceInfo: any = {
    header: {
      title: "رستوران",
      color: "#EC138D",
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
        label: "فست فود",
        route:
          "https://food.snapp.ir/restaurant?category=7&page=0&section=SERVICES&superType=1&utm_source=foodlanding&utm_medium=categories&utm_campaign=fastfood",
        icon: <Hotel size={30} />,
        coverImage: image1 as any,
      },
      {
        label: "کافی شاپ",
        route:
          "https://food.snapp.ir/caffe?extra-filter=%7B%22vendor_collection%22:0,%22distance_sort%22:false,%22vendor_count_respect%22:false,%22vendor_collection_view_mode%22:%22%22,%22banner_collection%22:false,%22new_home%22:true,%22new_home_section%22:%22SERVICES%22,%22page_supertype%22:null,%22user_base_list%22:false,%22only_vendor_ids%22:null%7D&lat=35.774&long=51.418&mode=CURRENT&superType=2&item_type=services_see_more&item_position=homePage&item_name=services_see_more&item_detail_name=%DA%A9%D8%A7%D9%81%D9%87&item_rank=0&item_h_rank=2&item_code=2&utm_source=snapp&utm_medium=request-button&utm_campaign=coffeeshop",
        icon: <TentTree size={30} />,
        coverImage: image2 as any,
      },
      {
        label: "بوفه",
        route:
          "https://food.snapp.ir/restaurant?category=1&page=0&section=SERVICES&superType=1&utm_source=foodlanding&utm_medium=categories&utm_campaign=irani",
        icon: <TrainFront size={30} />,
        coverImage: image3 as any,
      },
      {
        label: "کترینگ",
        route: "",
        icon: <TrainFront size={30} />,
        coverImage: image4 as any,
      },
      {
        label: "صبحانه",
        route:
          "https://food.snapp.ir/restaurant?category=14&page=0&section=SERVICES&superType=1&utm_source=foodlanding&utm_medium=categories&utm_campaign=beynolmelali",
        icon: <TrainFront size={30} />,
        coverImage: image5 as any,
      },
      {
        label: "غذای ایرانی و سنتی",
        route: "",
        icon: <TrainFront size={30} />,
        coverImage: image6 as any,
      },
      {
        label: "غذای ملل",
        route: "",
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
