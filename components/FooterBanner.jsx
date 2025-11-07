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
    <div className="py-[100px] px-10 bg-amber-600 rounded-[15px] relative h-[400px] leading-none text-white w-full mt-[120px]">
      <div className="flex justify-between">
        <div>
          <p className="m-[18px]">{discount}</p>
          <h3 className="font-black text-[80px] ml-[25px]">{largeText1}</h3>
          <h3 className="font-black text-[80px] ml-[25px]">{largeText2}</h3>
          <p className="m-[18px]">{saleTime}</p>
        </div>
        <div>
          <p className="m-[18px]">{smallText}</p>
          <h3 className="font-extrabold text-[60px]">{midText}</h3>
          <p className="m-[18px]">{desc}</p>
          <Link href={`/product/${product}`}>
            <Button variant="secondary">{buttonText}</Button>
          </Link>
        </div>

        <Image
          src={urlImage}
          alt="Product image"
          width={350}
          height={350}
          className="absolute top-[0%] left-[25%]"
        />
      </div>
    </div>
  );
};

export default FooterBanner;
