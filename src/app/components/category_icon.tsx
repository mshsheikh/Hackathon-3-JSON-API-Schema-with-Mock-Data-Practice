import Image from "next/image";

const CategoryIcon = ({ icon, name }: { icon: string; name: string }) => {
  return (
    <div className="flex justify-center items-center flex-col gap-4 border-black border-[1px] pt-[32px] pb-[24px] rounded-[4px] group">
      <Image
        src={icon}
        width={56}
        height={56}
        alt="category"
        className=" "
      ></Image>
      <p className="text-[16px]">{name}</p>
    </div>
  );
};

export default CategoryIcon;
