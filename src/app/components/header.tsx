"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getUser } from "../lib/getUser";
import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { useSelector } from "../../redux/store";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const navigation = [
  {
    url: "/",
    name: "Home",
  },

  {
    url: "/contact",
    name: "Contact",
  },
  {
    url: "/about",
    name: "About",
  },
  {
    url: "/signup",
    name: "Sign Up",
  },
];

const Header = () => {
  const path = usePathname();
  const isLogin = useSelector((state: any) => state.login.logged);
  const [user, setUser] = useState<boolean | any>(null);
  useEffect(() => {
    const getData = async () => {
      const supabase = createClient();
      const { data, error } = await supabase.auth.getUser();
      if (error || !data?.user) {
        setUser(false);
      } else {
        setUser(data.user != undefined ? data.user.email : null);
        setUser(true);
      }
    };
    getData();
  }, [isLogin]);

  return !path.includes("/studio") ? (
    <>
      <section className="">
        <div className="h-[48px] max-w-[1440px] w-full mx-auto bg-blackprimary md:px-[136px] px-[30px] flex justify-between items-center">
          <div></div>
          <div className="flex justify-center items-center gap-2">
            <p className="font-poppinsregular md:text-[14px] text-[10px] text-gray-400">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </p>
            <p className="text-white font-poppinsSemiBold md:text-[14px] text-[12px] underline">
              ShopNow
            </p>
          </div>
          <select
            name=""
            id=""
            className="bg-blackprimary text-white font-poppinsregular md:text-[14px] rounded-[4px] text-[12px]"
          >
            <option className="text-white text-[14px]" value="">
              English{" "}
            </option>
          </select>
        </div>
        <Accordion type="single" collapsible className="md:hidden">
        <AccordionItem value="item-1">

        <header className="max-w-[1440px] relative w-full mx-auto flex md:flex-row flex-col justify-between items-start md:items-center lg:px-[135px] md:px-[30px] px-[20px] pt-[47px] pb-[23px]">
          <ul className="flex justify-between items-center flex-row md:w-auto w-full">
            <li className="font-interbold font-bold text-[24px]">
              {" "}
              <Link href={"/"}>Exclusive</Link>
            </li>
            <AccordionTrigger>
            <li className="md:hidden">
            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
            </svg> */}
            </li>
            </AccordionTrigger>
          </ul>
          <AccordionContent>
          <ul className="flex justify-center md:items-center items-start gap-12 md:flex-row flex-col md:mt-0 mt-6">
            {navigation.map((nav, id) => {
              return (
                <li
                  key={id}
                  className={`${path === nav.url ? "underline" : ""}`}
                >
                  <Link href={nav.url}>{nav.name}</Link>{" "}
                </li>
              );
            })}
          </ul>
          <div className="flex justify-center items-center gap-[30px] md:flex-row flex-col">
            <div className="relative flex justify-center md:items-center items-start md:flex-row flex-col md:mt-0 mt-6">
              <input
                type="text"
                className="w-[243px] h-[38px] p-4 bg-graysecondary text-[12px] font-poppinsregular rounded-[4px]"
                placeholder="What are you looking for?"
              />
              <span className="absolute top-0 right-0 h-[38px] w-[38px] bg-graysecondary flex justify-center items-center">
                <Image
                  src={"/icons/search.png"}
                  width={16}
                  height={16}
                  alt="search"
                ></Image>
              </span>
            </div>
            <div className="w-full flex justify-center md:items-center items-start gap-[19px] md:flex-row flex-col">
              <Link href={"/wishlist"}>
                {" "}
                <Image
                  src={"/icons/Wishlist.png"}
                  alt="wishlist"
                  width={32}
                  height={32}
                ></Image>
              </Link>
              <Link href={"/cart"}>
                <Image
                  src={"/icons/cart.png"}
                  alt="cart"
                  width={32}
                  height={32}
                ></Image>
              </Link>
              {isLogin || user ? (
                <Link href={"/account"}>
                  <Image
                    src={"/icons/user.png"}
                    alt="cart"
                    width={32}
                    height={32}
                  ></Image>
                </Link>
              ) : (
                ""
              )}
              {user === null ? <div className="w-[32px] h-[32px]"></div> : ""}
            </div>
          </div>
          </AccordionContent>
        </header>
        </AccordionItem>
        </Accordion>


        <header className="max-w-[1440px] relative w-full mx-auto md:flex-row flex-col justify-between items-start md:items-center lg:px-[135px] md:px-[30px] px-[20px] pt-[47px] pb-[23px] hidden md:flex">
          <ul className="flex justify-between items-center flex-row md:w-auto w-full">
            <li className="font-interbold font-bold text-[24px]">
              {" "}
              <Link href={"/"}>Exclusive</Link>
            </li>
            <li className="md:hidden">
            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
            </svg> */}
            </li>
          </ul>
          <ul className="flex justify-center md:items-center items-start gap-12 md:flex-row flex-col md:mt-0 mt-6">
            {navigation.map((nav, id) => {
              return (
                <li
                  key={id}
                  className={`${path === nav.url ? "underline" : ""}`}
                >
                  <Link href={nav.url}>{nav.name}</Link>{" "}
                </li>
              );
            })}
          </ul>
          <div className="flex justify-center items-center gap-[30px] md:flex-row flex-col">
            <div className="relative flex justify-center md:items-center items-start md:flex-row flex-col md:mt-0 mt-6">
              <input
                type="text"
                className="w-[243px] h-[38px] p-4 bg-graysecondary text-[12px] font-poppinsregular rounded-[4px]"
                placeholder="What are you looking for?"
              />
              <span className="absolute top-0 right-0 h-[38px] w-[38px] bg-graysecondary flex justify-center items-center">
                <Image
                  src={"/icons/search.png"}
                  width={16}
                  height={16}
                  alt="search"
                ></Image>
              </span>
            </div>
            <div className="w-full flex justify-center md:items-center items-start gap-[19px] md:flex-row flex-col">
              <Link href={"/wishlist"}>
                {" "}
                <Image
                  src={"/icons/Wishlist.png"}
                  alt="wishlist"
                  width={32}
                  height={32}
                ></Image>
              </Link>
              <Link href={"/cart"}>
                <Image
                  src={"/icons/cart.png"}
                  alt="cart"
                  width={32}
                  height={32}
                ></Image>
              </Link>
              {isLogin || user ? (
                <Link href={"/account"}>
                  <Image
                    src={"/icons/user.png"}
                    alt="cart"
                    width={32}
                    height={32}
                  ></Image>
                </Link>
              ) : (
                ""
              )}
              {user === null ? <div className="w-[32px] h-[32px]"></div> : ""}
            </div>
          </div>
        </header>

        <hr />
      </section>
    </>
  ) : (
    ""
  );
};

export default Header;
