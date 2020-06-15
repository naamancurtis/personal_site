import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { useMedia } from 'react-media';

import GlobalStyles from './styles/global';
import { darkTheme, lightTheme } from './styles/theme';
import { GLOBAL_MEDIA_QUERIES } from './styles/media';
import { useDarkMode } from './styles/use-theme';

import Header from './components/header/header.component';
import IntroAnimation from './components/greeting/greeting.component';
import Main from './pages/main/main.component';
import SocialBar from './components/social-bar/social-bar.component';

import './App.css';
// Font Awesome Setup
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faLongArrowAltRight,
  faEnvelope,
  faUserPlus,
} from '@fortawesome/free-solid-svg-icons';
import { faEnvelopeOpen } from '@fortawesome/free-regular-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

library.add(
  faLongArrowAltRight,
  faEnvelopeOpen,
  faGithub,
  faEnvelope,
  faLinkedin,
  faUserPlus
);

// App Starts Here

const App = () => {
  const [theme, toggleTheme, mountedComponent] = useDarkMode();
  const themeMode = theme === 'dark' ? darkTheme : lightTheme;

  const [hasPlayedIntro, setIntro] = useState(true);

  const isMobile = useMedia({ query: GLOBAL_MEDIA_QUERIES.mobile });

  if (!mountedComponent) return <div />;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <Header toggleTheme={toggleTheme} />
      {isMobile ? null : <SocialBar />}
      {hasPlayedIntro ? (
        <Main />
      ) : (
        <IntroAnimation toggleTyped={() => setIntro(!hasPlayedIntro)} />
      )}
    </ThemeProvider>
  );
};

export default App;
