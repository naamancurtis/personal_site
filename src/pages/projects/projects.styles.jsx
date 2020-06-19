import styled from 'styled-components';
import media from '../../styles/media';

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: max-content;
  max-width: 100%;
  margin: 0 auto;
`;

export const ProjectWrapper = styled.div`
  text-align: left;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NextButton = styled.button`
  font-size: 50px;
  color: ${({ theme }) => theme.text};
  background-color: transparent;
  border: none;
  height: 60px;
  cursor: pointer;
  overflow: visible;
  z-index: 50;
`;

export const CardStackWrapper = styled.div`
  position: relative;
  height: 600px;
  width: 100%;
  min-width: 325px;
  max-width: 400px;
  display: flex;
  justify-content: center;
  margin: 0 1rem;

  ${media.tablet`
  max-width: 470px;
  width: 50%;
  min-width: 400px;
  `}

  ${media.desktop`
  max-width: 550px;
  min-width: 450px;
`}
`;

export const CardIndicatorWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: ${({ theme }) => theme.text};
  font-size: 1rem;
  width: 50%;
  height: max-content;
  margin-top: 2rem;
`;
