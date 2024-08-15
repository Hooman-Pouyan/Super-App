import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import Image from "next/image";
import ImageLoader from "@/lib/utils/image-loader";

export function CarouselDemo({
  classNames,
  images,
  isHome,
}: {
  classNames: string;
  images: any[];
  isHome?: boolean;
}) {
  return (
    <Carousel
      opts={{
        direction: "rtl",
      }}
      className="w-full mt-5 direction-reverse"
    >
      <CarouselContent className="rounded-lg !cursor-pointer">
        {images?.map((image, index) => (
          <CarouselItem className={classNames} key={index}>
            <div className="h-36 lg:h-96">
              <Card className="bg-slate-300 w-full h-full">
                {/* <CardContent className="flex aspect-square items-center justify-center"> */}
                {/* <span className="text-4xl font-semibold">{index + 1}</span> */}
                <ImageLoader
                  classnames="w-full h-full object-cover rounded-md"
                  src={image}
                  isHome={isHome}
                />
                {/* </CardContent> */}
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <Link
        href="/"
        className="!w-full text-left float-left p-5 cursor-pointer text-sm text-green-600"
      >
        مشاهده همه
      </Link>
      {/* <CarouselPrevious /> */}
      {/* <CarouselNext /> */}
    </Carousel>
  );
}
