import Link from "next/link";
import Image from "next/image";
import Button from "../components/button";
import WishItem from "./wish_item";

const Page = () => {
  return (
    <section className="max-w-[1440px] w-full mx-auto flex justify-start items-center flex-col lg:px-[135px] px-[30px] pt-[80px] mb-[80px]">
      <div className="w-full flex justify-between items-center mb-[60px]">
        <p className="text-[20px]">Wishlist (4)</p>
        <Button name="Move All To Bag" bgcolor="bg-white" />
      </div>
      <div className="grid lg:grid-cols-4 grid-cols-1 gap-[30px] mb-[28px]">
        <WishItem
          image={"/images/bag.png"}
          pname={"Gucci duffle bag"}
          pricebefore={"$1160"}
          priceafter={"$960"}
          ratings={5}
          totalrating={65}
          discount={0}
          inline={false}
          isNew={false}
          deleteitoption={true}
          israting={false}
        />

        <WishItem
          image={"/images/cooler.png"}
          pname={"RGB liquid CPU Cooler"}
          pricebefore={"$0"}
          priceafter={"$1960"}
          ratings={5}
          totalrating={65}
          discount={0}
          inline={false}
          isNew={false}
          deleteitoption={true}
          israting={false}
        />
        <WishItem
          image={"/images/controller.png"}
          pname={"GP11 Shooter USB Gamepad"}
          pricebefore={"$0"}
          priceafter={"$550"}
          ratings={5}
          totalrating={65}
          discount={0}
          inline={false}
          isNew={false}
          deleteitoption={true}
          israting={false}
        />
        <WishItem
          image={"/images/jacket2.png"}
          pname={"Quilted Satin Jacket"}
          pricebefore={"$0"}
          priceafter={"$750"}
          ratings={5}
          totalrating={65}
          discount={0}
          inline={false}
          isNew={false}
          deleteitoption={true}
          israting={false}
        />
      </div>
      <div className="w-full flex justify-between items-center mb-[68px]">
        <div className="flex justify-start items-center gap-[10px]">
          <div className="w-[20px] h-[40px] bg-redsecondary rounded-[4px]"></div>
          <div className="text-blackprimary font-poppinssemibold text-[20px]">
            Just For You
          </div>
        </div>
        <div>
          <Button name="See All" bgcolor="bg-white" />
        </div>
      </div>
      <div className="grid lg:grid-cols-4 grid-cols-1 gap-[30px]">
        <WishItem
          image={"/images/laptop.png"}
          pname={"ASUS FHD Gaming Laptop"}
          pricebefore={"$1160"}
          priceafter={"$960"}
          ratings={5}
          totalrating={65}
          discount={35}
          inline={false}
          isNew={false}
          deleteitoption={false}
          israting={true}
        />

        <WishItem
          image={"/images/monitor.png"}
          pname={"IPS LCD Gaming Monitor"}
          pricebefore={"$0"}
          priceafter={"$1160"}
          ratings={5}
          totalrating={65}
          discount={0}
          inline={false}
          isNew={false}
          deleteitoption={false}
          israting={true}
        />
        <WishItem
          image={"/images/itemgamepad.png"}
          pname={"GP11 Shooter USB Gamepad"}
          pricebefore={"$0"}
          priceafter={"$560"}
          ratings={5}
          totalrating={65}
          discount={0}
          inline={false}
          isNew={true}
          deleteitoption={false}
          israting={true}
        />
        <WishItem
          image={"/images/keyboard.png"}
          pname={"AK-900 Wired Keyboard"}
          pricebefore={"$0"}
          priceafter={"$200"}
          ratings={5}
          totalrating={65}
          discount={0}
          inline={false}
          isNew={false}
          deleteitoption={false}
          israting={true}
        />
      </div>
    </section>
  );
};

export default Page;
