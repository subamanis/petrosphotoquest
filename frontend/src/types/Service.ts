import {ServicePackage} from "./ServicePackage";

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
}