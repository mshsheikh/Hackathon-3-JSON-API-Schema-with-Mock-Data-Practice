import Image from "next/image";
import Link from "next/link";

interface pitem {
  image: string;
  pname: string;
  pricebefore: string;
  priceafter: string;
  ratings: number;
  totalrating: number;
  discount: number;
  inline?: boolean;
  isNew?: boolean;
  color?: string;
}

const ProductItem = ({
  image,
  pname,
  pricebefore,
  priceafter,
  ratings,
  totalrating,
  discount,
  inline = false,
  isNew = false,
  color = "none",
}: pitem) => {
  return (
    <div className="">
      <div className="flex justify-center overflow-hidden items-center p-[49px] bg-graysecondary relative rounded-[4px] mb-4 group">
        <Link href={"/product"}>
          <Image
            src={image}
            alt="item"
            width={190}
            height={180}
            className="object-contain w-[190px] h-[180px]"
          ></Image>
        </Link>
        <span className="">
          {discount != 0 ? (
            <p className="absolute top-[12px] left-[12px] w-[55px] h-[26px] rounded-[4px] bg-redsecondary text-[12px] text-white flex justify-center items-center">
              -{discount}%
            </p>
          ) : isNew != false ? (
            <p className="absolute top-[12px] left-[12px] w-[55px] h-[26px] rounded-[4px] bg-greensecondary text-[12px] text-white flex justify-center items-center">
              New
            </p>
          ) : (
            ""
          )}
          <span className="absolute top-[12px] right-[12px] w-[34px] h-[34px] bg-white flex justify-center items-center rounded-full">
            <Image
              src={"/icons/Wishlist.png"}
              width={24}
              height={24}
              alt="wishlist"
            ></Image>
          </span>
          <span className="absolute top-[54px] right-[12px] w-[34px] h-[34px] bg-white flex justify-center items-center rounded-full">
            <Image
              src={"/icons/eye.png"}
              alt="eye"
              width={24}
              height={24}
            ></Image>
          </span>
        </span>
        <p className="py-[8px] flex justify-center items-center text-white font-poppinssemibold text-[16px] absolute -bottom-10 bg-blackprimary w-full">
          Add To Cart
        </p>
      </div>
      <div className="flex justify-start items-start flex-col gap-2">
        <p className="font-poppinsmedium text-[16px]">{pname}</p>
        <div className="flex justify-start items-center gap-[8px]">
          <div className="flex justify-center items-center gap-3 font-poppinsmedium text-[16px]">
            <p className="text-redsecondary">{priceafter}</p>
            {pricebefore != "$0" ? (
              <p className=" text-gray-400 line-through">{pricebefore}</p>
            ) : (
              ""
            )}
          </div>
          {inline === true ? (
            <div className="flex justify-left items-center gap-[6px]">
              {Array.from({ length: ratings }, (_, i) => {
                return (
                  <Image
                    key={i}
                    src={"/icons/star.png"}
                    width={20}
                    height={20}
                    alt="star"
                    className="rounded-[1.4px]"
                  ></Image>
                );
              })}
              {Array.from({ length: Math.ceil(5 - ratings) }, (_, i) => {
                if (Number.isInteger(ratings)) {
                  return (
                    <Image
                      key={i}
                      src={"/icons/graystar.png"}
                      width={20}
                      height={20}
                      alt="star"
                      className="rounded-[1.4px]"
                    ></Image>
                  );
                } else {
                  return (
                    <Image
                      key={i}
                      src={"/icons/halfstar.png"}
                      width={20}
                      height={20}
                      alt="star"
                      className="rounded-[1.4px]"
                    ></Image>
                  );
                }
              })}

              <span className="text-gray-400 ml-[8px] font-poppinssemibold">
                ({totalrating})
              </span>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div
        className={`${
          inline ? "hidden" : "flex"
        } justify-left items-center gap-[6px] mt-[8px]`}
      >
        {Array.from({ length: ratings }, (_, i) => {
          return (
            <Image
              key={i}
              src={"/icons/star.png"}
              width={20}
              height={20}
              alt="star"
              className="rounded-[1.4px]"
            ></Image>
          );
        })}
        {Array.from({ length: Math.ceil(5 - ratings) }, (_, i) => {
          if (Number.isInteger(ratings)) {
            return (
              <Image
                key={i}
                src={"/icons/graystar.png"}
                width={20}
                height={20}
                alt="star"
                className="rounded-[1.4px]"
              ></Image>
            );
          } else {
            return (
              <Image
                key={i}
                src={"/icons/halfstar.png"}
                width={20}
                height={20}
                alt="star"
                className="rounded-[1.4px]"
              ></Image>
            );
          }
        })}

        <span className="text-gray-400 ml-[8px] font-poppinssemibold">
          ({totalrating})
        </span>
      </div>
      {color != "none" ? (
        <div className="mt-2 flex justify-left items-center gap-[8px]">
          <div className={`${color} w-[20px] h-[20px] rounded-full p-2`}></div>
          <div className="w-[20px] h-[20px] p-2 bg-redsecondary rounded-full"></div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ProductItem;
