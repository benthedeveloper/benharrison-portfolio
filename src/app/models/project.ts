import { Image } from './image';

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  longDescriptionHtml: string;
  mainImage: Image;
  exampleImages: Image[];
  skillTags: string[];
  year: number;
}