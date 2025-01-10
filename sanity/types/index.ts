import { Image, PortableTextBlock } from 'sanity';
import { Slug } from 'sanity';

export interface Product {
  _id: string;
  title: string;
  slug: Slug;
  price_before_discount: string;
  price_after_discount: string;
  ratings:string;
  total_ratings_given: string,
  mainImage: Image;
  categories: string[];
  publishedAt: string[];
}
