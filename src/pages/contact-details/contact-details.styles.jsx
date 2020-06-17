import styled from 'styled-components';

export const FormTitle = styled.h2`
  margin-bottom: 1em;
  font-family: ${({ theme }) => theme.fonts.heading};
  letter-spacing: 1.2px;
  font-weight: 500;
  margin-bottom: 2rem;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

