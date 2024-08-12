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

export function CarouselDemo({ classNames }: { classNames: string }) {
  return (
    <Carousel
      opts={{
        direction: "rtl",
      }}
      className="w-full mt-5 direction-reverse"
    >
      <CarouselContent className="rounded-lg !cursor-pointer">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem className={classNames} key={index}>
            <div className="p-3 h-48">
              <Card className="bg-slate-300 w-full h-full">
                <CardContent className="flex aspect-square items-center justify-center">
                  {/* <span className="text-4xl font-semibold">{index + 1}</span> */}
                  {/* <Image
                    alt=""
                    src="/public/media/images/banners/1.png"
                    width={100}
                    height={100}
                  ></Image> */}
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <Link
        href="/home/sports"
        className="!w-full text-left float-left p-5 cursor-pointer"
      >
        مشاهده همه
      </Link>
      {/* <CarouselPrevious /> */}
      {/* <CarouselNext /> */}
    </Carousel>
    
  );
}
