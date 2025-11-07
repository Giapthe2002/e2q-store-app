import React from "react";
import Link from "next/link";

import { urlFor } from "@/lib/client";
import Image from "next/image";

const Product = ({ product: { image, name, slug, price } }) => {
  const imageUrl = image?.[0] ? urlFor(image[0]).url() : "";
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className="cursor-pointer scale-100 transition-transform duration-100 ease-in-out">
          <Image
            src={imageUrl}
            width={250}
            height={250}
            alt="Product image"
            className="bg-[#ebebeb] rounded-[15px] scale-100 transition-transform duration-500 ease-in-out w-[250px] h-[250px] object-contain hover:scale-105"
          />
          <p className="font-medium mt-1 text-[#424242dd]">{name}</p>
          <p className="font-bold mt-1.5 text-black">{price}đ</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
