"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import ProductItem from "./productItem";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import Button from "./button";
import { convertSeconds } from "../lib/convertSeconds";
const SalesSection = () => {
  const [seconds, setSeconds] = useState(345600);
  const [time1, setTime] = useState({
    days: "3",
    hours: "23",
    min: "19",
    sec: "56",
  });

  useEffect(() => {
    const time = setTimeout(() => {
      const [days, hours, min, sec] = convertSeconds(seconds);
      setSeconds(seconds - 1);
      setTime({
        days: `${days}`,
        hours: `${hours}`,
        min: `${min}`,
        sec: `${sec}`,
      });
    }, 1000);
  }, [seconds, time1]);
  return (
    <section className="max-w-[1440px] w-full mx-auto flex justify-between items-left flex-col md:px-[135px] px-[30px] gap-[45px]">
      <div className="flex justify-left items-start flex-col gap-[20px]">
        <div className="flex justify-start items-center gap-[10px]">
          <div className="w-[20px] h-[40px] bg-redsecondary rounded-[4px]"></div>
          <div className="text-redsecondary font-poppinssemibold text-[16px]">
            Today’s
          </div>
        </div>
        <div className="w-full flex justify-between items-center mb-[11px]">
          <div className="flex justify-between lg:items-center items-start w-[600px] lg:flex-row flex-col">
            <p className="font-interbold md:text-[36px] text-[20px] font-semibold mb-[-11px]">
              Flash Sales
            </p>
            <div className="flex justify-center items-center gap-[20px]">
              <div>
                <p className="font-poppinsmedium text-[12px]">Days</p>
                <p className="font-interbold font-bold text-[32px]">{time1.days}</p>
              </div>
              <div className="mt-4">
                <Image
                  src={"/icons/Semiclone.png"}
                  alt="semicolon"
                  width={4}
                  height={16}
                />
              </div>
              <div>
                <p className="font-poppinsmedium text-[12px]">Hours</p>
                <p className="font-interbold font-bold text-[32px]">{time1.hours}</p>
              </div>
              <div className="mt-4">
                <Image
                  src={"/icons/Semiclone.png"}
                  alt="semicolon"
                  width={4}
                  height={16}
                />
              </div>
              <div>
                <p className="font-poppinsmedium text-[12px]">Minutes</p>
                <p className="font-interbold font-bold text-[32px]">{time1.min}</p>
              </div>
              <div className="mt-4">
                <Image
                  src={"/icons/Semiclone.png"}
                  alt="semicolon"
                  width={4}
                  height={16}
                />
              </div>
              <div>
                <p className="font-poppinsmedium text-[12px]">Seconds</p>
                <p className="font-interbold font-bold text-[32px]">{time1.sec}</p>
              </div>
            </div>
          </div>


          <div className="md:flex justify-end items-start gap-[8px] hidden">
            <div className="w-[46px] h-[46px] bg-graysecondary flex justify-center items-center rounded-full">
              <Image
                src={"/icons/arrow-left.png"}
                width={24}
                height={24}
                alt="arrow-left"
              ></Image>
            </div>
            <div className="w-[46px] h-[46px] bg-graysecondary flex justify-center items-center rounded-full">
              <Image
                src={"/icons/arrow-right.png"}
                width={24}
                height={24}
                alt="arrow-left"
              ></Image>
            </div>
          </div>
        </div>
      </div>
      <div className="md:flex justify-start items-center gap-[30px] mb-[15px] hidden">
        <Swiper
          className=""
          spaceBetween={30}
          slidesPerView={4}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}

        //   onSlideChange={() => console.log("slide change")}
        //   onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <ProductItem
              image={"/images/itemgamepad.png"}
              pname={"HAVIT HV-G92 Gamepad"}
              pricebefore={"$160"}
              priceafter={"$120"}
              ratings={5}
              totalrating={88}
              discount={40}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProductItem
              image={"/images/keyboard.png"}
              pname={"AK-900 Wired Keyboard"}
              pricebefore={"$1160"}
              priceafter={"$960"}
              ratings={4}
              totalrating={75}
              discount={35}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProductItem
              image={"/images/monitor.png"}
              pname={"IPS LCD Gaming Monitor"}
              pricebefore={"$400"}
              priceafter={"$370"}
              ratings={5}
              totalrating={99}
              discount={30}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <ProductItem
              image={"/images/chair.png"}
              pname={"S-Series Comfort Chair "}
              pricebefore={"$400"}
              priceafter={"$375"}
              ratings={4.5}
              totalrating={99}
              discount={30}
            />
          </SwiperSlide>
        </Swiper>
      </div>


      <div className="flex justify-start items-center gap-[30px] mb-[15px] md:hidden">
        <Swiper
          className=""
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}

        //   onSlideChange={() => console.log("slide change")}
        //   onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <ProductItem
              image={"/images/itemgamepad.png"}
              pname={"HAVIT HV-G92 Gamepad"}
              pricebefore={"$160"}
              priceafter={"$120"}
              ratings={5}
              totalrating={88}
              discount={40}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProductItem
              image={"/images/keyboard.png"}
              pname={"AK-900 Wired Keyboard"}
              pricebefore={"$1160"}
              priceafter={"$960"}
              ratings={4}
              totalrating={75}
              discount={35}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProductItem
              image={"/images/monitor.png"}
              pname={"IPS LCD Gaming Monitor"}
              pricebefore={"$400"}
              priceafter={"$370"}
              ratings={5}
              totalrating={99}
              discount={30}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <ProductItem
              image={"/images/chair.png"}
              pname={"S-Series Comfort Chair "}
              pricebefore={"$400"}
              priceafter={"$375"}
              ratings={4.5}
              totalrating={99}
              discount={30}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <ProductItem
              image={"/images/chair.png"}
              pname={"S-Series Comfort Chair "}
              pricebefore={"$400"}
              priceafter={"$375"}
              ratings={4.5}
              totalrating={99}
              discount={30}
            />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="flex justify-center items-center mb-[60px]">
        <Button name={"View All Products"} bgcolor={"bg-redsecondary"} />
      </div>
    </section>
  );
};

export default SalesSection;
