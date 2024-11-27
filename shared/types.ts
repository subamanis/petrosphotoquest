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
  description?: string;
  features: string[];
  isPopular?: boolean;
  preselectedOptions?: string[];
}

export interface ServiceOptionGroup {
  id: string;
  name: string;
  description?: string;
  type: 'single' | 'multiple';
  options: ServiceOption[];
}

export interface ServiceOption {
  id: string;
  label: string;
  price: number;
  allowQuantity?: boolean;
  maxQuantity?: number;
}

export interface DiscountTier {
  minOptions: number;
  percentage: number;
  color: string;
}

export interface OptionQuantity {
  [key: string]: number;
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

// ==================================================

export interface Product {
  id: string;
  title: string;
  description: string;
  type: ProductType;
  images: string[];
  details: string[];
  inStock: boolean;
  featured?: boolean;
  // For prints
  sizes?: PrintSize[];
  frameDetails?: FrameDetails;
  // For fixed-price products (zines, wallpapers)
  price?: number;
}

export interface PrintSize {
  name: string;
  dimensions: string;
  basePrice: number;
  framedPrice: number;
}

export interface FrameDetails {
  description: string;
  width: string;
  color: string;
}

export type ProductType = 'zine' | 'print' | 'wallpaper';

export const PRODUCT_TYPE_LABELS: Record<ProductType, string> = {
  zine: 'Zines',
  print: 'Prints',
  wallpaper: 'Digital Wallpapers'
};