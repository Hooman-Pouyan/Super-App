import clsx from "clsx";
import {
  BadgeDollarSign,
  BookCopy,
  Briefcase,
  Car,
  Clapperboard,
  HeartHandshake,
  Palette,
  Receipt,
  ShoppingBag,
  Stethoscope,
  TabletSmartphone,
  TreePalm,
  Utensils,
} from "lucide-react";
import Link from "next/link";

export default function Sections() {
  const sections = [
    {
      title: "گردشگری",
      icon: <Briefcase size={50} color={"white"} />,
      color: "#FF6B3C",
      route: "./services/tourism",
      description:
        "افزایش کیف پول با استفاده از دارو های موجود در سیستم شما و افزایش میزان پرداخت و برداشت کیف پول با توجه به نوع داروهای موجود در سیستم شما",
    },
    {
      title: "تفریحی",
      icon: <TreePalm size={50} color={"white"} />,
      color: "#13BE65",
      route: "./services/sports",
      description:
        "افزایش کیف پول با استفاده از دارو های موجود در سیستم شما و افزایش میزان پرداخت و بر<TreePalm />داشت کیف پول با توجه به نوع داروهای موجود در سیستم شما",
    },
    {
      title: "فیلم و سریال",
      icon: <Clapperboard size={50} color={"white"} />,
      color: "#FEC23B",
      route: "./services/media",
      description:
        "افزایش کیف پول با استفاده از دارو های موجود در سیستم شما و افزایش میزان پرداخت و برداشت کیف پول با توجه به نوع داروهای موجود در سیستم شما",
    },
    {
      title: "پرداخت قبض",
      icon: <Receipt size={50} color={"white"} />,
      color: "#28288E",
      route: "./services/bill-payment",
      description:
        "افزایش کیف پول با استفاده از دارو های موجود در سیستم شما و افزایش میزان پرداخت و برداشت کیف پول با توجه به نوع داروهای موجود در سیستم شما",
    },
    {
      title: "پرشکی",
      icon: <Stethoscope size={50} color={"white"} />,
      color: "#25A1F9",
      route: "./services/healthcare",
      description:
        "افزایش کیف پول با استفاده از دارو های موجود در سیستم شما و افزایش میزان پرداخت و برداشت کیف پول با توجه به نوع داروهای موجود در سیستم شما",
    },
    {
      title: "رستوران",
      icon: <Utensils size={50} color={"white"} />,
      color: "#EC138D",
      route: "./services/resturants",
      description:
        "افزایش کیف پول با استفاده از دارو های موجود در سیستم شما و افزایش میزان پرداخت و برداشت کیف پول با توجه به نوع داروهای موجود در سیستم شما",
    },
    {
      title: "هنر و تیتار",
      icon: <Palette size={50} color={"white"} />,
      color: "#13BE9F",
      route: "./services/theater",
      description:
        "افزایش کیف پول با استفاده از دارو های موجود در سیستم شما و افزایش میزان پرداخت و برداشت کیف پول با توجه به نوع داروهای موجود در سیستم شما",
    },
    {
      title: "فروشگاهی",
      icon: <ShoppingBag size={50} color={"white"} />,
      color: "#E7344A",
      route: "./services/shopping",
      description:
        "افزایش کیف پول با استفاده از دارو های موجود در سیستم شما و افزایش میزان پرداخت و برداشت کیف پول با توجه به نوع داروهای موجود در سیستم شما",
    },
    {
      title: "نیکوکاری",
      icon: <HeartHandshake size={50} color={"white"} />,
      color: "#A347FF",
      route: "./services/charity",
      description:
        "افزایش کیف پول با استفاده از دارو های موجود در سیستم شما و افزایش میزان پرداخت و برداشت کیف پول با توجه به نوع داروهای موجود در سیستم شما",
    },
    {
      title: "آموزشی",
      icon: <BookCopy size={50} color={"white"} />,
      color: "#00C2FF",
      route: "./services/educational",
      description:
        "افزایش کیف پول با استفاده از دارو های موجود در سیستم شما و افزایش میزان پرداخت و برداشت کیف پول با توجه به نوع داروهای موجود در سیستم شما",
    },
    {
      title: "موبایل",
      icon: <TabletSmartphone size={50} color={"white"} />,
      color: "#FF483C",
      route: "./services/mobile",
      description:
        "افزایش کیف پول با استفاده از دارو های موجود در سیستم شما و افزایش میزان پرداخت و برداشت کیف پول با توجه به نوع داروهای موجود در سیستم شما",
    },
    {
      title: "خودرو",
      icon: <Car size={50} color={"white"} />,
      color: "#17114D",
      route: "./services/auto",
      description:
        "افزایش کیف پول با استفاده از دارو های موجود در سیستم شما و افزایش میزان پرداخت و برداشت کیف پول با توجه به نوع داروهای موجود در سیستم شما",
    },
  ];

  return (
    <>
      <section className="w-full h-fit rounded-t-3xl">
        <div className="w-full h-full grid grid-cols-4 gap-2 p-7 justify-center items-center">
          {sections.map((section, index) => (
            <div
              className="flex flex-col justify-center items-center"
              key={index}
            >
              <Link className="w-full" href={section.route}>
                <div
                  className={clsx(
                    "rounded-md flex w-full h-[100px] flex-col justify-center items-center p-3 space-y-3",
                    {}
                  )}
                  style={{ backgroundColor: section.color }}
                  color={section.color}
                >
                  <div>{section.icon}</div>
                </div>
                <span className="block text-center mt-1 text-sm font-extrabold text-nowrap">
                  {section.title}
                </span>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
