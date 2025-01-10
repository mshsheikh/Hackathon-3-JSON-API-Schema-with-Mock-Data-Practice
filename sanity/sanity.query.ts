// sanity/sanity.query.ts

import { groq } from 'next-sanity';
import client, { staticClientItems } from './sanity.client';

export async function getProduct() {
  return await staticClientItems.fetch(
    groq`*[_type == "product"]{
       _id,
      categories[] -> {
        title
      },
       price_before_discount,
       price_after_discount,
       ratings,
      slug,
      publishedAt,
      total_ratings_given,
      mainImage,
      title,
    }`
  );
}
