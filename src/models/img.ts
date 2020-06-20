import { DefaultTheme } from 'styled-components';

export interface ImgDetails {
  src?: string;
  srcFn?: (theme: DefaultTheme) => string;
  alt: string;
}
