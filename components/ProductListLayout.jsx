import React from 'react'
import Product from "./Product";
import { client } from "@/lib/client";

const ProductListLayout = async () => {
    const query = '*[_type == "product"]';
    const products = await client.fetch(query);
  return (
    <>
        <div className="text-center my-8">
        <h2 className="text-3xl font-bold lg:text-5xl lg:mb-2">
          Beset Selling Products
        </h2>
        <p className="text-md font-light text-[#757575dd]">
          Speakers of many variations
        </p>
      </div>
      <div className="w-full flex flex-wrap justify-center gap-2 md:gap-4 lg:gap-8 mt-2">
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </>
  )
}

export default ProductListLayout