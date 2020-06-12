import styled from 'styled-components';
import { hexToRgb } from '../../styles/utility.functions';

export const SkillCardWrapper = styled.div`
  padding-top: 1rem;
  display: inline-flex;
`;

export const SkillImg = styled.img`
  max-width: 100px;
  max-height: 100px;
  min-height: 100px;
  min-width: 100px;
  width: 100%;
  height: auto;
  margin-right: 1rem;
  position: relative;
`;

export const HelpText = styled.div`
  display: inline-flex;
  font-size: 0.9em;
  font-weight: 700;
  position: absolute;
  height: 100px;
  width: 100px;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.35s;

  &:hover {
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => {
      const rgb = hexToRgb(theme.body);
      if (rgb) {
        return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.8)`;
      }
      return theme.body;
    }};
    opacity: 1;
  }
`;

export const SmallText = styled.p`
  font-size: 0.8em;
`;
