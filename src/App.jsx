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
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { faEnvelopeOpen } from '@fortawesome/free-regular-svg-icons';

library.add(faLongArrowAltRight, faEnvelopeOpen);

// App Starts Here

const App = () => {
  const [theme, setTheme] = useState('dark');
  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  const [hasPlayedIntro, setIntro] = useState(true);

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Header toggleTheme={toggleTheme} />
      {hasPlayedIntro ? (
        <Main />
      ) : (
        <IntroAnimation toggleTyped={() => setIntro(!hasPlayedIntro)} />
      )}
    </ThemeProvider>
  );
};

export default App;
