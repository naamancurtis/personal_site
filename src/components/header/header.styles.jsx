import styled from 'styled-components';
import LightenDarkenColor from '../../styles/utility.functions';

const StyledHeader = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  padding: 0 2rem;
  align-items: center;
  justify-content: space-between;
`;

export default StyledHeader;

export const HeaderBrand = styled.span`
  font-family: 'Fifteen', source-code-pro, Menlo, Monaco, Consolas,
    'Courier New', monospace;
  color: ${(props) => props.theme.oppositeBackground};
  font-weight: 600;
`;

export const HeaderBrandThin = styled.span`
  font-weight: 300;
`;
