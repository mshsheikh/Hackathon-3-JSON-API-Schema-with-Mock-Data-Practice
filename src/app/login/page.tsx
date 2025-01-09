"use client";
import Image from "next/image";
import Button from "../components/button";
import Link from "next/link";
import { login, signup } from "./actions";
import { createClient } from "@/utils/supabase/client";
import { useDispatch } from "../../redux/store";
import { makelogin } from "@/redux/reducers/loginSlice";
import { useRouter } from "next/navigation";
import { useSelector } from "../../redux/store";

import { useEffect, useState } from "react";
import { getLoggedIn } from "./login";

const Page = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.login.logged);

  const supabase = createClient();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const submitUser = async (e: any) => {
    e.preventDefault();
    if (data.email && data.password) {
      const error = await getLoggedIn(data);
      if (!error) {
        dispatch(makelogin(true));
      }
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      router.push("/");
    }
  }, [isLoggedIn, router]);

  const changeData = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <section className="max-w-[1440px] w-full mx-auto flex justify-start items-center flex-col pr-[0px] pt-[60px] lg:pr-[135px] lg:px-[0px] mb-[140px]">
      <form
        onSubmit={(e) => submitUser(e)}
        className="flex justify-center items-center md:flex-row flex-col gap-[129px]"
      >
        <Image
          src={"/images/loginimage.png"}
          height={781}
          width={805}
          alt="loginimage"
          className=""
        ></Image>
        <div className="flex justify-start items-start flex-col w-[371px]">
          <h2>Log in to Exclusive</h2>
          <p className="text-[16px] mt-6">Enter your details below</p>
          <div className="flex justify-start items-start flex-col mt-12 w-full">
            <input
              type="email"
              name="email"
              id="email"
              value={data.email}
              onChange={(e) => changeData(e)}
              placeholder="Email or Phone Number"
              className="text-gray-400 border-b-[2px] py-[8px] pl-2 w-full mb-[40px]"
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              id="password"
              value={data.password}
              onChange={(e) => changeData(e)}
              className="text-gray-400 border-b-[2px] py-[8px] pl-2 w-full mb-[40px]"
            />
            <div className="flex justify-between items-center w-full text-[16px] text-redsecondary">
              <div>
                <Button name="Log In" bgcolor="bg-redsecondary" />
              </div>
              <p>Forget Password?</p>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Page;
