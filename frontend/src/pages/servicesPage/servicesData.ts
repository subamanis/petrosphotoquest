import { Service } from '../../../../shared/types.ts';

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
      { url: 'https://images.unsplash.com/photo-1537633552985-df8429e048b?auto=format&fit=crop&q=80', caption: 'Wedding Details' },
      { url: 'https://images.unsplash.com/photo-1460978812857-470ed1c77af0?auto=format&fit=crop&q=80', caption: 'Bridal Party' },
      { url: 'https://images.unsplash.com/photo-1525772764200-be829a350797?auto=format&fit=crop&q=80', caption: 'Reception' },
      { url: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&q=80', caption: 'Getting Ready' }
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
          { id: 'album-small', label: 'Classic Album (20x30cm, 20 pages)', price: 300, allowQuantity: true, maxQuantity: 5 },
          { id: 'album-medium', label: 'Premium Album (30x40cm, 30 pages)', price: 500, allowQuantity: true, maxQuantity: 3 },
          { id: 'album-large', label: 'Luxury Album (40x50cm, 40 pages)', price: 800, allowQuantity: true, maxQuantity: 2 },
          { id: 'album-parents', label: 'Two Parent Albums (15x20cm)', price: 400, allowQuantity: true, maxQuantity: 3 }
        ]
      },
      {
        id: 'prints',
        name: 'Wall Art & Prints',
        description: 'Beautiful prints and wall art for your home',
        type: 'multiple',
        options: [
          { id: 'print-large', label: 'Large Framed Print (60x90cm)', price: 400, allowQuantity: true, maxQuantity: 3 },
          { id: 'print-canvas', label: 'Canvas Gallery Wrap (80x120cm)', price: 500, allowQuantity: true, maxQuantity: 3 },
          { id: 'print-metal', label: 'Metal Print (70x100cm)', price: 600, allowQuantity: true, maxQuantity: 3 },
          { id: 'print-collection', label: 'Print Collection (10 8x10" prints)', price: 200, allowQuantity: true, maxQuantity: 5 }
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
          { id: 'extra-usb', label: 'Custom USB Box with Prints', price: 250, allowQuantity: true, maxQuantity: 3 },
          { id: 'extra-slideshow', label: 'Multimedia Slideshow', price: 200 }
        ]
      }
    ],
    highlights: [
      'Complimentary engagement session',
      'Multiple photographer coverage',
      'High-resolution digital images',
      'Online gallery sharing',
      'Professional editing and color correction',
      'Print rights included'
    ],
    packages: [
      {
        name: 'Essential',
        price: '€2,500',
        description: 'Perfect for intimate weddings and elopements',
        features: [
          '6 hours of coverage',
          '300+ edited digital images',
          'Custom USB Box'
        ],
        preselectedOptions: ['coverage-6', 'photos-300', 'extra-usb']
      },
      {
        name: 'Premium',
        price: '€3,800',
        description: 'Our most popular package for full wedding days',
        isPopular: true,
        features: [
          '8 hours of coverage',
          '450+ edited digital images',
          'Premium Album (30x40cm)',
          'Engagement Session',
          'Custom USB Box'
        ],
        preselectedOptions: [
          'coverage-8',
          'photos-450',
          'album-medium',
          'extra-engagement',
          'extra-second',
          'extra-usb'
        ]
      },
      {
        name: 'Luxury',
        price: '€5,500',
        description: 'Complete coverage for your perfect day',
        features: [
          '12 hours of coverage',
          '600+ edited digital images',
          'Luxury Album (40x50cm)',
          'Parent Albums',
          'Large Framed Print',
          'Canvas Gallery Wrap',
          'Engagement Session',
          'Custom USB Box',
          'Multimedia Slideshow'
        ],
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
        ]
      }
    ]
  },
  {
    id: 'christening-photography',
    title: 'Christening Photography',
    description: 'Documenting your child\'s special day with a blend of traditional and candid photography.',
    longDescription: `A christening is a precious milestone in your child's life, and as your photographer, 
    I'm dedicated to capturing every meaningful moment of this sacred celebration. My approach combines 
    traditional portraiture with natural, candid moments to create a complete story of the day.

    From the intimate ceremony to the joyful family celebrations afterward, I work discreetly and 
    professionally to document all the special moments, emotions, and details that make your child's 
    christening unique. My experience in church photography ensures respectful coverage while maintaining 
    the highest quality of images.`,
    coverImage: 'https://images.unsplash.com/photo-1515488764276-beab7607c1e6?auto=format&fit=crop&q=80',
    gallery: [
      { url: 'https://images.unsplash.com/photo-1544776193-352d25ca82cd?auto=format&fit=crop&q=80', caption: 'Ceremony' },
      { url: 'https://images.unsplash.com/photo-1602623056709-37325c5d7e35?auto=format&fit=crop&q=80', caption: 'Family Portraits' },
      { url: 'https://images.unsplash.com/photo-1612463099622-45901e778f44?auto=format&fit=crop&q=80', caption: 'Candid Moments' },
      { url: 'https://images.unsplash.com/photo-1594050753831-ebf4b3b52af7?auto=format&fit=crop&q=80', caption: 'Details' }
    ],
    extraGallery: [
      { url: 'https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?auto=format&fit=crop&q=80', caption: 'Church Interior' },
      { url: 'https://images.unsplash.com/photo-1608096299210-db7e38487075?auto=format&fit=crop&q=80', caption: 'Reception' },
      { url: 'https://images.unsplash.com/photo-1578307992601-3a9a5f3a33a5?auto=format&fit=crop&q=80', caption: 'Family Groups' },
      { url: 'https://images.unsplash.com/photo-1594050753831-ebf4b3b52af7?auto=format&fit=crop&q=80', caption: 'Celebration' }
    ],
    basePrice: 600,
    options: [
      {
        id: 'coverage',
        name: 'Coverage Duration',
        description: 'Choose the duration of photography coverage',
        type: 'single',
        options: [
          { id: 'coverage-2', label: '2 Hours Coverage', price: 0 },
          { id: 'coverage-3', label: '3 Hours Coverage', price: 200 },
          { id: 'coverage-4', label: '4 Hours Coverage', price: 400 },
          { id: 'coverage-5', label: '5 Hours Coverage', price: 600 }
        ]
      },
      {
        id: 'photos',
        name: 'Number of Photos',
        description: 'Select the number of professionally edited photos',
        type: 'single',
        options: [
          { id: 'photos-100', label: '100-150 Digital Photos', price: 0 },
          { id: 'photos-200', label: '150-200 Digital Photos', price: 150 },
          { id: 'photos-300', label: '200-250 Digital Photos', price: 300 }
        ]
      },
      {
        id: 'albums',
        name: 'Photo Albums',
        description: 'Premium photo albums to preserve your memories',
        type: 'multiple',
        options: [
          { id: 'album-small', label: 'Classic Album (20x20cm, 20 pages)', price: 200, allowQuantity: true, maxQuantity: 3 },
          { id: 'album-medium', label: 'Premium Album (25x25cm, 30 pages)', price: 300, allowQuantity: true, maxQuantity: 2 },
          { id: 'album-grandparents', label: 'Two Grandparent Albums (15x15cm)', price: 250, allowQuantity: true, maxQuantity: 2 }
        ]
      },
      {
        id: 'prints',
        name: 'Wall Art & Prints',
        description: 'Beautiful prints to display your memories',
        type: 'multiple',
        options: [
          { id: 'print-framed', label: 'Framed Print (40x50cm)', price: 200, allowQuantity: true, maxQuantity: 3 },
          { id: 'print-canvas', label: 'Canvas Print (50x70cm)', price: 250, allowQuantity: true, maxQuantity: 2 },
          { id: 'print-collection', label: 'Print Collection (10 13x18cm prints)', price: 150, allowQuantity: true, maxQuantity: 3 }
        ]
      },
      {
        id: 'extras',
        name: 'Additional Services',
        description: 'Enhance your christening photography package',
        type: 'multiple',
        options: [
          { id: 'extra-location', label: 'Additional Location Shoot', price: 200 },
          { id: 'extra-usb', label: 'Custom USB Box with Prints', price: 150, allowQuantity: true, maxQuantity: 2 },
          { id: 'extra-slideshow', label: 'Digital Slideshow with Music', price: 150 },
          { id: 'extra-rush', label: 'Rush Editing (48-hour delivery)', price: 200 }
        ]
      }
    ],
    highlights: [
      'Experienced in church photography',
      'Blend of traditional and candid shots',
      'Professional editing and color correction',
      'Online gallery for easy sharing',
      'High-resolution digital images',
      'Print rights included'
    ],
    packages: [
      {
        name: 'Essential',
        price: '€800',
        description: 'Perfect for ceremony-only coverage',
        features: [
          '2 hours of coverage',
          '100-150 edited digital images',
          'Online gallery',
          'Custom USB Box'
        ],
        preselectedOptions: ['coverage-2', 'photos-100', 'extra-usb']
      },
      {
        name: 'Classic',
        price: '€1,200',
        description: 'Our most popular christening package',
        isPopular: true,
        features: [
          '3 hours of coverage',
          '150-200 edited digital images',
          'Classic Album (20x20cm)',
          'Two Grandparent Albums',
          'Custom USB Box',
          'Digital Slideshow'
        ],
        preselectedOptions: [
          'coverage-3',
          'photos-200',
          'album-small',
          'album-grandparents',
          'extra-usb',
          'extra-slideshow'
        ]
      },
      {
        name: 'Premium',
        price: '€1,800',
        description: 'Complete coverage of your special day',
        features: [
          '5 hours of coverage',
          '200-250 edited digital images',
          'Premium Album (25x25cm)',
          'Two Grandparent Albums',
          'Framed Print (40x50cm)',
          'Custom USB Box',
          'Digital Slideshow',
          'Additional Location Shoot'
        ],
        preselectedOptions: [
          'coverage-5',
          'photos-300',
          'album-medium',
          'album-grandparents',
          'print-framed',
          'extra-usb',
          'extra-slideshow',
          'extra-location'
        ]
      }
    ]
  },
  {
    id: 'portrait-photography',
    title: 'Portrait Photography',
    description: 'Professional portrait sessions capturing your authentic self in natural or urban settings.',
    longDescription: `As a portrait photographer, I specialize in creating authentic, expressive images 
    that capture your unique personality and style. Whether you need professional headshots, personal 
    portraits, or family photos, I work with natural light and carefully chosen locations to create 
    images that truly represent you.

    Each session is tailored to your specific needs, with time for outfit changes and different 
    locations if desired. I provide gentle direction while keeping the atmosphere relaxed and 
    comfortable, ensuring natural expressions and genuine moments.`,
    coverImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
    gallery: [
      { url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80', caption: 'Natural Light Portrait' },
      { url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80', caption: 'Professional Headshot' },
      { url: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80', caption: 'Urban Portrait' },
      { url: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80', caption: 'Fashion Portrait' }
    ],
    extraGallery: [
      { url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80', caption: 'Black & White Portrait' },
      { url: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&q=80', caption: 'Environmental Portrait' },
      { url: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80', caption: 'Casual Portrait' },
      { url: 'https://images.unsplash.com/photo-1464863979621-258859e62245?auto=format&fit=crop&q=80', caption: 'Lifestyle Portrait' }
    ],
    basePrice: 150,
    options: [
      {
        id: 'session',
        name: 'Session Duration',
        description: 'Choose your preferred session length',
        type: 'single',
        options: [
          { id: 'session-mini', label: 'Mini Session (1 hour, 20-30 photos)', price: 0 },
          { id: 'session-standard', label: 'Standard Session (2 hours, 35-45 photos)', price: 30 },
          { id: 'session-extended', label: 'Extended Session (3 hours 50-60 photos)', price: 50 }
        ]
      },
      {
        id: 'location',
        name: 'Location Type',
        description: 'Choose your preferred shooting location',
        type: 'single',
        options: [
          { id: 'location-one', label: 'One Location', price: 0 },
          { id: 'location-two', label: 'Two Locations', price: 30 },
          { id: 'location-three', label: 'Three Locations', price: 60 },
        ]
      },
      {
        id: 'extras',
        name: 'Additional Services',
        description: 'Enhance your portrait session',
        type: 'multiple',
        options: [
          { id: 'extra-printing', label: 'Photo printing ', price: 35 },
          { id: 'extra-express', label: '48-Hour Express Digital Delivery', price: 30 },
          { id: 'extra-makeup', label: 'Professional Makeup', price: 40 },
        ]
      }
    ],
    highlights: [
      'Professional guidance throughout the session',
      'Possible multiple outfit changes',
      'Location scouting and recommendations',
      'High-resolution digital images',
      'Social-media optimized files',
      'Retouching',
    ],
    packages: [
      {
        name: 'Essential',
        price: '€200',
        description: 'Perfect for professional headshots or quick personal portraits',
        features: [
          'Mini Session (30 minutes)',
          'Urban or Nature Location',
          '10 Digital Photos',
          'Online Gallery'
        ],
        preselectedOptions: ['session-mini', 'location-one']
      },
      {
        name: 'Classic',
        price: '€400',
        description: 'Our most popular portrait package',
        isPopular: true,
        features: [
          'Standard Session (1 hour)',
          'Location of Choice',
          '20 Digital Photos',
          'Professional Makeup',
          'Multiple Outfit Changes'
        ],
        preselectedOptions: [
          'session-standard',
          'location-two',
          'extra-makeup'
        ]
      },
      {
        name: 'Premium',
        price: '€700',
        description: 'Complete portrait experience with all extras',
        features: [
          'Extended Session (2 hours)',
          'Multiple Locations',
          '30 Digital Photos',
          'Professional Makeup',
          'Styling Consultation',
          'Express Delivery',
        ],
        preselectedOptions: [
          'session-extended',
          'location-three',
          'extra-makeup',
          'extra-express',
        ]
      }
    ]
  }
];