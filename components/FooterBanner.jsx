import React from "react";
import Link from "next/link";

import { urlFor } from "@/lib/client";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const FooterBanner = ({
  footerBanner: {
    discount,
    largeText1,
    largeText2,
    saleTime,
    smallText,
    midText,
    product,
    buttonText,
    image,
    desc,
  },
}) => {
  const urlImage = urlFor(image).url();
  return (
    <div className="py-6 md:py-20 px-1 md:px-10 lg:px-20 bg-amber-600 rounded-[15px] relative leading-none text-white w-full mt-[120px] z-10 overflow-hidden">
      <div className="flex flex-col gap-3 md:gap-0 md:flex-row md:justify-between md:px-1 lg:px-10 xl:px-30">
        <div className="">
          <p className="m-[18px]">{discount}</p>
          <h3 className="font-black text-4xl md:text-[80px] ml-[25px]">
            {largeText1}
          </h3>
          <h3 className="font-black text-4xl md:text-[80px] ml-[25px]">
            {largeText2}
          </h3>
          <p className="m-[18px]">{saleTime}</p>
        </div>
        <div className="">
          <p className="m-1 md:m-[18px]">{smallText}</p>
          <h3 className="font-extrabold text-5xl md:text-[60px]">{midText}</h3>
          <p className="m-1 md:m-[18px]">{desc}</p>
          <Link href={`/product/${product}`}>
            <Button variant="secondary" size="lg" className="mt-4 md:m-[18px]">
              {buttonText}
            </Button>
          </Link>
        </div>

        <Image
          src={urlImage}
          alt="Product image"
          width={350}
          height={350}
          className="absolute top-[-10%] left-[25%] w-[300px] md:w-[400px] z-0 md:top-[-20%] lg:left-[30%] lg:w-[450px] lg:top-[-30%]"
        />
      </div>
    </div>
  );
};

export default FooterBanner;
