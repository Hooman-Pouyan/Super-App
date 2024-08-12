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

export function CarouselDemo({ classNames }: { classNames: string }) {
  return (
    <Carousel
      opts={{
        direction: "rtl",
      }}
      className="w-full mt-5 direction-reverse"
    >
      <h2 className="px-5 text-xl font-bold">تخفیفات داغ رو از دست نده</h2>
      <CarouselContent className="rounded-lg !cursor-pointer">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem className={classNames} key={index}>
            <div className="p-3 h-48">
              <Card className="bg-slate-300 w-full h-full">
                <CardContent className="flex aspect-square items-center justify-center">
                  {/* <span className="text-4xl font-semibold">{index + 1}</span> */}
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
