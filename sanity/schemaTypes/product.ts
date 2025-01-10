import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'price_before_discount',
      title: 'Price before discount in $',
      type: 'string',
    }),
    defineField({
      name: 'price_after_discount',
      title: 'Price after discount in $',
      type: 'string',
    }),
    defineField({
      name: 'ratings',
      title: 'Ratings for the product',
      type: 'string',
    }),

    defineField({
      name: 'total_ratings_given',
      title: 'Total people giving ratings',
      type: 'string',
    }),
    
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        }
      ]
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    
  ],

  preview: {
    select: {
      title: 'title',
      product: 'title.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {product} = selection
      return {...selection, subtitle: product && `by ${product}`}
    },
  },
})
