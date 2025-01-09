import Link from "next/link";
import React from "react";

const Page = () => {
  return <div className="max-w-[1400px] mx-auto h-40 w-full flex justify-center flex-col items-center">
    <h1 className="text-black">Under-maintenance</h1>
    <Link href="/" className="underline">Home</Link>
  </div>
};

export default Page;
