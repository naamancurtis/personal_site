import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useMedia } from 'react-media';
import Modal from 'react-modal';

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
  faEnvelopeOpen,
  faUserPlus,
  faExclamationCircle,
  faSpinner,
  faCheckCircle,
  faTimesCircle,
  faTimes,
  faCode,
  faDesktop,
  faChevronLeft,
  faChevronRight,
  faCircle as filledCircle,
  faLightbulb as solidLightbulb,
} from '@fortawesome/free-solid-svg-icons';
import {
  faLightbulb,
  faNewspaper,
  faCircle as emptyCircle,
} from '@fortawesome/free-regular-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useGreeting } from './storage/greeting';

library.add(
  faLongArrowAltRight,
  faEnvelopeOpen,
  faGithub,
  faEnvelope,
  faLinkedin,
  faUserPlus,
  faLightbulb,
  faExclamationCircle,
  faSpinner,
  faCheckCircle,
  faTimesCircle,
  faTimes,
  faCode,
  faDesktop,
  faChevronRight,
  faChevronLeft,
  solidLightbulb,
  faNewspaper,
  filledCircle,
  emptyCircle
);

// React Modal Setup

Modal.setAppElement('#root');

// App Starts Here

const App = () => {
  const [theme, toggleTheme, mountedComponent] = useDarkMode();
  const themeMode = theme === 'dark' ? darkTheme : lightTheme;

  const [
    shouldShowGreeting,
    greetingHasBeenShown,
    readyToMount,
  ] = useGreeting();

  const isMobile = useMedia({ query: GLOBAL_MEDIA_QUERIES.mobile });

  if (!mountedComponent || !readyToMount) return <div />;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <Header toggleTheme={toggleTheme} />
      {isMobile ? null : <SocialBar />}
      {shouldShowGreeting === true ? (
        <IntroAnimation setGreetingShown={greetingHasBeenShown} />
      ) : (
        <Main />
      )}
    </ThemeProvider>
  );
};

export default App;
