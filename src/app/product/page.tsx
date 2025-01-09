import Link from "next/link";
import Image from "next/image";
import Button from "../components/button";
import ProductItem from "../components/productItem";

const Page = () => {
  <h1>Under-maintenance</h1>
  // return (
  //   <section className="pt-20 max-w-[1440px] w-full mx-auto flex justify-start items-stretch flex-col lg:px-[135px] px-[20px] mb-[140px]">
  //     <p className="text-[14px] text-left mb-20 w-full text-gray-400">
  //       <span className="text-gray-400">
  //         <Link href={"/"}>Account </Link>
  //       </span>
  //       {"   "}/{"    "}
  //       <span className="text-gray-400">
  //         <Link href={"/account"}>Gaming </Link>
  //       </span>
  //       /{"    "}
  //       <span className="text-blackprimary">
  //         <Link href={"/cart"}>Havic HV G-92 Gamepad </Link>
  //       </span>
  //     </p>
  //     <div className="flex justify-between lg:flex-row flex-col items-start mb-[140px]">
  //       <div className="justify-start items-start flex-col mr-[30px] lg:flex hidden">
  //         <Image
  //           className="mb-4"
  //           src={"/images/controller1.png"}
  //           alt="controller"
  //           width={170}
  //           height={138}
  //         ></Image>
  //         <Image
  //           className="mb-4"
  //           src={"/images/controller2.png"}
  //           alt="controller"
  //           width={170}
  //           height={138}
  //         ></Image>
  //         <Image
  //           className="mb-4"
  //           src={"/images/controller3.png"}
  //           alt="controller"
  //           width={170}
  //           height={138}
  //         ></Image>
  //         <Image
  //           className="mb-4"
  //           src={"/images/controller4.png"}
  //           alt="controller"
  //           width={170}
  //           height={138}
  //         ></Image>
  //       </div>
  //       <div className="mr-[70px]">
  //         <Image
  //           className="mb-4"
  //           src={"/images/maincontroller.png"}
  //           alt="controller"
  //           width={500}
  //           height={600}
  //         ></Image>
  //       </div>
  //       <div className="lg:w-[400px] w-[370px]">
  //         <p className="font-interbold text-[24px] font-semibold">
  //           Havic HV G-92 Gamepad
  //         </p>
  //         <div
  //           className={`flex justify-left items-center gap-[6px] mt-[16px] mb-[16px]`}
  //         >
  //           {Array.from({ length: 4 }, (_, i) => {
  //             return (
  //               <Image
  //                 key={i}
  //                 src={"/icons/star.png"}
  //                 width={20}
  //                 height={20}
  //                 alt="star"
  //                 className="rounded-[1.4px]"
  //               ></Image>
  //             );
  //           })}
  //           {Array.from({ length: Math.ceil(5 - 4) }, (_, i) => {
  //             if (Number.isInteger(4)) {
  //               return (
  //                 <Image
  //                   key={i}
  //                   src={"/icons/graystar.png"}
  //                   width={20}
  //                   height={20}
  //                   alt="star"
  //                   className="rounded-[1.4px]"
  //                 ></Image>
  //               );
  //             } else {
  //               return (
  //                 <Image
  //                   key={i}
  //                   src={"/icons/halfstar.png"}
  //                   width={20}
  //                   height={20}
  //                   alt="star"
  //                   className="rounded-[1.4px]"
  //                 ></Image>
  //               );
  //             }
  //           })}

  //           <span className="text-gray-400 ml-[8px] font-poppinssemibold">
  //             ({150} reviews)
  //           </span>
  //           <span className="text-greensecondary ml-[8px] font-poppinssemibold">
  //             In Stock
  //           </span>
  //         </div>
  //         <div className="mb-[16px] text-[24px] font-interbold font-normal">
  //           $192.00
  //         </div>
  //         <p className="text-[14px] mb-[24px]">
  //           PlayStation 5 Controller Skin High quality vinyl with air channel
  //           adhesive for easy bubble free install & mess free removal Pressure
  //           sensitive.
  //         </p>
  //         <hr className="mb-[24px]" />
  //         <div className="flex justify-start items-center gap-6 mb-6">
  //           <p className="text-[20px]">Colors:</p>
  //           <div className="flex justify-center items-center gap-2">
  //             <div
  //               className={`bg-[#A0BCE0] w-[20px] h-[20px] rounded-full p-2`}
  //             ></div>
  //             <div className="w-[20px] h-[20px] p-2 bg-redsecondary rounded-full"></div>
  //           </div>
  //         </div>
  //         <div className="flex justify-left items-center gap-4 mb-6">
  //           <p className="text-[20px]">Size:</p>
  //           <div className="flex justify-center items-center gap-4">
  //             <p className="p-2 text-[14px] border-[1px] border-blackprimary rounded-[4px] w-9">
  //               XS
  //             </p>
  //             <p className="p-2 text-[14px] border-[1px] border-blackprimary rounded-[4px] w-9">
  //               S
  //             </p>
  //             <p className="p-2 text-[14px] border-[1px] border-blackprimary rounded-[4px] w-9">
  //               M
  //             </p>
  //             <p className="p-2 text-[14px] border-[1px] border-blackprimary rounded-[4px] w-9">
  //               L
  //             </p>
  //             <p className="p-2 text-[14px] border-[1px] border-blackprimary rounded-[4px] w-9">
  //               XL
  //             </p>
  //           </div>
  //         </div>
  //         <div className="flex justify-left items-center gap-4 mb-10">
  //           <div className="flex justify-start items-center">
  //             <div className="p-2 text-[14px] border-[1px] rounded-r-none border-gray-400 rounded-[4px] w-[40px] h-[44px] flex justify-center items-center">
  //               <Image
  //                 src={"/icons/minus.png"}
  //                 width={24}
  //                 height={24}
  //                 alt="minus"
  //               ></Image>
  //             </div>
  //             <input
  //               type="text"
  //               value={2}
  //               className="w-20 h-[44px] inline-block border-[1px] border-gray-400 text-center text-[20px] font-poppinsmedium"
  //             />
  //             <div className="p-2 text-[14px] border-[1px] border-redsecondary bg-redsecondary rounded-[4px] rounded-l-none w-[40px] h-[44px] flex justify-center items-center">
  //               <Image
  //                 src={"/icons/plus.png"}
  //                 width={24}
  //                 height={24}
  //                 alt="minus"
  //               ></Image>
  //             </div>
  //           </div>

  //           <div>
  //             <Button name="Buy Now" bgcolor="bg-redsecondary"></Button>
  //           </div>
  //           <div className="p-1 text-[14px] border-[1px] border-blackprimary rounded-[4px] w-10 h-10">
  //             <Image
  //               src={"/icons/wish.png"}
  //               width={32}
  //               height={32}
  //               alt="wishlist"
  //             ></Image>
  //           </div>
  //         </div>
  //         <div className="pt-6 pb-6 rounded-[4px] pl-4 pr-8 border-[1px] border-blackprimary">
  //           <div className="flex justify-left items-center gap-4 pb-4">
  //             <Image
  //               src={"/icons/delivery.png"}
  //               width={40}
  //               height={40}
  //               alt="delivery"
  //             ></Image>
  //             <div>
  //               <p className="text-[16px] font-poppinsmedium">Free Delivery</p>
  //               <p className="underline font-poppinsmedium text-[12px]">
  //                 Enter your postal code for Delivery Availability
  //               </p>
  //             </div>
  //           </div>
  //           <hr className="pb-4" />
  //           <div className="flex justify-left items-center gap-4 pb-4">
  //             <Image
  //               src={"/icons/return.png"}
  //               width={40}
  //               height={40}
  //               alt="delivery"
  //             ></Image>
  //             <div>
  //               <p className="text-[16px] font-poppinsmedium">
  //                 Return Delivery
  //               </p>
  //               <p className="underline font-poppinsmedium text-[12px]">
  //                 Free 30 Days Delivery Returns. Details
  //               </p>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //     <div className="flex justify-start items-center gap-[10px] mb-[60px]">
  //       <div className="w-[20px] h-[40px] bg-redsecondary"></div>
  //       <div className="text-redsecondary font-poppinssemibold text-[16px]">
  //         Related Item
  //       </div>
  //     </div>
  //     <div className="grid md:grid-cols-4 grid-cols-1 items-center justify-center gap-[30px]">
  //       <ProductItem
  //         image={"/images/chocolate.png"}
  //         pname={"Breed Dry Dog Food"}
  //         pricebefore={"$160"}
  //         priceafter={"$100"}
  //         ratings={3}
  //         totalrating={35}
  //         discount={0}
  //         inline={false}
  //       />
  //       <ProductItem
  //         image={"/images/camera.png"}
  //         pname={"CANON EOS DSLR Camera"}
  //         pricebefore={"$1160"}
  //         priceafter={"$360"}
  //         ratings={4}
  //         totalrating={95}
  //         discount={0}
  //         inline={false}
  //       />
  //       <ProductItem
  //         image={"/images/laptop.png"}
  //         pname={"ASUS FHD Gaming Laptop"}
  //         pricebefore={"$400"}
  //         priceafter={"$700"}
  //         ratings={5}
  //         totalrating={325}
  //         discount={0}
  //         inline={false}
  //       />{" "}
  //       <ProductItem
  //         image={"/images/curology.png"}
  //         pname={"Curology Product Set "}
  //         pricebefore={"$170"}
  //         priceafter={"$160"}
  //         ratings={4}
  //         totalrating={145}
  //         discount={0}
  //         inline={false}
  //       />{" "}
  //     </div>
  //   </section>
  // );
};

export default Page;
