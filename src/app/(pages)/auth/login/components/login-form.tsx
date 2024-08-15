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
    .string() // Force it to be a number
    .min(11, {
      message: "شمراه همراه معتبر نمیباشد",
    })
    .optional(),
  code: z
    .string()
    .max(5, {
      message: "کد یک بار مصرف صحیح نمیباشد",
    })
    .optional(),
  FullName: z
    .string()
    .max(16, {
      message: "نام کاربری باید حداکثر 16 کاراکتر باشد",
    })
    // .min(5, {
    //   message: "نام کاربری باید حداقل 3 کاراکتر باشد",
    // })
    .optional(),
  ConfirmPassword: z
    .string()
    .max(16, {
      message: "رمز عبور باید حداکثر 16 کاراکتر باشد",
    })
    // .min(8, {
    //   message: "رمز عبور باید حداقل 8 کاراکتر باشد",
    // })
    .optional(),
  password: z
    .string()
    .max(16, {
      message: "رمز عبور باید حداکثر 16 کاراکتر باشد",
    })
    // .min(8, {
    //   message: "رمز عبور باید حداقل 8 کاراکتر باشد",
    // })
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
      FullName: "",
      password: "",
      ConfirmPassword: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log("xcxczxcxzc");

    switch (loginStep) {
      case "sendCode":
        handleSendCode(form.getValues().phoneNumber!);
        break;
      case "verifyCode":
        handleVerifyCode(form.getValues().code ?? "");
        break;
      case "setUpCredentials":
        handleCredentials();
        break;
    }
  }

  async function handleSendCode(phoneNumber: string) {
    console.log("asaas");

    setLoading(true);

    try {
      const response = await axiosInstance.post(
        "api/UserActivationCode/SendCode",
        { phoneNumber: phoneNumber }
      );

      if (response.data) setLoading(false);

      setUserId(response.data.id);
      setLoginStep("verifyCode");
    } catch (error) {
      setLoading(false);

      // Handle error (e.g., show error message)
      toast({
        title: "Login failed",
      });
    }
  }

  async function handleCredentials() {
    setLoading(true);
    const userdata = {
      Id: userId,
      Code: form.getValues().code,
      FullName: form.getValues().FullName,
      ConfirmPassword: form.getValues().ConfirmPassword,
    };

    try {
      const response = await axiosInstance.post(
        "api/UserActivationCode/ForgotPassword",
        userdata
      );

      if (response.data) setLoading(false);
      localStorage.setItem("AccessToken", response.data);
      localStorage.setItem("fullName", form.getValues().FullName!);

      if (JSON.parse(localStorage.getItem("userdata")!)) {
        if (
          JSON.parse(localStorage.getItem("userdata")!).Id ==
          form.getValues().phoneNumber
        ) {
          router.push("/");
        } else {
          setLoginStep("setUpCredentials");
        }
      } else {
        setLoginStep("setUpCredentials");
      }

      router.push("/");
    } catch (error) {
      setLoading(false);

      // Handle error (e.g., show error message)
      toast({
        title: "Login failed",
      });
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

      if (!response.data.fullName) setLoginStep("setUpCredentials");
      else {
        localStorage.setItem("AccessToken", response.data.jwtToken);
        localStorage.setItem("fullName", response.data.fullName);
        router.push("/");
      }
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
      setLoading(false);

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
          <React.Fragment>
            <FormField
              control={form.control}
              name="FullName"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>نام و نام خانوادگی</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>رمز عبور</FormLabel>
                  <FormControl>
                    <Input type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="ConfirmPassword"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>تايید رمز عبور</FormLabel>
                  <FormControl>
                    <Input type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </React.Fragment>
        )}

        <Button disabled={isLoading} type="submit" className="w-full">
          {isLoading && loginStep === "sendCode"
            ? "در حال ارسال کد"
            : isLoading && loginStep === "verifyCode"
            ? "در حال تایید کد"
            : "تایید"}
        </Button>
      </form>
    </Form>
  );
}
