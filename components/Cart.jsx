import React, { useRef } from "react";
import Link from "next/link";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineLeft,
  AiOutlineShopping,
  AiOutlineDelete,
} from "react-icons/ai";
import toast from "react-hot-toast";

import { useStateContext } from "../context/StateContext";
import { urlFor } from "@/lib/client";
import Image from "next/image";

const Cart = () => {
  const cartRef = useRef();
  const {
    totalPrice,
    totalQuantities,
    cartItems,
    setShowCart,
    onRemove,
    toggleCartItemQquantity,
  } = useStateContext();

  const formatPrice = (price) => {
    return price.toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });
  };
  return (
    <div
      className="fixed inset-0 bg-black/50 z-50 transition-all duration-500 ease-in-out"
      ref={cartRef}
    >
      <div className="h-full w-full sm:w-[600px] bg-white float-right p-5 sm:p-10 relative overflow-y-auto">
        <button
          type="button"
          className="flex items-center text-lg sm:text-[18px] font-medium cursor-pointer gap-1 border-none bg-transparent mb-5"
          onClick={() => setShowCart(false)}
        >
          <AiOutlineLeft size={20} />
          <span className="ml-2">Your Cart</span>
          <span className="ml-2 text-[#f02d34]">({totalQuantities} items)</span>
        </button>

        {cartItems.length < 1 && (
          <div className="flex flex-col items-center justify-center mt-10 gap-5">
            <AiOutlineShopping size={100} className="sm:size-[150]" />
            <h3 className="text-center text-lg sm:text-xl">
              Your shopping bag is empty
            </h3>
            <Link href="/">
              <button
                type="button"
                onClick={() => setShowCart(false)}
                className="mt-2 px-4 py-2 bg-[#f02d34] text-white rounded-md"
              >
                Continue Shopping
              </button>
            </Link>
          </div>
        )}

        <div className="flex flex-wrap gap-4 mt-5 w-full">
          {cartItems.length >= 1 &&
            cartItems.map((item) => (
              <div
                className="flex gap-8 p-5 w-full items-center"
                key={item._id}
              >
                <Image
                  src={urlFor(item?.image[0]).url()}
                  className="w-[100px] h-[100px] rounded-[15px] object-cover bg-[#ebebeb]"
                  alt="Product image"
                  height={100}
                  width={100}
                />
                <div className="flex flex-1 justify-between">
                  <div className="h-full flex flex-col justify-between gap-1">
                    <div className="flex flex-col">
                      <h5 className="text-xl font-semibold">{item.name}</h5>
                      <h4 className="text-gray-600">
                        {formatPrice(item.price)}
                      </h4>
                    </div>
                    <div className="border-2 cursor-pointer flex flex-row items-center w-max">
                      <span
                        className=" py-1.5 px-3 border-r-2"
                        onClick={() => toggleCartItemQquantity(item._id, "dec")}
                      >
                        <AiOutlineMinus />
                      </span>
                      <span className=" py-1.5 px-3">{item.quantity}</span>
                      <span
                        className=" py-1.5 px-3 border-l-2"
                        onClick={() => toggleCartItemQquantity(item._id, "inc")}
                      >
                        <AiOutlinePlus />
                      </span>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="text-[24px] text-gray-600 cursor-pointer bg-transparent border-0"
                    onClick={() => onRemove(item)}
                  >
                    <AiOutlineDelete size={30} />
                  </button>
                </div>
              </div>
            ))}
        </div>
        {cartItems.length >= 1 && (
          <div className="absolute bottom-0 left-0 w-full bg-white shadow-md border-t border-gray-200 py-4 px-8">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-gray-700">Subtotal:</h3>
              <h3 className="text-xl font-bold text-red-600">
                {formatPrice(totalPrice)}
              </h3>
            </div>
            <div className="mt-6">
              <button
                type="button"
                className="w-full bg-red-600 hover:bg-red-700 text-white text-lg font-semibold py-3 rounded-xl transition-all duration-200"
                onClick=""
              >
                Pay now
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
