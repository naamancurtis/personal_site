import { ImgDetails } from './img';

export interface Project {
  img: string;
  title: string;
  role?: string;
  description: string[];
  nda: boolean;
  stack: ImgDetails[];
  links: {
    live: string | null;
    code: string | null;
    press: string | null;
  };
}
