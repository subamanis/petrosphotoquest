import { Product } from '../../types/types.ts';

export const products: Product[] = [
  {
    id: 'tokyo-nights-zine',
    title: 'Tokyo Nights',
    description: 'A 64-page photographic journey through Tokyo\'s neon-lit streets.',
    price: 35,
    type: 'zine',
    images: [
      'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&q=80'
    ],
    details: [
      '64 pages',
      'Premium matte paper',
      'Hardcover binding',
      'Limited edition of 100',
      'Signed by the photographer'
    ],
    inStock: true,
    featured: true
  },
  {
    id: 'urban-minimalism-print',
    title: 'Urban Minimalism',
    description: 'High-quality fine art print on museum-grade paper.',
    type: 'print',
    images: [
      'https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&q=80'
    ],
    details: [
      'Museum-grade archival paper',
      'Signed and numbered',
      'Certificate of authenticity included',
      'Ships in protective tube'
    ],
    sizes: [
      {
        name: 'Small',
        dimensions: '8" × 10"',
        price: 80
      },
      {
        name: 'Medium',
        dimensions: '12" × 16"',
        price: 120
      },
      {
        name: 'Large',
        dimensions: '20" × 24"',
        price: 200
      }
    ],
    inStock: true
  },
  {
    id: 'sakura-dreams-wallpaper',
    title: 'Sakura Dreams',
    description: 'High-resolution digital wallpaper pack featuring cherry blossoms.',
    price: 15,
    type: 'wallpaperBundle',
    images: [
      'https://images.unsplash.com/photo-1522383225653-ed111181a951?auto=format&fit=crop&q=80'
    ],
    details: [
      '4K resolution (3840x2160)',
      'Pack of 5 unique wallpapers',
      'Optimized for both desktop and mobile',
      'Instant digital download',
      'Personal use license'
    ],
    inStock: true
  }
];