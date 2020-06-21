import styled from 'styled-components';

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4px;
`;

export const Name = styled.span`
  font-family: ${({ theme }) => theme.fonts.heading};
  display: inline-block;
  letter-spacing: 0.5px;
  font-weight: 500;
  opacity: 0;
  width: 0;
  position: relative;
  top: 2px;
  text-align: center;
`;

export const CurlyBracket = styled.span`
  font-family: ${({ theme }) => theme.fonts.code};
  font-weight: 300;
  font-size: 18px;

  &.left {
    padding-left: 56px;
  }
`;
