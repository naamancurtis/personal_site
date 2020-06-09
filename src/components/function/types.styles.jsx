import styled from 'styled-components';

export const Type = styled.span`
  color: ${({ theme }) => theme.secondaryAccent};
  font-weight: 500;
`;

export const BoldType = styled(Type)`
  font-weight: 900;
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
