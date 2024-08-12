interface Props {
  children: React.ReactNode;
  session: any;
}

export default function ServicesLayout({ children, session }: Props) {
  return (
    <>
      {children}
      {/* <div className="w-full h-[137px]"></div> */}
    </>
  );
}
