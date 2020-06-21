import styled from 'styled-components';

export const FormTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  letter-spacing: 1.2px;
  font-weight: 500;
  margin: 2rem 0;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const SocialWrapper = styled.div`
  width: 70%;
  margin: 0 2rem;
`;
