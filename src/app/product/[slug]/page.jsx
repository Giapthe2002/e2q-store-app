"use client";

import React, { useEffect, useState } from "react";
import { urlFor, client } from "@/lib/client";
import Image from "next/image";
import { useParams } from "next/navigation";

const ProductDails = () => {
  const params = useParams();
  const slug = params.slug;

  const [product, setProduct] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    if (!slug) return;

    const fetchProduct = async () => {
      const query = `*[_type == "product" && slug.current == $slug][0]`;
      const data = await client.fetch(query, { slug });
      setProduct(data);

      if (data?.image?.length > 0) {
        setImageUrl(urlFor(data.image[0]).url());
      }
    };

    fetchProduct();
  }, [slug]);

  if (!product) return <div>Loading product...</div>;

  return (
    <div>
      <div className="">
        <div>
          <div className="">
            <Image
              src={imageUrl}
              alt="Image product"
              width={250}
              height={250}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDails;
