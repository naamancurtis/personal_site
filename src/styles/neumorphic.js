import { css } from 'styled-components';
import { pSBC, convertRgbStrToObject } from './utility.functions';

export const defaultBoxShadowCss = css`
  box-shadow: ${(props) => {
    // Dark Mode
    if (props.theme.theme === 'dark') {
      const primaryRgb = convertRgbStrToObject(
        pSBC(-0.3, props.theme.body, 'c')
      );
      const secondaryRgb = convertRgbStrToObject(
        pSBC(0, props.theme.contrastBody, 'c')
      );

      return `
        -3px -3px 8px 0 rgba(${secondaryRgb.r}, ${secondaryRgb.g}, ${secondaryRgb.b}, 0.1),
        6px 6px 10px 0 rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, 0.9);
        `;
    }

    // Light Mode
    const primaryRgb = convertRgbStrToObject(pSBC(0.3, props.theme.body, 'c'));
    const secondaryRgb = convertRgbStrToObject(
      pSBC(0.1, props.theme.contrastBody, 'c')
    );

    return `
        -3px -3px 8px 0 rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, 0.9),
        6px 6px 10px 0 rgba(${secondaryRgb.r}, ${secondaryRgb.g}, ${secondaryRgb.b}, 0.15);
        `;
  }};
`;

export const indentBoxShadowCss = css`
  box-shadow: ${(props) => {
    // Dark Mode
    if (props.theme.theme === 'dark') {
      const primaryRgb = convertRgbStrToObject(
        pSBC(-0.3, props.theme.body, 'c')
      );
      const secondaryRgb = convertRgbStrToObject(
        pSBC(0, props.theme.contrastBody, 'c')
      );

      return `
        inset -6px -6px 8px 0 rgba(${secondaryRgb.r}, ${secondaryRgb.g}, ${secondaryRgb.b}, 0.07),
        inset 3px 3px 10px 0 rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, 0.8);
        `;
    }

    // Light Mode
    const primaryRgb = convertRgbStrToObject(pSBC(0.3, props.theme.body, 'c'));
    const secondaryRgb = convertRgbStrToObject(
      pSBC(0.1, props.theme.contrastBody, 'c')
    );

    return `
        inset -6px -6px 8px 0 rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, 0.9),
        inset 3px 3px 10px 0 rgba(${secondaryRgb.r}, ${secondaryRgb.g}, ${secondaryRgb.b}, 0.15);
        `;
  }}};
`;
