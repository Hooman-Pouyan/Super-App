interface Props {
  children: React.ReactNode;
  session: any;
}

export default function ServicesLayout({ children, session }: Props) {
  return (
    <>
      <div className="w-full h-[137px]">{children}</div>
    </>
  );
}
