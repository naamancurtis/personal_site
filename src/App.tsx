import React, { lazy, Suspense } from 'react';
import { ThemeProvider } from 'styled-components';
import { useMedia } from 'react-media';
import Modal from 'react-modal';

import GlobalStyles from './styles/global';
import { darkTheme, lightTheme } from './styles/theme';
import { GLOBAL_MEDIA_QUERIES } from './styles/media';
import useDarkMode from './styles/use-theme';

import './App.css';

import useGreeting from './storage/use-greeting';
import Loading from './atoms/loading/loading.component';
import setupFontAwesome from './setupFontAwesome';

import { gsap } from 'gsap';
import { CSSPlugin } from 'gsap/CSSPlugin';

import ReactGA from 'react-ga';

// Set up Font Awesome

setupFontAwesome();

// Set up Gsap (Need to stop the tree shaking from removing it)
gsap.registerPlugin(CSSPlugin);

// Google Analytics

ReactGA.initialize('UA-170181531-1', {
  gaOptions: {
    siteSpeedSampleRate: 100,
  },
});
ReactGA.pageview('/');

// Lazy Load Components

const Greeting = lazy(() => import('./organisms/greeting/greeting.component'));
const Header = lazy(() => import('./organisms/header/header.component'));
const Footer = lazy(() => import('./molecules/footer/footer.component'));
const Main = lazy(() => import('./templates/main/main.component'));
const SocialBar = lazy(() =>
  import('./molecules/social-bar/social-bar.component')
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
      <Suspense fallback={<Loading />}>
        <GlobalStyles />
        <Header toggleTheme={toggleTheme} />
        {isMobile ? null : (
          <SocialBar isHidden={false} setIsHidden={() => {}} />
        )}
        {shouldShowGreeting === true ? (
          <Greeting setGreetingShown={greetingHasBeenShown} />
        ) : (
          <Main />
        )}
        <Footer />
      </Suspense>
    </ThemeProvider>
  );
};

export default App;
