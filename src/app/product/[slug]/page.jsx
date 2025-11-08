import React from 'react'
import { urlFor, client } from '@/lib/client'
import Image from 'next/image'

const ProductDails = async ({params: {slug}}) => {
  const query = `*[_type == "product" && slug.current == "${slug}"][0]`;
  const productsQuery = `*[_type == "product"]`;

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  // const urlImage = urlFor

  return (
    
    <div>
      {console.log(slug)}
        <div className=''>
            <div>
              <h1></h1>
                <div className=''>
                    <Image src="" alt=''/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductDails;