export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  coverImage: string;
  gallery: {
    url: string;
    caption?: string;
  }[];
  extraGallery: {
    url: string;
    caption?: string;
  }[];
  packages: ServicePackage[];
  highlights: string[];
  options: ServiceOptionGroup[];
  basePrice: number;
}

export interface ServicePackage {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  preselectedOptions?: string[];
}


export interface ServiceOption {
  id: string;
  label: string;
  price: number;
}

export interface ServiceOptionGroup {
  id: string;
  name: string;
  description?: string;
  type: 'single' | 'multiple';
  options: ServiceOption[];
}

// ==================================================

export interface PhotoProject {
  id: string;
  title: string;
  location: string;
  date: string;
  description: string;
  featuredImages: string[];
  allImages: {
    url: string;
    caption?: string;
  }[];
}