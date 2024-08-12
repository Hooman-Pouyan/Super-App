import { IServiceInfo } from "@/core/models/service.model";
import { CarouselDemo } from "@/shared/components/carousel";
import Image from "next/image";

export default function Service(
  serviceInfo: IServiceInfo = {
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
    ],
  }
) {
  return (
    <>
      <section className="header text-red-600 bg-red-400 px-8 w-full h-full">
        {serviceInfo.header.title}
      </section>
      <section className="banner px-8 w-full h-full">
        {CarouselDemo({ classNames: "basis-2/3" })}
      </section>
      <section className="segments px-8 w-full h-full grid grid-cols-2 gap-2">
        {serviceInfo.segments.map((segment, index) => {
          return (
            <div key={index}>
              <div className="flex justify-center items-center p-5 rounded-md relative">
                <Image
                  src={segment.coverImage}
                  alt={segment.label}
                  className="absolute top-0 left-0"
                />
                <div>{segment.label}</div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}
