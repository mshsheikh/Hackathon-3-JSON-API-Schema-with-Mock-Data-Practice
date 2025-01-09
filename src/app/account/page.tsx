"use client";
import Image from "next/image";
import Link from "next/link";
import Button from "../components/button";
import { useState, useEffect } from "react";
import PrivatePage from "../private/page";
import { getEmailServer } from "./email";
import { logout } from "./actions";
import { useDispatch } from "../../redux/store";
import { useSelector } from "../../redux/store";
import { createClient } from "@/utils/supabase/client";
import { makelogin } from "@/redux/reducers/loginSlice";
import { useRouter } from "next/navigation";
import { getLoggedOut } from "./logout";

const Page = () => {
  const supabase = createClient();
  const router = useRouter();

  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.login.logged);
  const [email, setEmail] = useState<any | string>(null);
  const logout = async (e: any) => {
    e.preventDefault();
    const error = await getLoggedOut();
    if (!error) {
      dispatch(makelogin(false));
    }
  };

  useEffect(() => {
    async function getEmail() {
      const email = await getEmailServer();
      return email;
    }
    const email = getEmail();
    setEmail(email);
  }, []);

  useEffect(() => {
    const getData = async () => {
      const supabase = createClient();
      const { data, error } = await supabase.auth.getUser();
      if (isLoggedIn === false && data?.user === null) {
        router.push("/");
      }
    };
    getData();
  }, [router, isLoggedIn]);
  return (
    <section className="pt-20 max-w-[1440px] w-full mx-auto flex justify-start items-center flex-col px-[135px] mb-[140px]">
      <div className="flex justify-between items-start w-full mb-20">
        <p className="text-[14px] text-left ">
          <span className="text-gray-400">
            <Link href={"/"}>Home</Link>
          </span>{" "}
          /{" "}
          <span>
            <Link href={"/account"}>My Account </Link>
          </span>
        </p>
        <div className="flex flex-col justify-end items-end">
          <p className="mb-4">{email}</p>
          <form
            onSubmit={(e) => {
              logout(e);
            }}
          >
            <Button name="Log Out" bgcolor="bg-redsecondary" />
          </form>
        </div>
      </div>
      {/* Account section */}
      <div className="flex justify-between w-full items-start gap-[100px]">
        {/* Account management links */}
        <div className="w-[20%]">
          <p className="font-poppinsmedium mb-4">Manage My Account</p>
          <ul className="ml-[35px] mb-[24px]">
            <p className="mt-4 text-redsecondary">My Profile</p>
            <p className="mt-2 text-gray-400">Address Book</p>
            <p className="mt-2 text-gray-400">My Payment Options</p>
          </ul>
          <p className="font-poppinsmedium mb-4">My Orders</p>
          <ul className="ml-[35px] mb-4">
            <p className="mt-4 text-gray-400">My Returns</p>
            <p className="mt-2 text-gray-400">My Cancellations</p>
          </ul>
          <p className="font-poppinsmedium mb-4">My WishList</p>
        </div>
        {/* Edit form */}
        <div className="px-20 py-10 flex justify-start items-start flex-col w-[80%] shadow-cart">
          <p className="text-[20px] text-redsecondary mb-4">
            Edit Your Profile
          </p>
          <div className="flex justify-between items-center gap-[50px]">
            <div className="text-blackprimary text-[16px] mb-8">
              <p className="mb-2">First Name*</p>
              <input type="text" className="bg-gray-200 p-3 w-[330px]" />
            </div>
            <div className="text-blackprimary text-[16px] mb-8">
              <p className="mb-2">Last Name*</p>
              <input type="text" className="bg-gray-200 p-3 w-[330px]" />
            </div>
          </div>
          <div className="flex justify-between items-center gap-[50px]">
            <div className="text-blackprimary text-[16px] mb-8">
              <p className="mb-2">Email</p>
              <input type="text" className="bg-gray-200 p-3 w-[330px]" />
            </div>
            <div className="text-blackprimary text-[16px] mb-8">
              <p className="mb-2">Address</p>
              <input type="text" className="bg-gray-200 p-3 w-[330px]" />
            </div>
          </div>
          <div className="flex justify-left items-center gap-[50px]">
            <div className="text-blackprimary text-[16px] mb-6">
              <p className="mb-2">Password Changes</p>
              <input
                type="text"
                className="bg-gray-200 p-3 w-[710px] mb-4"
                placeholder="Current Password"
              />
              <input
                type="text"
                className="bg-gray-200 p-3 w-[710px] mb-4"
                placeholder="New Password"
              />
              <input
                type="text"
                className="bg-gray-200 p-3 w-[710px]"
                placeholder="Confirm New Password"
              />
            </div>
          </div>
          <div className="w-full flex justify-between items-center">
            <p>Cancel</p>
            <Button name="Save Changes" bgcolor="bg-redsecondary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
