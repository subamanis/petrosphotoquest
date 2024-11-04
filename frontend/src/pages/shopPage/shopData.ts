import { Product } from '../../types/types.ts';

export const products: Product[] = [
  {
    id: 'tokyo-nights-zine',
    title: 'Tokyo Nights',
    description: 'A 64-page photographic journey through Tokyo\'s neon-lit streets.',
    price: 30,
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
      'All prints include a 3-5cm white margin around the photo',
      'Margin width can be adjusted upon request',
      'Ships in protective packaging'
    ],
    frameDetails: {
      description: 'Professional gallery frame with glass protection',
      width: '2cm',
      color: 'Black'
    },
    sizes: [
      {
        name: 'Small',
        dimensions: '20 × 25 cm',
        basePrice: 70,
        framedPrice: 120
      },
      {
        name: 'Medium',
        dimensions: '30 × 40 cm',
        basePrice: 100,
        framedPrice: 170
      },
      {
        name: 'Large',
        dimensions: '50 × 60 cm',
        basePrice: 170,
        framedPrice: 270
      }
    ],
    inStock: true
  },
  {
    id: 'sakura-dreams-wallpaper',
    title: 'Sakura Dreams',
    description: 'High-resolution digital wallpaper pack featuring cherry blossoms.',
    price: 12,
    type: 'wallpaper',
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