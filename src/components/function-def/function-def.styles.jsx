import styled from 'styled-components';

export const StyledFnDef = styled.div`
  font-family: ${({ theme }) => theme.fonts.code};
  color: ${({ theme }) => theme.text};
  padding-left: 20px;
`;

export const OpaqueFnText = styled.span`
  opacity: 0.5;
  font-weight: 400;

  &.arrow {
    position: relative;
  }
`;

export const BoldType = styled.span`
  color: ${({ theme }) => theme.secondaryAccent};
  font-weight: 900;
`;

export const Type = styled.span`
  color: ${({ theme }) => theme.secondaryAccent};
  font-weight: 500;
`;

export const Keyword = styled.span`
  color: ${({ theme }) => theme.tertiaryAccent};
  font-weight: 500;
`;

export const OpaqueKeyword = styled(Keyword)`
  opacity: 0.75;
`;

export const Trait = styled.span`
  color: ${({ theme }) => theme.quarternayAccent};
  font-weight: 700;
`;

export const ReservedWord = styled(Trait)`
  font-weight: 500;
  opacity: 0.75;
`;
