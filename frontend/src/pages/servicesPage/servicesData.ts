import { Service } from '../../types/Service';

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
    packages: [
      {
        name: 'Essential',
        price: '$2,500',
        description: 'Perfect for intimate weddings and elopements',
        features: [
          '6 hours of coverage',
          'Single photographer',
          '300+ edited digital images',
          'Online gallery',
          'Print release',
          'Engagement session'
        ]
      },
      {
        name: 'Premium',
        price: '$3,800',
        description: 'My most popular package for full wedding days',
        isPopular: true,
        features: [
          '8 hours of coverage',
          'Two photographers',
          '500+ edited digital images',
          'Online gallery',
          'Print release',
          'Engagement session',
          'Wedding album design consultation',
          'Custom USB drive'
        ]
      },
      {
        name: 'Luxury',
        price: '$5,500',
        description: 'Complete coverage for your perfect day',
        features: [
          '10 hours of coverage',
          'Two photographers',
          '700+ edited digital images',
          'Online gallery',
          'Print release',
          'Engagement session',
          'Premium wedding album',
          'Custom USB drive',
          'Second day coverage (2 hours)',
          'Drone aerial shots',
          'Same-day preview images'
        ]
      }
    ]
  },
  {
    id: 'portrait-sessions',
    title: 'Portrait Sessions',
    description: 'Professional portraits that capture your personality and tell your unique story.',
    longDescription: `As your wedding photographer, I bring years of experience in capturing the perfect balance 
    of candid emotions and carefully crafted portraits. My approach focuses on telling your unique love story 
    through a combination of photojournalistic documentation and artistic vision.`,
    coverImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
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
    packages: [
      {
        name: 'Essential',
        price: '$2,500',
        description: 'Perfect for intimate weddings and elopements',
        features: [
          '6 hours of coverage',
          'Single photographer',
          '300+ edited digital images',
          'Online gallery',
          'Print release',
          'Engagement session'
        ]
      },
      {
        name: 'Premium',
        price: '$3,800',
        description: 'My most popular package for full wedding days',
        isPopular: true,
        features: [
          '8 hours of coverage',
          'Two photographers',
          '500+ edited digital images',
          'Online gallery',
          'Print release',
          'Engagement session',
          'Wedding album design consultation',
          'Custom USB drive'
        ]
      },
      {
        name: 'Luxury',
        price: '$5,500',
        description: 'Complete coverage for your perfect day',
        features: [
          '10 hours of coverage',
          'Two photographers',
          '700+ edited digital images',
          'Online gallery',
          'Print release',
          'Engagement session',
          'Premium wedding album',
          'Custom USB drive',
          'Second day coverage (2 hours)',
          'Drone aerial shots',
          'Same-day preview images'
        ]
      }
    ]
  }
  // Add more services here
];