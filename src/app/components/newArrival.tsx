import Image from "next/image";
const NewArrival = () => {
  return (
    <section className="max-w-[1440px] w-full mx-auto flex justify-between items-left flex-col lg:px-[135px] gap-[45px] mb-[140px] px-[30px]">
      <div className="flex justify-left items-start flex-col gap-[20px]">
        <div className="flex justify-start items-center gap-[10px]">
          <div className="w-[20px] h-[40px] bg-redsecondary rounded-[4px]"></div>
          <div className="text-redsecondary font-poppinssemibold text-[16px]">
            Featured
          </div>
        </div>
        <div className="w-full flex justify-between items-center mb-[15px]">
          <div className="flex justify-between items-end w-[600px]">
            <p className="font-interbold text-[36px] font-semibold">
              New Arrival
            </p>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-[30px]">
        <div className="flex justify-center items-center px-[30px] pt-[90px] bg-blackprimary">
          <div className="relative">
            <Image
              src={"/images/ps.png"}
              width={511}
              height={511}
              alt="ps5"
            ></Image>
            <div className="absolute bottom-8 left-0 text-white w-[242px]">
              <p className="font-interbold font-semibold text-[24px] mb-4">
                PlayStation 5
              </p>
              <p className="text-[14px] mb-4">
                Black and White version of the PS5 coming out on sale.
              </p>
              <span className="inline-block border-b-[1px] border-gray-400 pb-[4px] mr-[11.5px]">
                Shop Now{" "}
              </span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-[30px] w-full">
          <div className="w-full col-span-1 bg-black flex justify-end items-center h-[284px] relative">
            <Image
              className="object-cover"
              src={"/images/woman.png"}
              alt="woman"
              width={432}
              height={286}
            ></Image>
            <div className="absolute bottom-8 left-8 text-white w-[255px]">
              <p className="font-interbold font-semibold text-[24px] mb-4">
                Women’s Collections
              </p>
              <p className="text-[14px] mb-4">
                Featured woman collections that give you another vibe.
              </p>
              <span className="inline-block border-b-[1px] border-gray-400 pb-[4px] mr-[11.5px]">
                Shop Now{" "}
              </span>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 grid-cols-1 gap-[30px]">
            <div className="w-full relative col-span-1 bg-black flex justify-center items-center p-[30px]">
              <Image
                src={"/images/speakers.png"}
                width={210}
                height={222}
                alt="speakers"
              ></Image>
              <div className="absolute bottom-6 left-6 text-white w-[255px]">
                <p className="font-interbold font-semibold text-[24px] mb-2">
                  Speakers
                </p>
                <p className="text-[14px] mb-2">Amazon wireless speakers</p>
                <span className="inline-block border-b-[1px] border-gray-400 pb-[4px] mr-[11.5px]">
                  Shop Now
                </span>
              </div>
            </div>
            <div className="w-full relative col-span-1 bg-black flex justify-center items-center p-[30px]">
              <Image
                src={"/images/perfume.png"}
                width={210}
                height={222}
                alt="speakers"
              ></Image>
              <div className="absolute bottom-6 left-6 text-white w-[255px]">
                <p className="font-interbold font-semibold text-[24px] mb-2">
                  Perfume
                </p>
                <p className="text-[14px] mb-2">GUCCI INTENSE OUD EDP</p>
                <span className="inline-block border-b-[1px] border-gray-400 pb-[4px] mr-[11.5px]">
                  Shop Now
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArrival;
