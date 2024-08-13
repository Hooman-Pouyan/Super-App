"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import React, { useEffect, useState } from "react";
import axiosInstance from "@/lib/axios";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useRouter } from "next/navigation";
import { ToastAction } from "@/components/ui/toast";

const FormSchema = z.object({
  phoneNumber: z
    .string()
    .min(10, {
      message: "phoneNumber must be at least 2 characters.",
    })
    .optional(),
  code: z
    .string()
    .max(5, {
      message: "password must be at most 2 characters.",
    })
    .optional(),
  username: z
    .string()
    .max(16, {
      message: "password must be at most 2 characters.",
    })
    .optional(),
});

export function LoginForm() {
  const [loginStep, setLoginStep] = useState("sendCode");
  const [userId, setUserId] = useState("");
  const [isLoading, setLoading] = useState(false);

  const router = useRouter();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      phoneNumber: "",
      code: "",
      username: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });

    switch (loginStep) {
      case "sendCode":
        handleSendCode(form.getValues().phoneNumber!);
        break;
      case "verifyCode":
        handleVerifyCode(form.getValues().code ?? "");
        break;
    }
  }

  async function handleSendCode(phoneNumber: string) {
    setLoading(true);

    try {
      const response = await axiosInstance.post(
        "api/UserActivationCode/SendCode",
        { phoneNumber: phoneNumber }
      );

      if (response.data) setLoading(false);

      setUserId(response.data.id);
      setLoginStep("verifyCode");

      // Handle success (e.g., store token, redirect)
      // toast({
      //   title: "Login successful",
      //   description: (
      //     <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
      //       <code className="text-white">
      //         {JSON.stringify(response.data, null, 2)}
      //       </code>
      //     </pre>
      //   ),
      // });
    } catch (error) {
      // Handle error (e.g., show error message)
      toast({
        title: "Login failed",
      });
      setLoading(false);
    }
  }

  async function handleVerifyCode(code: string) {
    setLoading(true);

    try {
      const response = await axiosInstance.post(
        "api/UserActivationCode/VerifyCode",
        { id: userId, code: code }
      );

      if (response.data) setLoading(false);

      localStorage.setItem("AccessToken", response.data);
      setLoginStep("setUpCredentials");
      router.push("/");

      // Handle success (e.g., store token, redirect)
      toast({
        title: "Login successful",
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-white">
              {JSON.stringify(response.data, null, 2)}
            </code>
          </pre>
        ),
      });
    } catch (error) {
      // Handle error (e.g., show error message)
      toast({
        title: "Login failed",
      });
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-2/3 space-y-6 flex justify-center items-end flex-col"
      >
        {loginStep === "sendCode" && (
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>شماره همراه</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
        )}
        {loginStep === "verifyCode" && (
          <FormField
            control={form.control}
            name="code"
            render={({ field }) => (
              <React.Fragment>
                <div className="w-full flex flex-col justify-center items-start p-1 space-y-3">
                  <div className="font-extrabold text-md">
                    کد تایید را وارد کنید
                  </div>
                  <div>
                    کد تایید 5 رقمی به {form.getValues().phoneNumber} ارسال شد.
                  </div>
                </div>
                <FormItem className="w-full flex flex-col justify-center items-center -mt-5">
                  <FormControl className="mx-auto">
                    <InputOTP maxLength={6} {...field}>
                      <InputOTPGroup className="flex flex-row-reverse">
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                      </InputOTPGroup>
                    </InputOTP>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </React.Fragment>
            )}
          />
        )}
        {loginStep == "setUpCredentials" && (
          <FormField
            control={form.control}
            name="code"
            render={({ field }) => (
              <React.Fragment>
                <div className="w-full flex flex-col justify-center items-start p-1 space-y-3">
                  <div className="font-extrabold text-md">
                    کد تایید را وارد کنید
                  </div>
                  <div>
                    کد تایید 5 رقمی به {form.getValues().phoneNumber} ارسال شد.
                  </div>
                </div>
                <FormItem className="w-full flex flex-col justify-center items-center -mt-5">
                  <FormControl className="mx-auto">
                    <InputOTP maxLength={6} {...field}>
                      <InputOTPGroup className="flex flex-row-reverse">
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                      </InputOTPGroup>
                    </InputOTP>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </React.Fragment>
            )}
          />
        )}
        <Button disabled={isLoading} type="submit" className="w-full">
          {isLoading ? "درحال بررسی" : "ورود"}
        </Button>
      </form>
    </Form>
  );
}
