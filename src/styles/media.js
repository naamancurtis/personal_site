import { css } from 'styled-components';

const sizes = {
  uhd: 1980,
  widescreen: 1366,
  desktop: 1024,
  tablet: 768,
};

// Used for react-media - grabbing the size within components
export const GLOBAL_MEDIA_QUERIES = {
  uhd: '(min-width: 1980px)',
  widescreen: '(min-width: 1366px) and (max-width: 1979px)',
  desktop: '(min-width: 1024px) and (max-width: 1365px)',
  tablet: '(min-width: 768px) and (max-width: 1023px)',
  mobile: '(max-width: 767px)',
};

// Used for styled components
export default Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `;

  return acc;
}, {});
