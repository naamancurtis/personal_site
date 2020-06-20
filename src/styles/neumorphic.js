import { css } from 'styled-components';
import { pSBC, convertRgbStrToObject } from './utility.functions';

export const defaultBoxShadowCss = css`
  box-shadow: ${({ theme }) => {
    let topLeft;
    let bottomRight;
    let topOpacity;
    let bottomOpacity;

    if (theme.theme === 'dark') {
      // Dark Mode
      bottomRight = convertRgbStrToObject(pSBC(-0.3, theme.body, 'c'));
      topLeft = convertRgbStrToObject(pSBC(0, theme.contrastBody, 'c'));
      topOpacity = 0.1;
      bottomOpacity = 0.9;
    } else {
      // Light Mode
      topLeft = convertRgbStrToObject(pSBC(0.5, theme.body, 'c'));
      bottomRight = convertRgbStrToObject(pSBC(0.1, theme.contrastBody, 'c'));
      topOpacity = 1;
      bottomOpacity = 0.15;
    }

    return `
        -3px -3px 8px 0 rgba(${topLeft.r}, ${topLeft.g}, ${topLeft.b}, ${topOpacity}),
        6px 6px 10px 0 rgba(${bottomRight.r}, ${bottomRight.g}, ${bottomRight.b}, ${bottomOpacity});
        `;
  }};
`;

export const emphasisedBoxShadowCss = css`
  box-shadow: ${({ theme }) => {
    let topLeft;
    let bottomRight;
    let topOpacity;
    let bottomOpacity;

    if (theme.theme === 'dark') {
      // Dark Mode
      bottomRight = convertRgbStrToObject(pSBC(-0.3, theme.body, 'c'));
      topLeft = convertRgbStrToObject(pSBC(0, theme.contrastBody, 'c'));
      topOpacity = 0.1;
      bottomOpacity = 0.7;
    } else {
      // Light Mode
      topLeft = convertRgbStrToObject(pSBC(0.5, theme.body, 'c'));
      bottomRight = convertRgbStrToObject(pSBC(0.1, theme.contrastBody, 'c'));
      topOpacity = 1;
      bottomOpacity = 0.15;
    }

    return `
        -3px -3px 3px 0 rgba(${topLeft.r}, ${topLeft.g}, ${topLeft.b}, ${topOpacity}),
        6px 6px 2px 0 rgba(${bottomRight.r}, ${bottomRight.g}, ${bottomRight.b}, ${bottomOpacity});
        `;
  }};
`;

export const indentBoxShadowCss = css`
  box-shadow: ${({ theme }) => {
    let topLeft;
    let bottomRight;
    let topOpacity;
    let bottomOpacity;

    if (theme.theme === 'dark') {
      // Dark Mode
      bottomRight = convertRgbStrToObject(pSBC(-0.3, theme.body, 'c'));
      topLeft = convertRgbStrToObject(pSBC(0, theme.contrastBody, 'c'));
      topOpacity = 0.07;
      bottomOpacity = 0.8;
    } else {
      // Light Mode
      topLeft = convertRgbStrToObject(pSBC(0.5, theme.body, 'c'));
      bottomRight = convertRgbStrToObject(pSBC(0.1, theme.contrastBody, 'c'));
      topOpacity = 1;
      bottomOpacity = 0.15;
    }

    return `
        inset -6px -6px 8px 0 rgba(${topLeft.r}, ${topLeft.g}, ${topLeft.b}, ${topOpacity}),
        inset 3px 3px 10px 0 rgba(${bottomRight.r}, ${bottomRight.g}, ${bottomRight.b}, ${bottomOpacity});
        `;
  }};
`;

export const clickedBoxShadowCss = css`
  box-shadow: ${({ theme }) => {
    let topLeft;
    let bottomRight;
    let topOpacity;
    let bottomOpacity;

    if (theme.theme === 'dark') {
      // Dark Mode
      bottomRight = convertRgbStrToObject(pSBC(-0.4, theme.body, 'c'));
      topLeft = convertRgbStrToObject(pSBC(0.1, theme.contrastBody, 'c'));
      topOpacity = 0.07;
      bottomOpacity = 0.8;
    } else {
      // Light Mode
      topLeft = convertRgbStrToObject(pSBC(0.6, theme.body, 'c'));
      bottomRight = convertRgbStrToObject(pSBC(0.3, theme.contrastBody, 'c'));
      topOpacity = 1;
      bottomOpacity = 0.3;
    }

    return `
        inset -6px -6px 6px 0 rgba(${topLeft.r}, ${topLeft.g}, ${topLeft.b}, ${topOpacity}),
        inset 3px 3px 2px 1px rgba(${bottomRight.r}, ${bottomRight.g}, ${bottomRight.b}, ${bottomOpacity});
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
