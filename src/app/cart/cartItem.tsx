import Image from "next/image";

interface cartProps {
  name: string;
  image: string;
  price: string;
  subtotal: string;
  quantity: string;
}

const CartItem = ({ name, image, price, subtotal, quantity }: cartProps) => {
  return (
    <div className="lg:px-10 px-0 py-6 lg:gap-0 gap-8 text-[16px] grid lg:grid-cols-4 grid-cols-1 justify-between items-center w-full shadow-cart group">
      <div className="flex justify-left items-center gap-[22px] relative">
        <Image src={image} width={50} height={39} alt="monitor"></Image>
        <p className="text-[16px]">{name}</p>
        <Image
          className="absolute -top-2 -left-2 hidden cursor-pointer"
          src={"/icons/cancel.png"}
          alt="cancel"
          width={24}
          height={24}
        ></Image>
      </div>
      <p className="text-[16px] lg:text-center text-left">${price}</p>
      <div className="flex lg:justify-center justify-start items-center">
        <input
          value={quantity}
          type="number"
          placeholder="01"
          className="w-[72px] h-[44px] p-2 border-[1px] border-blackprimary rounded-[4px]"
        />
      </div>

      <p className="text-[16px] lg:text-right text-left">${subtotal}</p>
    </div>
  );
};

export default CartItem;
