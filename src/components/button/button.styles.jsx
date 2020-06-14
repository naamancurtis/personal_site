import styled, { css } from 'styled-components';
import {
  hexToRgb,
  pSBC,
  convertRgbStrToObject,
} from '../../styles/utility.functions';
import {
  defaultBoxShadowCss,
  indentBoxShadowCss,
} from '../../styles/neumorphic';

export const SubmitButton = styled.button`
  font-size: 1em;
  font-weight: 700;
  width: 50%;
  color: ${({ theme }) => theme.secondaryAccent};
  background-color: ${({ theme }) => theme.body};
  border-radius: 10px;
  border: none;
  margin-bottom: 2rem;
  font-family: ${({ theme }) => theme.fonts.body};
  transition: box-shadow 0.2s;
  cursor: pointer;
  display: inline-flex;
  justify-content: space-around;
  align-items: center;
  overflow: hidden;

  box-shadow: ${(props) => {
    const rgb = hexToRgb(props.theme.secondaryAccent);
    const bodyRGBstring = pSBC(0.4, props.theme.body, 'c');
    const bodyRGB = convertRgbStrToObject(bodyRGBstring);
    if (props.theme.theme === 'dark') {
      return `
        0px 0px 8px 0 rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.5),
        inset 0px 0px 10px 0 rgba(${bodyRGB.r}, ${bodyRGB.g}, ${bodyRGB.b}, 0.2);
        `;
    }
    return `
    -6px 6px 16px 0 rgba(57, 58, 71, 0.1),
    6px 6px 10px 0 rgba(222, 219, 226, 0.5);
  `;
  }};

  // &:hover {
  //   transition: box-shadow 0.2s;
  //   box-shadow: ${(props) => {
    //     const rgb = hexToRgb(props.theme.secondaryAccent);
    //     if (props.theme.theme === 'dark') {
    //       const darkRgbString = pSBC(-0.4, props.theme.body, 'c');
    //       const splitRgbString = darkRgbString
    //         .substr(4, darkRgbString.length - 5)
    //         .split(',');
    //       const darkRgb = {
    //         r: splitRgbString[0],
    //         g: splitRgbString[1],
    //         b: splitRgbString[2],
    //       };
    //       return `
    //       0px 0px 8px 0 rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.5),
    //       inset 0px 0px 10px 0 rgba(${darkRgb.r}, ${darkRgb.g}, ${darkRgb.b}, 1);
    //       `;
    //     }
    //     return `
    //   -6px 6px 16px 0 rgba(57, 58, 71, 0.1),
    //   6px 6px 10px 0 rgba(222, 219, 226, 0.5);
    // `;
    //  }};
    //
  }}
`;

export const ButtonIcon = styled.span`
  padding: 0.5rem 0.75rem;
  border-right: 1px solid ${({ theme }) => pSBC(-0.2, theme.body)};
`;

export const ButtonText = styled.span`
  flex-grow: 1;
  text-align: center;
  padding: 0.5rem 0.75rem;

  ${SubmitButton}:hover & {
    transition: box-shadow 0.2s;
    background-color: ${({ theme }) => pSBC(-0.1, theme.body)};
    text-shadow: ${(props) => {
      const rgb = convertRgbStrToObject(
        pSBC(-0.1, props.theme.secondaryAccent, 'c')
      );
      return `5px 3px 5px rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.2)`;
    }};
  
    box-shadow: ${(props) => {
      const rgb = hexToRgb(props.theme.secondaryAccent);
      if (props.theme.theme === 'dark') {
        const darkRgbString = pSBC(-0.5, props.theme.body, 'c');
        const splitRgbString = darkRgbString
          .substr(4, darkRgbString.length - 5)
          .split(',');
        const darkRgb = {
          r: splitRgbString[0],
          g: splitRgbString[1],
          b: splitRgbString[2],
        };
        return `
        0 0 8px 0 rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.5),
        inset 0 0 8px 0 rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.2),
        inset 0 0 14px 0 rgba(${darkRgb.r}, ${darkRgb.g}, ${darkRgb.b}, 0.7);
        `;
      }
      return `
    -6px 6px 16px 0 rgba(57, 58, 71, 0.1),
    6px 6px 10px 0 rgba(222, 219, 226, 0.5);
  `;
    }};
`;
