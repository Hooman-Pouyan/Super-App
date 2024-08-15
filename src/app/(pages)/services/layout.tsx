export interface Props {
  children: React.ReactNode;
}

function Layout({ children }: Props) {
  return (
    <>
      {children}
      {/* <div className="w-full h-[137px]"></div> */}
    </>
  );
}

export default Layout;
