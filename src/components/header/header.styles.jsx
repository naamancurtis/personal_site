import styled from 'styled-components';
import LightenDarkenColor from '../../styles/utility.functions';

const StyledHeader = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  // box-shadow: 0 6px 10px 0 ${(props) => LightenDarkenColor(props.theme.body, -3)};
  padding: 0 2rem;
  align-items: center;
  justify-content: space-between;
`;

export default StyledHeader;

export const HeaderBrand = styled.span`
  font-family: 'Fifteen', 'monospace';
  color: ${(props) => props.theme.oppositeBackground};
  font-weight: 800;
`;

export const HeaderBrandThin = styled.span`
  font-weight: 300;
`;
