import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="relative py-20 px-10 sm:px-20 md:px-20 lg:px-50 xl:px-70 bg-[#dcdcdc] rounded-2xl w-full  leading-[0.9]">
      <div className=" md:flex md:flex-row md:justify-between h-[300px] md:h-auto">
        <div className="relative z-10">
          <p className="font-medium">{heroBanner.smallText}</p>
          <h3 className="text-[32px] text-amber-600 md:text-[64px] mt-1 font-medium">
            {heroBanner.midText}
          </h3>
          <h1 className="text-white text-[90px] md:text-[160px] font-bold">
            {heroBanner.largeText1}
          </h1>
          <div>
            <Link href="/product/${heroBanner.product}">
              <Button variant="outline" size="lg" className="mt-8 md:mt-16">
                {heroBanner.buttonText}
              </Button>
            </Link>
          </div>
        </div>
        <Image
          src={heroBanner.imageUrl}
          width={250}
          height={300}
          alt="headphones"
          className="absolute md:relative top-[10%] md:w-[300px] xl:w-[400px] right-[0%] z-0"
        />
      </div>
      <div className="leading-[1.3] flex flex-col">
        <h5 className="mb-1 font-bold text-md self-end text-black">
          Description
        </h5>
        <p className="text-[#5f5f5f] text-md font-light text-end">
          {heroBanner.desc}
        </p>
      </div>
    </div>
  );
};

export default HeroBanner;
