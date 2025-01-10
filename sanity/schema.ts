import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemaTypes/blockContent'
import category from './schemaTypes/category'
import product from './schemaTypes/product'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, category, blockContent],
}
