import Image from "next/image";
import CartItem from "./cartItem";
import Button from "../components/button";
import Link from "next/link";

const Page = () => {
  return (
    <section className="pt-20 max-w-[1440px] w-full mx-auto flex justify-start items-center flex-col lg:px-[135px] px-[30px] mb-[140px]">
      <p className="text-[14px] text-left mb-20 w-full">
        <span className="text-gray-400">
          <Link href={"/"}>Home</Link>
        </span>{" "}
        /{" "}
        <span>
          <Link href={"/cart"}>Cart </Link>
        </span>
      </p>
      <div className="lg:px-10 px-2 py-6 text-[16px] grid grid-cols-4 justify-between items-center w-full shadow-cart mb-[40px]">
        <p>Product</p>
        <p className="text-center">Price</p>
        <p className="text-center">Quantity</p>
        <p className="text-right">Subtotal</p>
      </div>
      <div className="w-full flex justify-center items-center flex-col gap-10 mb-6">
        <CartItem
          name={"LCD Monitor"}
          image={"/images/monitor.png"}
          price={"650"}
          subtotal={"650"}
          quantity={"01"}
        />
        <CartItem
          name={"H1 Gamepad"}
          image={"/images/itemgamepad.png"}
          price={"550"}
          subtotal={"1100"}
          quantity={"02"}
        />
      </div>
      <div className="flex justify-between items-center w-full mb-20">
        <Button name="Return to Shop" bgcolor="bg-white" />
        <Button name="Update Cart" bgcolor="bg-white" />
      </div>
      <div className="flex justify-center items-start lg:flex-row flex-col w-full lg:gap-[173px] gap-[30px]">
        <div className="flex justify-left items-stretch md:flex-row flex-col gap-4 w-full">
          <input
            placeholder="Coupon Code"
            className="p-4 border-[1px] rounded-[4px] border-blackprimary w-[300px]"
          />
          <Button name="Apply Coupon" bgcolor="bg-redsecondary" />
        </div>
        <div className="py-[32px] px-[24px] border-[2px] border-blackprimary lg:w-[600px] w-[250px]">
          <p className="text-[20px] font-poppinsmedium mb-6">Cart Total</p>
          <div className="flex justify-between items-center text-[16px] mb-[16px]">
            <p>Subtotal:</p>
            <p>$1750</p>
          </div>
          <hr className="mb-[16px]" />
          <div className="flex justify-between items-center text-[16px] mb-[16px]">
            <p>Shipping:</p>
            <p>Free</p>
          </div>
          <hr className="mb-[16px]" />
          <div className="flex justify-between items-center text-[16px] mb-[16px]">
            <p>Shipping:</p>
            <p>$1750</p>
          </div>
          <hr className="mb-[16px]" />
          <div className="flex justify-center items-center">
            <Link href={"/checkout"}>
              <Button name="Proceed to Checkout" bgcolor="bg-redsecondary" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
