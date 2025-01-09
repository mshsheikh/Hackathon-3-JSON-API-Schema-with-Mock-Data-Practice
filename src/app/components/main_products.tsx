"use client";
import Image from "next/image";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import Button from "./button";
import ProductItem from "./productItem";

const MainProducts = () => {
  return (
    <section className="max-w-[1440px] w-full mx-auto flex justify-between items-left flex-col md:px-[135px] px-[30px] gap-[45px] mb-[140px]">
      <div className="flex justify-left items-start flex-col gap-[20px]">
        <div className="flex justify-start     items-center gap-[10px]">
          <div className="w-[20px] h-[40px] bg-redsecondary rounded-[4px]"></div>
          <div className="text-redsecondary font-poppinssemibold text-[16px]">
            Our Products
          </div>
        </div>
        <div className="w-full flex justify-between items-center mb-[15px]">
          <div className="flex justify-between items-end w-[600px]">
            <p className="font-interbold lg:text-[36px] text-[20px] font-semibold">
              Explore Our Products
            </p>
          </div>
          <div className="lg:flex justify-end items-start gap-[8px] hidden">
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
      <div className="grid lg:grid-cols-4 grid-cols-1 items-center justify-center gap-[30px]">
        <ProductItem
          image={"/images/chocolate.png"}
          pname={"Breed Dry Dog Food"}
          pricebefore={"$0"}
          priceafter={"$100"}
          ratings={3}
          totalrating={35}
          discount={0}
          inline={true}
        />
        <ProductItem
          image={"/images/camera.png"}
          pname={"CANON EOS DSLR Camera"}
          pricebefore={"$0"}
          priceafter={"$360"}
          ratings={4}
          totalrating={95}
          discount={0}
          inline={true}
        />
        <ProductItem
          image={"/images/laptop.png"}
          pname={"ASUS FHD Gaming Laptop"}
          pricebefore={"$0"}
          priceafter={"$700"}
          ratings={5}
          totalrating={325}
          discount={0}
          inline={true}
        />{" "}
        <ProductItem
          image={"/images/curology.png"}
          pname={"Curology Product Set "}
          pricebefore={"$0"}
          priceafter={"$500"}
          ratings={4}
          totalrating={145}
          discount={0}
          inline={true}
        />{" "}
      </div>
      <div className="grid lg:grid-cols-4 grid-cols-1 items-center justify-center gap-[30px] mt-[15px]">
        <ProductItem
          image={"/images/car.png"}
          pname={"Kids Electric Car"}
          pricebefore={"$0"}
          priceafter={"$960"}
          ratings={4.5}
          totalrating={65}
          discount={0}
          color={"bg-[#FB1314]"}
          inline={true}
          isNew={true}
        />
        <ProductItem
          image={"/images/boot.png"}
          pname={"Jr. Zoom Soccer Cleats"}
          pricebefore={"$0"}
          priceafter={"$1160"}
          ratings={5}
          totalrating={35}
          discount={0}
          color={"bg-[#EEFF61]"}
          inline={true}
        />
        <ProductItem
          image={"/images/controller.png"}
          pname={"GP11 Shooter USB Gamepad"}
          pricebefore={"$0"}
          priceafter={"$660"}
          ratings={4.5}
          totalrating={55}
          discount={0}
          color={"bg-[#000000]"}
          inline={true}
          isNew={true}
        />
        <ProductItem
          image={"/images/jacket2.png"}
          pname={"Quilted Satin Jacket"}
          pricebefore={"$0"}
          priceafter={"$660"}
          ratings={4.5}
          totalrating={55}
          discount={0}
          color={"bg-[#184A48]"}
          inline={true}
        />
      </div>
      <div className="flex justify-center items-center mt-[15px]">
        <Button name="View All Products" bgcolor="bg-redsecondary" />
      </div>
    </section>
  );
};

export default MainProducts;
