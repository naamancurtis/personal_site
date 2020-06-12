import { css } from 'styled-components';
import { pSBC, convertRgbStrToObject } from './utility.functions';

export const defaultBoxShadowCss = css`
  if (!props.theme.body || !props.theme.oppositeBackground) return;
  box-shadow: ${(props) => {
    const primaryRgb = convertRgbStrToObject(pSBC(-0.3, props.theme.body, 'c'));
    const secondaryRgb = convertRgbStrToObject(
      pSBC(0, props.theme.oppositeBackground, 'c')
    );
    if (props.theme.theme === 'dark') {
      return `
        -3px -3px 8px 0 rgba(${secondaryRgb.r}, ${secondaryRgb.g}, ${secondaryRgb.b}, 0.1),
        6px 6px 10px 0 rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, 0.9);
        `;
    }
    return `
        -3px -3px 8px 0 rgba(${secondaryRgb.r}, ${secondaryRgb.g}, ${secondaryRgb.b}, 0.1),
        6px 6px 10px 0 rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, 0.9);
        `;
  }};
`;

export const indentBoxShadowCss = css`
  box-shadow: ${(props) => {
    if (!props.theme.body || !props.theme.oppositeBackground) return;
    const primaryRgb = convertRgbStrToObject(pSBC(-0.3, props.theme.body, 'c'));
    const secondaryRgb = convertRgbStrToObject(
      pSBC(0, props.theme.oppositeBackground, 'c')
    );
    if (props.theme.theme === 'dark') {
      return `
        inset -6px -6px 8px 0 rgba(${secondaryRgb.r}, ${secondaryRgb.g}, ${secondaryRgb.b}, 0.07),
        inset 3px 3px 10px 0 rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, 0.8);
        `;
    }
    return `
        inset -6px -6px 8px 0 rgba(${secondaryRgb.r}, ${secondaryRgb.g}, ${secondaryRgb.b}, 0.07),
        inset 3px 3px 10px 0 rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, 0.8);
        `;
  }}};
`;
