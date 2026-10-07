// Product catalog data.
//
// This file is intentionally data-driven: to add a product, add an entry
// below. To add a new product line entirely (e.g. once pickles or another
// category launches), add its name to `categories` and start tagging
// products with it — no other code changes are required.

export type Category = string

export type Product = {
  id: string
  name: string
  category: Category
  image: string
  hoverImage?: string
  description: string
  /** Show in the default "Featured" view. */
  featured?: boolean
  /** All fields below are optional and flexible — only show what applies. */
  origin?: string
  packaging?: string
  moq?: string
  info?: string
}

// Live categories, matching real product lines today.
// Add e.g. 'Pickles' here once real pickle products/photos are available.
export const categories: Category[] = ['Dates']

export const products: Product[] = [
  {
    id: 'mazafati',
    name: 'Mazafati Dates',
    category: 'Dates',
    featured: true,
    image: '/images/products/mazafati-box.png',
    hoverImage: '/images/products/mazafati-box-hover.png',
    description:
      'Soft, jet-dark and caramel-sweet — the variety most associated with premium Persian dates.',
    origin: 'Kerman province',
  },
  {
    id: 'fresh-golden',
    name: 'Fresh Golden Dates',
    category: 'Dates',
    featured: true,
    image: '/images/products/fresh-golden.png',
    hoverImage: '/images/products/fresh-golden-hover.png',
    description: 'Fresh rotab dates with a golden hue, packed for same-season delivery.',
  },
  {
    id: 'mixed',
    name: 'Mixed Dates',
    category: 'Dates',
    featured: true,
    image: '/images/products/mixed-dates.png',
    hoverImage: '/images/products/mixed-dates-hover.png',
    description: 'A curated selection spanning Piarom, Zahedi and Mazafati in one box.',
    packaging: 'Assorted gift box',
  },
  {
    id: 'piarom',
    name: 'Piarom Dates',
    category: 'Dates',
    featured: true,
    image: '/images/products/piarom.png',
    hoverImage: '/images/products/piarom-hover.png',
    description: 'Long, dark and semi-dry, with an unmistakable deep sweetness.',
    origin: 'Hormozgan province',
  },
  {
    id: 'zahedi',
    name: 'Zahedi Dates',
    category: 'Dates',
    image: '/images/products/zahedi.png',
    hoverImage: '/images/products/zahedi-hover.png',
    description: 'Golden and firm with a mild sweetness — a versatile, everyday date.',
  },
  {
    id: 'rabbi',
    name: 'Rabbi Dates',
    category: 'Dates',
    image: '/images/products/rabbi.png',
    hoverImage: '/images/products/rabbi-hover.png',
    description: 'Semi-dry and thin-skinned, richly sweet, with excellent shelf life.',
  },
  {
    id: 'kabkab',
    name: 'Kabkab Dates',
    category: 'Dates',
    image: '/images/products/kabkab.png',
    hoverImage: '/images/products/kabkab-hover.png',
    description: 'Full-bodied and juicy — a favourite for table grade as well as processing.',
  },
  {
    id: 'shahani',
    name: 'Shahani Dates',
    category: 'Dates',
    image: '/images/products/shahani.png',
    hoverImage: '/images/products/shahani-hover.png',
    description: 'Elongated and semi-soft with a honeyed core.',
    origin: 'Fars province',
  },
]
