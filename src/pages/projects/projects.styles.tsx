import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import media from '../../styles/media';
import { defaultBoxShadowCss } from '../../styles/neumorphic';
import { pSBC, convertRgbStrToObject } from '../../styles/utility.functions';

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
  font-size: 35px;
  color: ${({ theme }) => theme.text};
  background-color: transparent;
  border: none;
  height: 60px;
  cursor: pointer;
  overflow: visible;
  z-index: 50;

  &:focus {
    outline: none;
  }

  ${media.tablet`
    font-size: 50px;
  `}
`;

export const CardStackWrapper = styled.div`
  position: relative;
  height: 600px;
  width: 100%;
  min-width: 325px;
  max-width: 400px;
  display: flex;
  justify-content: center;
  margin: 0 0.25rem;

  ${media.tablet`
    max-width: 470px;
    width: 50%;
    min-width: 400px;
    margin: 0 1rem;
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

export const StyledCircle = styled(FontAwesomeIcon)`
  ${defaultBoxShadowCss};
  border-radius: 50%;
  cursor: pointer;
`;

export const StyledArrow = styled(FontAwesomeIcon)`
  ${({ theme }) => {
    // Dark Mode
    if (theme.theme === 'dark') {
      const primaryRgb = convertRgbStrToObject(pSBC(-0.3, theme.body, 'c'));

      return `
  filter: drop-shadow(3px 3px 1px rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, 1));
        `;
    }

    // Light Mode
    const secondaryRgb = convertRgbStrToObject(
      pSBC(0.1, theme.contrastBody, 'c')
    );

    return `
  filter: drop-shadow(3px 3px 1px rgba(${secondaryRgb.r}, ${secondaryRgb.g}, ${secondaryRgb.b}, 0.3));
        `;
  }};
`;
