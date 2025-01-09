"use client";
import Link from "next/link";
import Image from "next/image";
import Button from "../components/button";
import { login, signup } from "../login/actions";
import { getSignedup } from "./signup";
import { useEffect, useReducer, useState } from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const changeData = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitSignup = async (e: any) => {
    e.preventDefault();
    if (data.email && data.password) {
      const error = await getSignedup(data);
      if (!error) {
        router.push("/login");
      }
    }
  };

  return (
    <section className="max-w-[1440px] w-full mx-auto flex justify-start items-center flex-col lg:pr-[135px] pr-[0px] pt-[60px] lg:px-[0px] mb-[140px]">
      <form
        onSubmit={(e) => {
          submitSignup(e);
        }}
        className="flex justify-center items-center gap-[129px] md:flex-row flex-col"
      >
        <Image
          src={"/images/loginimage.png"}
          height={781}
          width={805}
          alt="loginimage"
          className=""
        ></Image>
        <div className="flex justify-start items-start flex-col w-[371px]">
          <h2>Create an account</h2>
          <p className="text-[16px] mt-6">Enter your details below</p>
          <div className="flex justify-start items-stretch flex-col mt-12 w-full">
            <input
              type="text"
              name="fullname"
              placeholder="Name"
              className="text-gray-400 border-b-[2px] py-[8px] pl-4 w-full mb-[40px]"
            />
            <input
              name="email"
              type="email"
              placeholder="Email or Phone Number"
              value={data.email}
              onChange={(e) => changeData(e)}
              className="text-gray-400 border-b-[2px] py-[8px] pl-4 w-full mb-[40px]"
            />
            <input
              name="password"
              type="password"
              placeholder="Password"
              value={data.password}
              onChange={(e) => changeData(e)}
              className="text-gray-400 border-b-[2px] py-[8px] pl-4 w-full mb-[40px]"
            />
            <button
              className={`px-10 py-3 rounded-[4px] font-poppinsmedium
                    text-white bg-redsecondary
                 `}
            >
              Sign Up
            </button>
            <button
              className={`px-10 py-3 rounded-[4px] border-[3px] text-black bg-white mt-4 mb-[34px]`}
            >
              <Image
                src={"/icons/google.svg"}
                width={24}
                height={24}
                alt="google"
                className="inline-block align-top mr-4 text-[16px]"
              ></Image>
              Sign up with Google
            </button>
            <p className="text-center text-[16px]">
              Already have account?{" "}
              <Link href={"/login"} className="ml-4 font-poppinsmedium underline">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Page;
