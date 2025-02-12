import styled from 'styled-components';
import media from '../../styles/media';

export const GreetingWrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${media.tablet`
    padding-left: 4rem;
    padding-right: 4rem;
  `};
`;

export const Greeting = styled.div`
  font-size: 11vw;
  letter-spacing: 2.5px;
  overflow: hidden;
  font-family: ${({ theme }) => theme.fonts.code};
  font-weight: 300;

  ${media.desktop`
    font-size: 8vw;
  `}
`;

export const Name = styled.div`
  font-size: 7vw;
  margin-bottom: 1rem;
  font-family: ${({ theme }) => theme.fonts.code};
  font-weight: 900;
  color: ${({ theme }) => theme.type};
  overflow: hidden;
  height: 8vw;

  ${media.desktop`
    font-size: 5vw;
    height: 6vw;
  `}

  .leader-text {
    font-family: ${({ theme }) => theme.fonts.code};
    font-weight: 300;
    display: inline-block;
    vertical-align: top;
    overflow: hidden;
    height: 9vw;
    color: ${({ theme }) => theme.text};
  }
`;

export const Role = styled.div`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight: normal;
  font-size: 5vw;
  letter-spacing: 1.6px;
  opacity: 0;
  color: ${({ theme }) => theme.trait};

  ${media.desktop`
    font-size: 4vw;
  `};
`;
