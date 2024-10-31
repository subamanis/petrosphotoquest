import { PhotoProject } from '../../types/PhotoProject.ts';

export const projects: PhotoProject[] = [
  {
    id: 'urban-nights',
    title: 'Urban Nights',
    location: 'Tokyo, Japan',
    date: 'December 2023',
    description: 'A nocturnal exploration of Tokyo\'s neon-lit streets and hidden alleyways, capturing the city\'s vibrant nightlife and modern urban culture.',
    featuredImages: [
      'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1599588852584-41798a3a8194?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80'
    ],
    allImages: [
      { url: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&q=80', caption: 'Shibuya Crossing at Blue Hour' },
      { url: 'https://images.unsplash.com/photo-1599588852584-41798a3a8194?auto=format&fit=crop&q=80', caption: 'Neon Signs in Shinjuku' },
      { url: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80', caption: 'Street Food Vendors' },
      { url: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80', caption: 'City Lights Reflection' }
    ]
  },
  {
    id: 'mountain-solitude',
    title: 'Mountain Solitude',
    location: 'Swiss Alps',
    date: 'September 2023',
    description: 'A visual journey through the serene landscapes of the Swiss Alps, documenting the raw beauty of nature and its peaceful solitude.',
    featuredImages: [
      'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1443632864897-14973fa006cf?auto=format&fit=crop&q=80'
    ],
    allImages: [
      { url: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&q=80', caption: 'Dawn at Matterhorn' },
      { url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80', caption: 'Alpine Lake Reflection' },
      { url: 'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&q=80', caption: 'Mountain Peaks' },
      { url: 'https://images.unsplash.com/photo-1443632864897-14973fa006cf?auto=format&fit=crop&q=80', caption: 'Foggy Valley' }
    ]
  }
];