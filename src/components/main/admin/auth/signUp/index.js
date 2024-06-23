"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import InputError from "@/components/ui/input-error";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation"; // Correct import for useRouter in App Router
import { useUserContext } from "@/context/auth";
import logo from "@/assets/image/contently-logo.png";
import Image from "next/image";

export default function SignUpScreen() {
  const { getProfile } = useUserContext();
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const router = useRouter(); // Use next/navigation for the new App Router

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value.trim() });

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
  };

  const validatePassword = (password) => {
    const hasLetter = /[a-zA-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    return hasLetter && hasNumber && hasSpecialChar;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const error = {};
    if (!formValues.firstName) error.firstName = "Please enter first name";
    if (!formValues.lastName) error.lastName = "Please enter last name";
    if (!formValues.email) error.email = "Please enter email";
    if (!formValues.password) error.password = "Please enter password";
    if (!validatePassword(formValues.password)) {
      error.password =
        "Password must contain at least one letter, one number, and one special character";
    }
    if (formValues.password !== formValues.confirmPassword) {
      error.confirmPassword = "Passwords do not match";
    }
    if (Object.keys(error).length > 0) {
      setErrors(error);
      return;
    }

    try {
      console.log("Form Values:", formValues);

      const response = await axios.post(
        "https://contentlywriters.com:8088/user/add",
        formValues,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json, text/plain, */*",
          },
        }
      );

      localStorage.setItem("token", response.data.token);

      console.log("Response:", response.data);

      toast.success("Signup successful!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      getProfile();
      setTimeout(() => {
        router.push("/");
      }, 2000); // Redirect after 2 seconds
    } catch (err) {
      console.log(err);
      toast.error("Signup failed. Please try again.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="border-2 rounded-lg sm:w-[400px] p-8">
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
        <form className="grid gap-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid items-center gap-1.5">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                name="firstName"
                type="text"
                placeholder="First Name"
                value={formValues.firstName}
                onChange={handleChange}
              />
              <InputError message={errors.firstName} />
            </div>
            <div className="grid items-center gap-1.5">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Last Name"
                value={formValues.lastName}
                onChange={handleChange}
              />
              <InputError message={errors.lastName} />
            </div>
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email">Email</Label>
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
          <div className="grid w-full max-w-sm items-center gap-1.5 relative">
            <Label htmlFor="password">Password</Label>
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
          <div className="grid w-full max-w-sm items-center gap-1.5 relative">
            <Label htmlFor="confirmPassword">Confirm Password</Label>

            <span className="relative w-full flex items-center">
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm your Password"
                value={formValues.confirmPassword}
                onChange={handleChange}
              />
              {!showConfirmPassword ? (
                <AiFillEyeInvisible
                  onClick={toggleConfirmPasswordVisibility}
                  className="absolute right-2.5 text-gray-500 text-xl cursor-pointer"
                />
              ) : (
                <AiFillEye
                  onClick={toggleConfirmPasswordVisibility}
                  className="absolute right-2.5 text-gray-500 text-xl cursor-pointer"
                />
              )}
            </span>
            <InputError message={errors.confirmPassword} />
          </div>

          <Button type="submit">Register</Button>
          <div className="text-center">
            Already have an account?{" "}
            <Link href="/login" className="underline">
              Login
            </Link>
          </div>
          <Button type="button">
            <FcGoogle className="mr-5 text-2xl" />
            Register with Google
          </Button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}
