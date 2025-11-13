"use client";

import React, { useEffect, useState } from "react";
import { urlFor, client } from "@/lib/client";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
  AiOutlineArrowLeft,
} from "react-icons/ai";
import { Button } from "@/components/ui/button";
import Product from "../../../../components/Product";
import { useStateContext } from "../../../../context/StateContext";

const ProductDails = () => {
  const params = useParams();
  const slug = params.slug;

  const router = useRouter();

  const [product, setProduct] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [allProducts, setAllProducts] = useState([]);

  const [index, setIndex] = useState(0);

  const { incQty, decQty, qty, onAdd } = useStateContext();

  useEffect(() => {
    console.log("Slug:", slug);
    if (!slug) return;

    const fetchProduct = async () => {
      const query = `*[_type == "product" && slug.current == $slug][0]`;
      const data = await client.fetch(query, { slug });

      const queryAll = `*[_type == "product"]`;
      const allProducts = await client.fetch(queryAll);
      console.log("list all products:", allProducts);

      setProduct(data);
      setAllProducts(allProducts);

      if (data?.image?.length > 0) {
        setImageUrl(urlFor(data.image[index]).url());
      }
    };

    fetchProduct();
  }, [slug, index]);

  if (!product) return <div>Loading product...</div>;

  const { name, details, price, image } = product;

  const formattedPrice = price.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });

  return (
    <div>
      <div className="m-6">
        <Button
          variant="ghost"
          onClick={() => router.push("/")}
          className="hover:bg-gray-100"
        >
          <AiOutlineArrowLeft /> Back to Home
        </Button>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-20 m-10 mt-15 text-[#324d67]">
        <div>
          <div className="h-[300px] w-[300px] overflow-hidden object-cover items-center flex justify-center border">
            <Image
              src={imageUrl}
              alt="Image product"
              width={250}
              height={250}
              className="scale-110"
            />
          </div>
          <div className="flex gap-2.5 mt-5">
            {image?.map((img, i) => (
              <Image
                key={i}
                src={urlFor(img).url()}
                alt="Product image"
                width={100}
                height={200}
                className={`${i === index ? "border-2 border-red-500 cursor-pointer" : "cursor-pointer"} w-24 h-24 object-cover transition-transform duration-200`}
                onMouseEnter={() => setIndex(i)}
              />
            ))}
          </div>
        </div>
        <div className="">
          <h1 className="text-2xl font-semibold">{name}</h1>
          <div className="text-[#f02d34] mt-2.5 flex gap-1 items-center">
            <div className="flex flex-row">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p className="text-[#324d67] mt-0">(20)</p>
          </div>
          <h4 className="mt-2.5 font-bold">Details: </h4>
          <p className="">{details}</p>
          <p className="font-bold text-2xl mt-6 text-[#f02d34]">
            {formattedPrice}
          </p>
          <div className="flex gap-5 mt-2.5 items-center">
            <h3 className="font-bold">Quantity:</h3>
            <div className="border-2 cursor-pointer flex flex-row items-center">
              <span className=" py-1.5 px-3 border-r-2" onClick={decQty}>
                <AiOutlineMinus />
              </span>
              <span className=" py-1.5 px-3">{qty}</span>
              <span className=" py-1.5 px-3 border-l-2" onClick={incQty}>
                <AiOutlinePlus />
              </span>
            </div>
          </div>
          <div className="mt-8 flex flex-col md:flex-row gap-4 md:gap-10">
            <Button
              variant="added"
              size="added"
              className="flex-1 py-4"
              onClick={() => onAdd(product, qty)}
            >
              Add to Cart
            </Button>
            <Button variant="buy" size="added" className="flex-1 py-4">
              Buy Now
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-30">
        <h2 className="text-center m-10 text-[#324d67] text-xl font-medium">
          You may also like
        </h2>
        <div className="relative w-full h-100 overflow-x-hidden">
          <div className="flex flex-row justify-center gap-4 mt-5 track">
            {allProducts.map((item, index) => (
              <Product key={index} product={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDails;
