import styled from 'styled-components';

export const LogoWrapper = styled.div`
  display: flex; 
  align-items: center;
`;

export const Name = styled.span`
  display: inline-block;
  letter-spacing: 1.2px;
  font-weight: 300;
  opacity: 0;
  width: 0;
  text-align: center;
`;

export const CurlyBracket = styled.span`
  font-family: 'Fira Code', source-code-pro;
  font-weight: 400;

  &.left {
    padding-left: 56px;
  }
`;
