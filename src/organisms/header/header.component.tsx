import React, { useState, useEffect, useRef } from 'react';
import { useMedia } from 'react-media';

import debounce from 'lodash.debounce';
import {
  StyledHeader,
  HeaderIconWrapper,
  HeaderIconsWrapper,
  HeaderTextLink,
} from './header.styles';
import ThemeToggleButton from '../../atoms/theme-toggle-button/theme-toggler-button.component';
import Logo from '../../atoms/logo/logo.component';
import { GLOBAL_MEDIA_QUERIES } from '../../styles/media';
import SocialBar from '../../molecules/social-bar/social-bar.component';

type HeaderProps = { toggleTheme: () => void };

const Header = ({ toggleTheme }: HeaderProps) => {
  const [socialDrawHidden, setSocialDraw] = useState(true);
  const self = useRef<HTMLDivElement | null>(null);
  const socialDraw = useRef<HTMLDivElement | null>(null);

  const isMobile = useMedia({ query: GLOBAL_MEDIA_QUERIES.mobile });

  const handleScroll = () => {
    if (!self) return;
    if (window.scrollY > 15) {
      self.current!.classList.add('scrolled');
      if (socialDraw && socialDraw.current) {
        socialDraw.current.classList.add('scrolled');
      }
    } else {
      self.current!.classList.remove('scrolled');
      if (socialDraw && socialDraw.current) {
        socialDraw.current.classList.remove('scrolled');
      }
    }
  };

  const debouncedHandler = debounce(handleScroll, 50);

  // Set up listener
  useEffect(() => {
    window.addEventListener('scroll', debouncedHandler, { passive: true });
    return () => {
      window.removeEventListener('scroll', debouncedHandler);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {isMobile ? (
        <SocialBar
          ref={socialDraw}
          isHidden={socialDrawHidden}
          setIsHidden={setSocialDraw}
        />
      ) : null}
      <StyledHeader ref={self} role="banner">
        <Logo />
        <HeaderIconsWrapper>
          {isMobile ? (
            <>
              <HeaderIconWrapper className={socialDrawHidden ? '' : 'is-open'}>
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

export default Header;
