import Footer from "../../components/Footer";
import HeroBanner from "../../components/HeroBanner";

import { client } from "@/lib/client";
import { urlFor } from "@/lib/client";
import Product from "../../components/Product";
import FooterBanner from "../../components/FooterBanner";

export default async function Home() {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQquery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQquery);

  const heroBanner =
    bannerData.length > 0
      ? {
          ...bannerData[0],
          imageUrl: urlFor(bannerData[0].image).url(),
        }
      : null;

  return (
    <>
      <HeroBanner heroBanner={heroBanner} />
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
      <FooterBanner footerBanner={bannerData && bannerData[0]} />
      <Footer />
    </>
  );
}
