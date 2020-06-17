import React, { useState, useEffect, useRef } from 'react';
import { useMedia } from 'react-media';
import PropTypes from 'prop-types';

import {
  StyledHeader,
  HeaderIconWrapper,
  HeaderIconsWrapper,
  HeaderTextLink,
} from './header.styles';
import ThemeToggleButton from '../theme-toggle-button/theme-toggler-button.component';
import Logo from './logo/logo.component';
import { GLOBAL_MEDIA_QUERIES } from '../../styles/media';
import SocialBar from '../social-bar/social-bar.component';

const Header = ({ toggleTheme }) => {
  const [socialDrawHidden, setSocialDraw] = useState(true);
  const self = useRef(null);
  const socialDraw = useRef(null);

  const isMobile = useMedia({ query: GLOBAL_MEDIA_QUERIES.mobile });

  const handleScroll = () => {
    if (!self) return;
    if (window.scrollY > 15) {
      self.current.classList.add('scrolled');
      if (socialDraw && socialDraw.current) {
        socialDraw.current.classList.add('scrolled');
      }
    } else {
      self.current.classList.remove('scrolled');
      if (socialDraw && socialDraw.current) {
        socialDraw.current.classList.remove('scrolled');
      }
    }
  };

  // Set up listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {isMobile ? (
        <SocialBar
          ref={socialDraw}
          isHidden={socialDrawHidden}
          setIsHidden={setSocialDraw}
          showText
        />
      ) : null}
      <StyledHeader ref={self}>
        <Logo />
        <HeaderIconsWrapper>
          {isMobile ? (
            <>
              <HeaderIconWrapper
                className={socialDrawHidden ? null : 'is-open'}
              >
                <HeaderTextLink
                  onClick={() => setSocialDraw(!socialDrawHidden)}
                >
                  {'Contact Me'.toUpperCase()}
                </HeaderTextLink>
              </HeaderIconWrapper>
            </>
          ) : null}
          <ThemeToggleButton toggleTheme={toggleTheme} />
        </HeaderIconsWrapper>
      </StyledHeader>
    </>
  );
};

Header.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
};

export default Header;
