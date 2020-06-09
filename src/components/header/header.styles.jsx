import styled from 'styled-components';

const StyledHeader = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default StyledHeader;

export const HeaderBrand = styled.span`
  font-family: 'Fira Sans Extra Condensed', source-code-pro, Menlo, Monaco,
    Consolas, 'Courier New', monospace;
  color: ${(props) => props.theme.oppositeBackground};
  font-weight: 400;
  letter-spacing: 1.3px;
`;

export const HeaderBrandCurly = styled.span`
  font-family: 'Fira Code', source-code-pro;
  font-weight: 600;
`;
