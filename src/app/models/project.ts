import { Image } from './image';

export interface Project {
  id: string;
  title: string;
  description: string;
  mainImage: Image;
  exampleImages: Image[];
  skillTags: string[];
}