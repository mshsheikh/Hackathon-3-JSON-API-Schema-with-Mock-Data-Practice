import Image from "next/image";
import Link from "next/link";
import Button from "../components/button";
const Page = () => {
  return (
    <section className="pt-20 max-w-[1440px] w-full mx-auto flex justify-start items-center flex-col lg:px-[135px] px-[30px] mb-[140px]">
      <p className="text-[14px] text-left mb-20 w-full">
        <span className="text-gray-400">
          <Link href={"/"}>Home</Link>
        </span>{" "}
        /{" "}
        <span className="text-gray-400">
          <Link href={"/account"}>My Account </Link>
        </span>
        /{" "}
        <span className="text-gray-400">
          <Link href={"/cart"}>Product </Link>
        </span>
        /{" "}
        <span className="text-gray-400">
          <Link href={"/cart"}>View Cart </Link>
        </span>
        /{" "}
        <span>
          <Link href={"/cart"}>Checkout </Link>
        </span>
      </p>
      <h2 className="text-left w-full mb-12">Billing Details</h2>
      <div className="flex justify-between items-start xl:flex-row flex-col w-full">
        <div className="flex justify-start items-start w-1/2 flex-col">
          <div className="text-gray-400 text-[16px] mb-8">
            <p className="mb-2">First Name*</p>
            <input type="text" className="bg-gray-200 p-3 lg:w-[470px] w-[350px]" />
          </div>
          <div className="text-gray-400 text-[16px] mb-8">
            <p className="mb-2">Company Name</p>
            <input type="text" className="bg-gray-200 p-3 lg:w-[470px] w-[350px]" />
          </div>
          <div className="text-gray-400 text-[16px] mb-8">
            <p className="mb-2">Street Address*</p>
            <input type="text" className="bg-gray-200 p-3 lg:w-[470px] w-[350px]" />
          </div>
          <div className="text-gray-400 text-[16px] mb-8">
            <p className="mb-2">Apartment, floor, etc. (optional)</p>
            <input type="text" className="bg-gray-200 p-3 lg:w-[470px] w-[350px]" />
          </div>
          <div className="text-gray-400 text-[16px] mb-8">
            <p className="mb-2">Town/City*</p>
            <input type="text" className="bg-gray-200 p-3 lg:w-[470px] w-[350px]" />
          </div>
          <div className="text-gray-400 text-[16px] mb-8">
            <p className="mb-2">Phone Number*</p>
            <input type="text" className="bg-gray-200 p-3 lg:w-[470px] w-[350px]" />
          </div>
          <div className="text-gray-400 text-[16px] mb-8">
            <p className="mb-2">Email Address*</p>
            <input type="text" className="bg-gray-200 p-3 lg:w-[470px] w-[350px]" />
          </div>
          <div className="flex justify-center items-left w-full">
            <input type="checkbox" className="w-6 h-6 bg-red-600" />
            <span className="lg:inline-block block align-top ml-4">
              Save this information for faster check-out next time
            </span>
          </div>
        </div>
        <div className="mt-[47px] lg:w-1/2 w-full lg:pr-[102px] px-[30px]">
          <div className="flex justify-between items-center mb-10">
            <div className="flex justify-center items-center gap-6">
              <Image
                src={"/images/itemgamepad.png"}
                alt="gamepad"
                width={54}
                height={54}
              ></Image>
              <p className="text-[16px]">LCD Monitor</p>
            </div>
            <p className="text-[16px]">$660</p>
          </div>
          <div className="flex justify-between items-center mb-8 text-[16px]">
            <div className="flex justify-center items-center gap-6 ">
              <Image
                src={"/images/monitor.png"}
                alt="monitor"
                width={54}
                height={54}
              ></Image>
              <p className="text-[16px]">LCD Monitor</p>
            </div>
            <p className="text-[16px]">$660</p>
          </div>
          <div className="flex justify-between items-center w-full mb-4 text-[16px]">
            <p>Subtotal</p>
            <p>$1750</p>
          </div>
          <hr className="mb-4" />
          <div className="flex justify-between items-center w-full mb-4 text-[16px]">
            <p>Shipping</p>
            <p>Free</p>
          </div>
          <hr className="mb-4" />
          <div className="flex justify-between items-center w-full mb-[34px] text-[16px]">
            <p>Total</p>
            <p>$1750</p>
          </div>
          <div className="flex justify-between w-full items-center mb-[34px]">
            <div>
              <input type="radio" name="paymenttype" className="w-6 h-6" />
              <span className="inline-block align-top ml-4">Bank</span>
            </div>
            <div className="flex justify-center items-center gap-[9.4px]">
              <Image
                width={42}
                height={28}
                src={"/icons/visa.png"}
                alt="visacard"
              ></Image>
              <Image
                width={42}
                height={28}
                src={"/icons/Mastercard.png"}
                alt="mastercard"
              ></Image>
            </div>
          </div>
          <div className="flex justify-start items-center mb-[32px]">
            <input
              type="radio"
              name="paymenttype"
              className="w-6 h-6 text-blackprimary"
            />
            <span className="inline-block align-top ml-4">
              Cash on delivery
            </span>
          </div>
          <div className="flex justify-left items-stretch gap-4 w-full mb-8">
            <input
              placeholder="Coupon Code"
              className="p-4 border-[1px] rounded-[4px] border-blackprimary w-1/2"
            />
            <Button name="Apply Coupon" bgcolor="bg-redsecondary" />
          </div>
          <Button name="Place Order" bgcolor="bg-redsecondary" />
        </div>
      </div>
    </section>
  );
};

export default Page;
