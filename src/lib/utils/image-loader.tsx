"use client";
import Image from "next/image";

export default function ImageLoader({
  src,
  classnames,
  isHome,
}: {
  src: string;
  classnames: string;
  isHome?: boolean;
}) {
  return (
    <>
      <Image
        className={classnames}
        src={
          (isHome
            ? "https://cdn.wadood.online/media/images/home/"
            : `https://cdn.wadood.online/media/images/services/`) + `${src}`
        }
        alt="avatar"
        width={1000}
        height={1000}
        draggable={false}
      ></Image>
    </>
  );
}
