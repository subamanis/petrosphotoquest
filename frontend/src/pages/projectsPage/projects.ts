import { PhotoProject } from '../../../../shared/types';

export const projects: PhotoProject[] = [
  {
    id: 'urban-nights',
    title: 'Urban Nights',
    location: 'Tokyo, Japan',
    date: 'December 2023',
    description: 'A nocturnal exploration of Tokyo\'s neon-lit streets and hidden alleyways, capturing the city\'s vibrant nightlife and modern urban culture.',
    featuredImages: [
      '/images/test/img1.jpg',
      '/images/test/img2.jpg',
      '/images/test/img3.jpg',
      '/images/test/img4.jpg'
    ],
    allImages: [
      { 
        url: '/images/test/img1.jpg', 
        caption: 'Shibuya Crossing at Blue Hour',
        availableAsPrint: true,
        printProductId: 'tokyo-nights-print-1'
      },
      { 
        url: '/images/test/img2.jpg', 
        caption: 'Neon Signs in Shinjuku',
        availableAsPrint: true,
        printProductId: 'tokyo-nights-print-2'
      },
      { url: '/images/test/img3.jpg', caption: 'Street Food Vendors' },
      { url: '/images/test/img4.jpg', caption: 'City Lights Reflection' }
    ],
    relatedProducts: [
      {
        type: 'zine',
        productId: 'tokyo-nights-zine',
      },
      {
        type: 'wallpaperCollection',
        productId: 'tokyo-nights-wallpapers',
      }
    ]
  },
  {
    id: 'mountain-solitude',
    title: 'Mountain Solitude',
    location: 'Swiss Alps',
    date: 'September 2023',
    description: 'A visual journey through the serene landscapes of the Swiss Alps, documenting the raw beauty of nature and its peaceful solitude.',
    featuredImages: [
      '/images/test/img5.jpg',
      '/images/test/img6.jpg',
      '/images/test/img7.jpg',
      '/images/test/img8.jpg'
    ],
    allImages: [
      { 
        url: '/images/test/img5.jpg', 
        caption: 'Dawn at Matterhorn',
        availableAsPrint: true,
        printProductId: 'alps-print-1'
      },
      { url: '/images/test/img6.jpg', caption: 'Alpine Lake Reflection' },
      { url: '/images/test/img7.jpg', caption: 'Mountain Peaks' },
      { url: '/images/test/img8.jpg', caption: 'Foggy Valley' }
    ]
  },
  {
    id: 'mountain-solitude2',
    title: 'Mountain Solitude',
    location: 'Swiss Alps',
    date: 'September 2023',
    description: 'A visual journey through the serene landscapes of the Swiss Alps, documenting the raw beauty of nature and its peaceful solitude.',
    featuredImages: [
      '/images/test/img9.jpg',
      '/images/test/img11.jpg',
      '/images/test/img10.jpg',
      '/images/test/img12.jpg'
    ],
    allImages: [
      { url: '/images/test/img9.jpg', caption: 'Dawn at Matterhorn' },
      { url: '/images/test/img11.jpg', caption: 'Alpine Lake Reflection' },
      { url: '/images/test/img10.jpg', caption: 'Mountain Peaks' },
      { url: '/images/test/img12.jpg', caption: 'Foggy Valley' }
    ]
  },
  {
    id: 'mountain-solitude3',
    title: 'Mountain Solitude',
    location: 'Swiss Alps',
    date: 'September 2023',
    description: 'A visual journey through the serene landscapes of the Swiss Alps, documenting the raw beauty of nature and its peaceful solitude.',
    featuredImages: [
      '/images/test/img1.jpg',
      '/images/test/img2.jpg',
      '/images/test/img3.jpg',
      '/images/test/img4.jpg'
    ],
    allImages: [
      { url: '/images/test/img1.jpg', caption: 'Dawn at Matterhorn' },
      { url: '/images/test/img2.jpg', caption: 'Alpine Lake Reflection' },
      { url: '/images/test/img3.jpg', caption: 'Mountain Peaks' },
      { url: '/images/test/img4.jpg', caption: 'Foggy Valley' }
    ]
  },
  {
    id: 'mountain-solitude4',
    title: 'Mountain Solitude',
    location: 'Swiss Alps',
    date: 'September 2023',
    description: 'A visual journey through the serene landscapes of the Swiss Alps, documenting the raw beauty of nature and its peaceful solitude.',
    featuredImages: [
      '/images/test/img5.jpg',
      '/images/test/img6.jpg',
      '/images/test/img7.jpg',
      '/images/test/img8.jpg'
    ],
    allImages: [
      { url: '/images/test/img5.jpg', caption: 'Dawn at Matterhorn' },
      { url: '/images/test/img6.jpg', caption: 'Alpine Lake Reflection' },
      { url: '/images/test/img7.jpg', caption: 'Mountain Peaks' },
      { url: '/images/test/img8.jpg', caption: 'Foggy Valley' }
    ]
  },
  {
    id: 'mountain-solitude5',
    title: 'Mountain Solitude',
    location: 'Swiss Alps',
    date: 'September 2023',
    description: 'A visual journey through the serene landscapes of the Swiss Alps, documenting the raw beauty of nature and its peaceful solitude.',
    featuredImages: [
      '/images/test/img9.jpg',
      '/images/test/img10.jpg',
      '/images/test/img11.jpg',
      '/images/test/img12.jpg'
    ],
    allImages: [
      { url: '/images/test/img9.jpg', caption: 'Dawn at Matterhorn' },
      { url: '/images/test/img10.jpg', caption: 'Alpine Lake Reflection' },
      { url: '/images/test/img11.jpg', caption: 'Mountain Peaks' },
      { url: '/images/test/img12.jpg', caption: 'Foggy Valley' }
    ]
  }
];