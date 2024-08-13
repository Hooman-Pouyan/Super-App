import axiosInstance from "@/lib/axios";
import { LoginForm } from "./components/login-form";
import { HeaderPattern } from "../../home/(components)/header";
import Link from "next/link";
import { Home, Undo2 } from "lucide-react";

export default function Login() {
  const handleLogin = async (credentials: any) => {
    try {
      const response = await axiosInstance.post("/api/auth/login", credentials);
      console.log("Login successful:", response.data);
      // Handle success (e.g., store token, redirect)
    } catch (error: any) {
      console.error("Login failed:", error.response.data);
      // Handle error (e.g., show error message)
    }
  };
  return (
    <>
      <div className="w-full h-full flex justify-between items-center !bg-transparent bg-opacity-20">
        <div>
          {/* <Link
            href="../"
            className="flex justify-between items-center p-1 space-x-3"
          >
            <span className="">
              <Home size={25} />
            </span>
            <span className="w-full h-full flex justify-center items-center mt-1 ml-1">
              صفحه اصلی
            </span>
          </Link> */}
        </div>
      </div>

      <div className="w-full h-screen relative flex overflow-hidden justify-center items-start px-10 py-24 bg-gradient-to-br from-slate-300 to-blue-300">
        <div className="absolute scale-[2] left-[10rem] top-[26rem] lg:top-[20rem] lg:left-[55rem] w-full h-full z-0 pointer-events-none">
          <HeaderPattern fill="black" />
        </div>
        <div className="z-10 w-full h-full flex justify-center items-start py-16">
          <LoginForm />
        </div>
        <div>
          <Link
            href="../"
            className="flex justify-end items-center p-1 space-x-3 float-left w-full"
          >
            <span className="w-full h-full flex justify-center items-center mt-1 ml-1">
              برگشت
            </span>
            <span className="">
              <Undo2 size={25} />
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}
