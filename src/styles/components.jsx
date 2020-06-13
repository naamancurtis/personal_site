import styled from 'styled-components';
import { convertRgbStrToObject, pSBC } from './utility.functions';

export const Line = styled.div`
  width: 100%;
  border-bottom: 3px solid ${({ theme }) => theme.body};
  margin-top: 1rem;
  margin-bottom: 1rem;
  box-shadow: ${(props) => {
    const primaryRgb = convertRgbStrToObject(pSBC(-0.3, props.theme.body, 'c'));
    return `
        2px 2px 8px 0 rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, 1);
        -2px -2px 16px 0 rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, 1);
        `;
  }};
`;
