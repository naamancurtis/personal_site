import { Theme } from '../styles/theme';

export interface ImgDetails {
  src?: string;
  srcFn?: (theme: Theme) => string;
  alt: string;
}
