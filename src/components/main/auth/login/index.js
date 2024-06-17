"use client";
import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import InputError from "@/components/ui/input-error";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useUserContext } from "@/context/auth";
import logo from "@/assets/image/contently-logo.png";
import Image from "next/image";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

export default function LoginScreen() {
  const { getProfile } = useUserContext();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (!value) {
      setErrors({
        ...errors,
        [name]: `Please enter ${name
          .split(/(?=[A-Z])/)
          .map((data) => data.toLowerCase())
          .join(" ")}`,
      });
    } else {
      setErrors({ ...errors, [name]: "" });
    }
    setFormValues({ ...formValues, [name]: value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const error = {};
      if (!formValues.email) error.email = "Please enter email";
      if (!formValues.password) error.password = "Please enter password";
      if (Object.keys(error).length > 0) {
        setErrors(error);
        return;
      }

      console.log("Form Values:", formValues);
      const response = await axios.post(
        "https://contentlywriters.com:8088/user/login",
        formValues
      );

      console.log({ response: response.data });
      localStorage.setItem("token", response.data.token);

      if (response.data.token == null) {
        const error = {};
        error.password = "Please check your password";
        setErrors(error);
        return;
      }

      getProfile();
      router.replace("/");
    } catch (err) {
      console.log(err);
      const error = {};
      error.email = "User does not exists";
      setErrors(error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border-2 rounded-lg sm:w-[400px]  p-8 ">
        <h1 className="text-3xl font-bold text-center pb-10">
          <Link href="/">
            <div className="flex items-center justify-center">
              <Image
                src={logo}
                alt="Pangram Logo"
                className="h-[80px] w-[180px]"
              />
            </div>
          </Link>
        </h1>
        <form className="grid gap-6">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="login">Email</Label>
            <Input
              id="email"
              name="email"
              type="text"
              placeholder="Enter your Email"
              value={formValues.email}
              onChange={handleChange}
            />
            <InputError message={errors.email} />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="login">Password</Label>
            <span className="relative w-full flex items-center">
              <Input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your Password"
                value={formValues.password}
                onChange={handleChange}
              />
              {!showPassword ? (
                <AiFillEyeInvisible
                  onClick={togglePasswordVisibility}
                  className="absolute right-2.5 text-gray-500 text-xl cursor-pointer"
                />
              ) : (
                <AiFillEye
                  onClick={togglePasswordVisibility}
                  className="absolute right-2.5 text-gray-500 text-xl cursor-pointer"
                />
              )}
            </span>
            <InputError message={errors.password} />
          </div>
          <Link href="/sign-up" className="underline">
            Forgot Password
          </Link>
          <Button type="button" onClick={handleSubmit}>
            Login
          </Button>
          <div className="text-center">
            Don&#39;t have an account?{" "}
            <Link href="/sign-up" className="underline">
              Register
            </Link>
          </div>
          <Button type="button">
            <FcGoogle className="mr-5 text-2xl" />
            Login with Google
          </Button>
        </form>
      </div>
    </div>
  );
}
