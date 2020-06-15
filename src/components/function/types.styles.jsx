import styled from 'styled-components';

export const Type = styled.span`
  color: ${({ theme }) => theme.type};
  font-weight: 500;
`;

export const BoldType = styled(Type)`
  font-weight: 700;
`;

export const FunctionName = styled.span`
  color: ${({ theme }) => theme.fnDef};
  font-weight: 500;
`;

export const Keyword = styled.span`
  color: ${({ theme }) => theme.keyword};
  font-weight: 500;
`;

export const BoldKeyword = styled(Keyword)`
  font-weight: 700;
`;

export const OpaqueKeyword = styled(Keyword)`
  opacity: 0.75;
`;

export const Trait = styled.span`
  color: ${({ theme }) => theme.trait};
  font-weight: 700;
`;

export const Params = styled.span`
  color: ${({ theme }) => theme.params};
  font-weight: 500;
  opacity: 0.75;
`;

export const FunctionResultStyle = styled.span`
  color: ${({ theme }) => theme.return};
  font-weight: 700;
`;
