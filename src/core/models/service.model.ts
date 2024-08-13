import { SingletonRouter } from "next/router";

export interface IServiceInfo {
  header: IServiceHeader;
  banners: IServiceBanner[];
  segments: IServiceSegment[];
}

export interface IServiceBanner {
  label: string;
  content: string;
  image: string;
  link: string;
}

export interface IServiceSegment {
  label: string;
  route: string;
  icon: string;
  coverImage: string;
}

export interface IServiceHeader {
  title: string;
  color: string;
}
