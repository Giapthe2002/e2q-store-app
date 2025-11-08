import Footer from "../../components/Footer";
import HeroBanner from "../../components/HeroBanner";

import { client } from "@/lib/client";
import { urlFor } from "@/lib/client";

import FooterBanner from "../../components/FooterBanner";
import ProductListLayout from "../../components/ProductListLayout";

export default async function Home() {
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
      <ProductListLayout />
      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </>
  );
}
