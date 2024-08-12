import axiosInstance from "@/lib/axios";
import { LoginForm } from "./components/login-form";

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
      <div className="w-full h-screen flex justify-center items-start px-10 py-24 bg-slate-300">
        <LoginForm />
      </div>
    </>
  );
}
