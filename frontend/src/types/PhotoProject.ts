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