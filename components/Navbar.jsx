"use client";

import React from "react";
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
  return <div className="flex justify-between font-semibold my-10 md:my-15 mx-4 md:mx-10 relative">
    <p className="text-xl text-gray-800">
      <Link href="/">E2QShop</Link>
    </p>
    <button className="text-gray-800 relative transition-transform duration-400 ease-in-out border-none bg-transparent hover:scale-110" onClick={() => {}}>
      <AiOutlineShoppingCart size={28} />
      <span className="absolute -right-2 -top-1 text-[12px] text-[#eee] bg-[#f02d34] w-[18px] h-[18px] rounded-full text-center font-semibold">1</span>
    </button>
  </div>;
};

export default Navbar;
