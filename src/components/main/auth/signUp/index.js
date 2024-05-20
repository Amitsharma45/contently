"use client";
import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import InputError from "@/components/ui/input-error";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";

export default function SignUpScreen() {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

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
      if (!formValues.firstName) error.firstName = "Please enter first name";
      if (!formValues.lastName) error.lastName = "Please enter last name";
      if (!formValues.email) error.email = "Please enter email";
      if (!formValues.password) error.password = "Please enter password";
      if (Object.keys(error).length > 0) {
        setErrors(error);
        return;
      }

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
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="border-2 rounded-lg sm:w-[400px]  p-8 ">
        <h1 className="text-3xl font-bold text-center pb-10">
          Contently Writers
        </h1>
        <form className="grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="grid items-center gap-1.5">
              <Label htmlFor="login">First Name</Label>
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
            <div className="grid  items-center gap-1.5">
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
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your Password"
              value={formValues.password}
              onChange={handleChange}
            />
            <InputError message={errors.password} />
          </div>
          <Button type="button" onClick={handleSubmit}>
            Register
          </Button>
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
    </div>
  );
}
