"use client";

import React from "react";
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";

import Cart from "./Cart";
import { useStateContext } from "../context/StateContext";

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  return (
    <div className="flex justify-between font-semibold my-8 md:my-12 mx-4 md:mx-10 relative">
      <p className="text-xl text-gray-800">
        <Link href="/">E2QShop</Link>
      </p>
      <button
        className="text-gray-800 relative transition-transform duration-400 ease-in-out border-none bg-transparent hover:scale-110"
        onClick={() => setShowCart(true)}
      >
        <AiOutlineShoppingCart size={28} />
        <span className="absolute -right-2 -top-1 text-[12px] text-[#eee] bg-[#f02d34] w-[18px] h-[18px] rounded-full text-center font-semibold">
          {totalQuantities}
        </span>
      </button>

      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;
