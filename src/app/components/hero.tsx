import Image from "next/image";
const HeroSection = () => {
  return (
    <section className="max-w-[1440px] w-full mx-auto flex justify-between items-center md:px-[135px] px-[30px] gap-[45px] mb-[100px] md:mb-[140px]">
      <ul className="hidden w-[217px] xl:flex  justify-center items-start flex-col gap-4 text-[16px] pr-4 border-r-2 mt-[40px]">
        <li className="flex w-full justify-between items-center ">
          <p>Woman’s Fashion</p>
          <span className="block">
            <Image
              src={"/icons/DropRight.png"}
              alt="Dropdown"
              width={24}
              height={24}
            ></Image>
          </span>
        </li>
        <li className="flex justify-between items-center w-full">
          <p>Men’s Fashion</p>
          <span className="block">
            <Image
              src={"/icons/DropRight.png"}
              alt="Dropdown"
              width={24}
              height={24}
            ></Image>
          </span>
        </li>
        <li>Electronics</li>
        <li>Home & Lifestyle</li>
        <li>Medicine</li>
        <li>Sports & Outdoor</li>
        <li>Baby’s & Toys</li>
        <li>Groceries & Pets</li>
        <li>Health & Beauty</li>
      </ul>
      <div className="bg-blackprimary lg:w-[892px] w-full h-[344px] flex justify-between items-start flex-col relative mt-[40px] " > 
        {/* <div></div> */}
        <div className="lg:w-[892px] w-full flex justify-between items-start lg:flex-row flex-col">
          <div className="pt-[58px] pl-[64px] flex flex-col justify-center items-start w-[300px]">
            <div className="flex justify-center items-center gap-6 mb-[20px]">
              <Image
                src={"/icons/apple.png"}
                width={40}
                height={49}
                alt="apple"
              ></Image>
              <p className="text-white text-[16px]">iPhone 14 Series</p>
            </div>
            <h1 className="leading-tight mb-[24px] text-[46px]">Up to 10% off Voucher</h1>
            <p className="text-white text-[16px] font-poppinsmedium">
              <span className="inline-block border-b-[1px] pb-[4px] mr-[11.5px]">
                Shop Now{" "}
              </span>
              <span className="inline-block align-top">
                <Image
                  src={"/icons/arrowright.png"}
                  width={24}
                  height={24}
                  alt="apple"
                ></Image>
              </span>
            </p>
          </div>
          <div className="pt-[16px] lg:block hidden">
            <Image
              src={"/icons/heromobile.png"}
              width={659}
              height={352}
              className="md:w-auto w-[659px]"
              alt="mobile"
            ></Image>
          </div>
        </div>
        <div className="w-full justify-center items-center absolute bottom-[11px] lg:flex hidden ">
          <div className="flex justify-center items-center gap-3">
            <p className="w-3 h-3 rounded-full bg-[#6e6e6e]"></p>
            <p className="w-3 h-3 rounded-full bg-[#6e6e6e]"></p>
            <p className="w-3.5 h-3.5 rounded-full bg-redsecondary border-[2px]"></p>
            <p className="w-3 h-3 rounded-full bg-[#6e6e6e]"></p>
            <p className="w-3 h-3 rounded-full bg-[#6e6e6e]"></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
