import Link from "next/link";
import Header from "./components/header";
import HeroSection from "./components/hero";
import SalesSection from "./components/sales";
import AllCategory from "./components/allcategory";
import BestSales from "./components/best_sales";
import BigBanner from "./components/bigBanner";
import MainProducts from "./components/main_products";
import NewArrival from "./components/newArrival";
import Services from "./components/services";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SalesSection />
      <hr className="mb-[60px] w-full mx-auto" />
      <AllCategory />
      <hr className="mb-[70px] w-full mx-auto" />
      <BestSales />
      <BigBanner />
      <MainProducts />
      <NewArrival />
      <Services />
    </>
  );
}
