import { css } from 'styled-components';
import { pSBC, convertRgbStrToObject } from './utility.functions';

export const defaultBoxShadowCss = css`
  box-shadow: ${({ theme }) => {
    // Dark Mode
    if (theme.theme === 'dark') {
      const primaryRgb = convertRgbStrToObject(pSBC(-0.3, theme.body, 'c'));
      const secondaryRgb = convertRgbStrToObject(
        pSBC(0, theme.contrastBody, 'c')
      );

      return `
        -3px -3px 8px 0 rgba(${secondaryRgb.r}, ${secondaryRgb.g}, ${secondaryRgb.b}, 0.1),
        6px 6px 10px 0 rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, 0.9);
        `;
    }

    // Light Mode
    const primaryRgb = convertRgbStrToObject(pSBC(0.5, theme.body, 'c'));
    const secondaryRgb = convertRgbStrToObject(
      pSBC(0.1, theme.contrastBody, 'c')
    );

    return `
        -3px -3px 8px 0 rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, 1),
        6px 6px 10px 0 rgba(${secondaryRgb.r}, ${secondaryRgb.g}, ${secondaryRgb.b}, 0.15);
        `;
  }};
`;

export const indentBoxShadowCss = css`
  box-shadow: ${({ theme }) => {
    // Dark Mode
    if (theme.theme === 'dark') {
      const primaryRgb = convertRgbStrToObject(pSBC(-0.3, theme.body, 'c'));
      const secondaryRgb = convertRgbStrToObject(
        pSBC(0, theme.contrastBody, 'c')
      );

      return `
        inset -6px -6px 8px 0 rgba(${secondaryRgb.r}, ${secondaryRgb.g}, ${secondaryRgb.b}, 0.07),
        inset 3px 3px 10px 0 rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, 0.8);
        `;
    }

    // Light Mode
    const primaryRgb = convertRgbStrToObject(pSBC(0.5, theme.body, 'c'));
    const secondaryRgb = convertRgbStrToObject(
      pSBC(0.1, theme.contrastBody, 'c')
    );

    return `
        inset -6px -6px 8px 0 rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, 1),
        inset 3px 3px 10px 0 rgba(${secondaryRgb.r}, ${secondaryRgb.g}, ${secondaryRgb.b}, 0.15);
        `;
  }};
`;

export const clickedBoxShadowCss = css`
  box-shadow: ${({ theme }) => {
    // Dark Mode
    if (theme.theme === 'dark') {
      const primaryRgb = convertRgbStrToObject(pSBC(-0.4, theme.body, 'c'));
      const secondaryRgb = convertRgbStrToObject(
        pSBC(0.1, theme.contrastBody, 'c')
      );

      return `
        inset -6px -6px 8px 0 rgba(${secondaryRgb.r}, ${secondaryRgb.g}, ${secondaryRgb.b}, 0.07),
        inset 3px 3px 2px 0 rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, 0.8);
        `;
    }

    // Light Mode
    const primaryRgb = convertRgbStrToObject(pSBC(0.6, theme.body, 'c'));
    const secondaryRgb = convertRgbStrToObject(
      pSBC(0.3, theme.contrastBody, 'c')
    );

    return `
        inset -6px -6px 6px 0 rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, 1),
        inset 3px 3px 2px 1px rgba(${secondaryRgb.r}, ${secondaryRgb.g}, ${secondaryRgb.b}, 0.3);
        `;
  }};
`;

export const underlineHighlightBoxShadow = css`
  box-shadow: ${({ theme }) => {
    const reducedOpacityStart = convertRgbStrToObject(
      pSBC(0, theme.underlineStart, 'c')
    );
    const reducedOpacityEnd = convertRgbStrToObject(
      pSBC(0, theme.underlineEnd, 'c')
    );

    return `
        -1px -1px 8px 0 rgba(${reducedOpacityStart.r}, ${reducedOpacityStart.g}, ${reducedOpacityStart.b}, 0.3),
        4px 4px 14px 0 rgba(${reducedOpacityEnd.r}, ${reducedOpacityEnd.g}, ${reducedOpacityEnd.b}, 0.4);
        `;
  }};
`;

export const underlineHighlightTextShadow = css`
  text-shadow: ${({ theme }) => {
    const reducedOpacityStart = convertRgbStrToObject(
      pSBC(0, theme.underlineStart, 'c')
    );
    const reducedOpacityEnd = convertRgbStrToObject(
      pSBC(0, theme.underlineEnd, 'c')
    );

    return `
        4px 4px 6px rgba(${reducedOpacityStart.r}, ${reducedOpacityStart.g}, ${reducedOpacityStart.b}, 0.1),
        1px 1px 3px rgba(${reducedOpacityEnd.r}, ${reducedOpacityEnd.g}, ${reducedOpacityEnd.b}, 0.2);
        `;
  }};
`;
