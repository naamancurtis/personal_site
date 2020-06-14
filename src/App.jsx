import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from './styles/global';
import { darkTheme, lightTheme } from './styles/theme';
import Header from './components/header/header.component';
import IntroAnimation from './components/greeting/greeting.component';
import Main from './pages/main/main.component';
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
import SocialBar from './components/social-bar/social-bar.component';

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
  const [theme, setTheme] = useState('dark');
  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  const [hasPlayedIntro, setIntro] = useState(true);

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Header toggleTheme={toggleTheme} />
      <SocialBar />
      {hasPlayedIntro ? (
        <Main />
      ) : (
        <IntroAnimation toggleTyped={() => setIntro(!hasPlayedIntro)} />
      )}
    </ThemeProvider>
  );
};

export default App;
