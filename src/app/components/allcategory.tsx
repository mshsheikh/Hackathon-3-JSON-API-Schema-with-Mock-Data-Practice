import Image from "next/image";
import CategoryIcon from "./category_icon";

const AllCategory = () => {
  return (
    <section className="max-w-[1440px] w-full mx-auto flex justify-between items-left flex-col px-[30px] md:px-[135px] gap-[45px] mb-[70px]">
      <div className="flex justify-start items-center gap-[10px]">
        <div className="w-[20px] h-[40px] bg-redsecondary rounded-[4px]"></div>
        <div className="text-redsecondary font-poppinssemibold text-[16px]">
          Categories
        </div>
      </div>
      <div className="w-full flex justify-between items-center mb-[15px]">
        <div className="flex justify-between items-end w-[600px]">
          <p className="font-interbold md:text-[36px] text-[20px] font-semibold ">
            Browse By Category
          </p>
        </div>
        <div className="flex justify-end items-start gap-[8px]">
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
      {/* category icons */}
      <div className="grid lg:grid-cols-6 md:grid-cols-2 grid-cols-1 gap-[30px]">
        <CategoryIcon icon={"/icons/cellphone.svg"} name="Phones" />
        <CategoryIcon icon={"/icons/computer.svg"} name="Computers" />
        <CategoryIcon icon={"/icons/smartwatch.svg"} name="SmartWatch" />
        <CategoryIcon icon={"/icons/camera.svg"} name="Camera" />
        <CategoryIcon icon={"/icons/headphone.svg"} name="HeadPhones" />
        <CategoryIcon icon={"/icons/gamepad.svg"} name="Gaming" />
      </div>
    </section>
  );
};

export default AllCategory;
