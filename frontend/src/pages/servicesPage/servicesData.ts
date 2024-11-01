import { Service } from '../../types/types.ts';

export const services: Service[] = [
  {
    id: 'wedding-photography',
    title: 'Wedding Photography',
    description: 'Capturing your special day with a perfect blend of candid moments and artistic portraits.',
    longDescription: `As your wedding photographer, I bring years of experience in capturing the perfect balance 
    of candid emotions and carefully crafted portraits. My approach focuses on telling your unique love story 
    through a combination of photojournalistic documentation and artistic vision.

    I understand that every wedding is unique, and I work closely with each couple to ensure their 
    individual style and personality shine through in their photos. From the subtle glances to the grand 
    celebrations, I'm dedicated to preserving every meaningful moment of your special day.`,
    coverImage: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&q=80',
    gallery: [
      { url: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80', caption: 'First Dance' },
      { url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80', caption: 'Ceremony' },
      { url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80', caption: 'Ring Exchange' },
      { url: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80', caption: 'Couple Portrait' }
    ],
    extraGallery: [
      { url: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&q=80', caption: 'Wedding Details' },
      { url: 'https://images.unsplash.com/photo-1460978812857-470ed1c77af0?auto=format&fit=crop&q=80', caption: 'Bridal Party' },
      { url: 'https://images.unsplash.com/photo-1525772764200-be829a350797?auto=format&fit=crop&q=80', caption: 'Reception' },
      { url: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&q=80', caption: 'Getting Ready' }
    ],
    highlights: [
      'Complimentary engagement session',
      'Multiple photographer coverage',
      'High-resolution digital images',
      'Online gallery sharing',
      'Professional editing and color correction',
      'Print rights included'
    ],
    basePrice: 1500,
    options: [
      {
        id: 'coverage',
        name: 'Coverage Duration',
        description: 'Choose the duration of photography coverage for your wedding day',
        type: 'single',
        options: [
          { id: 'coverage-6', label: '6 Hours Coverage', price: 0 },
          { id: 'coverage-8', label: '8 Hours Coverage', price: 500 },
          { id: 'coverage-10', label: '10 Hours Coverage', price: 1000 },
          { id: 'coverage-12', label: '12 Hours Coverage', price: 1500 }
        ]
      },
      {
        id: 'photos',
        name: 'Number of Photos',
        description: 'Select the number of professionally edited photos you\'ll receive',
        type: 'single',
        options: [
          { id: 'photos-300', label: '250-350 Digital Photos', price: 0 },
          { id: 'photos-450', label: '350-450 Digital Photos', price: 300 },
          { id: 'photos-600', label: '450-550 Digital Photos', price: 600 }
        ]
      },
      {
        id: 'albums',
        name: 'Photo Albums',
        description: 'Choose from our selection of premium photo albums',
        type: 'multiple',
        options: [
          { id: 'album-small', label: 'Classic Album (20x30cm, 20 pages)', price: 300 },
          { id: 'album-medium', label: 'Premium Album (30x40cm, 30 pages)', price: 500 },
          { id: 'album-large', label: 'Luxury Album (40x50cm, 40 pages)', price: 800 },
          { id: 'album-parents', label: 'Two Parent Albums (15x20cm)', price: 400 }
        ]
      },
      {
        id: 'prints',
        name: 'Wall Art & Prints',
        description: 'Beautiful prints and wall art for your home',
        type: 'multiple',
        options: [
          { id: 'print-large', label: 'Large Framed Print (60x90cm)', price: 400 },
          { id: 'print-canvas', label: 'Canvas Gallery Wrap (80x120cm)', price: 500 },
          { id: 'print-metal', label: 'Metal Print (70x100cm)', price: 600 },
          { id: 'print-collection', label: 'Print Collection (10 8x10" prints)', price: 200 }
        ]
      },
      {
        id: 'extras',
        name: 'Additional Services',
        description: 'Enhance your wedding photography experience',
        type: 'multiple',
        options: [
          { id: 'extra-engagement', label: 'Engagement Session (2 hours)', price: 400 },
          { id: 'extra-second', label: 'Second Photographer', price: 600 },
          { id: 'extra-usb', label: 'Custom USB Box with Prints', price: 250 },
          { id: 'extra-slideshow', label: 'Multimedia Slideshow', price: 200 }
        ]
      }
    ],
    packages: [
      {
        name: 'Essential',
        price: '$2,500',
        description: 'Perfect for intimate weddings and elopements',
        preselectedOptions: ['coverage-6', 'photos-300', 'extra-usb'],
        features: [
          '6 hours of coverage',
          'Single photographer',
          '300+ edited digital images',
          'Online gallery',
          'Print release',
          'Custom USB Box'
        ]
      },
      {
        name: 'Premium',
        price: '$3,800',
        description: 'Our most popular package for full wedding days',
        isPopular: true,
        preselectedOptions: [
          'coverage-8',
          'photos-450',
          'album-medium',
          'extra-engagement',
          'extra-second',
          'extra-usb'
        ],
        features: [
          '8 hours of coverage',
          'Two photographers',
          '500+ edited digital images',
          'Premium Album (30x40cm)',
          'Engagement Session',
          'Custom USB Box'
        ]
      },
      {
        name: 'Luxury',
        price: '$5,500',
        description: 'Complete coverage for your perfect day',
        preselectedOptions: [
          'coverage-12',
          'photos-600',
          'album-large',
          'album-parents',
          'print-large',
          'print-canvas',
          'extra-engagement',
          'extra-second',
          'extra-usb',
          'extra-slideshow'
        ],
        features: [
          '12 hours of coverage',
          'Two photographers',
          '600+ edited digital images',
          'Luxury Album (40x50cm)',
          'Parent Albums',
          'Large Framed Print',
          'Canvas Gallery Wrap',
          'Engagement Session',
          'Custom USB Box',
          'Multimedia Slideshow'
        ]
      }
    ]
  }
];