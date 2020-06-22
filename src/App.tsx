import React, { lazy, Suspense } from 'react';
import { ThemeProvider } from 'styled-components';
import { useMedia } from 'react-media';
import Modal from 'react-modal';

import GlobalStyles from './styles/global';
import { darkTheme, lightTheme } from './styles/theme';
import { GLOBAL_MEDIA_QUERIES } from './styles/media';
import useDarkMode from './hooks/use-theme.hook';

import './App.css';

import useGreeting from './hooks/use-greeting.hook';
import { Loading } from './atoms/loading/loading.component';
import setupFontAwesome from './setupFontAwesome';

import { gsap } from 'gsap';
import { CSSPlugin } from 'gsap/CSSPlugin';

import ReactGA from 'react-ga';
import ErrorBoundary from './atoms/error-boundary/error-boundary.component';

import Header from './organisms/header/header.component';
import Footer from './molecules/footer/footer.component';
import ServiceWorkerWrapper from './molecules/service-worker-wrapper/service-worker-wrapper.component';

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
const Main = lazy(() => import('./templates/main/main.component'));
const SocialBar = lazy(() =>
  import('./molecules/social-bar/social-bar.component')
);

// React Modal Setup

Modal.setAppElement('#root');

// Error Handling

const renderLoader = () => <Loading />;

// App Starts Here

const App = () => {
  // App Theming
  const [theme, toggleTheme, mountedComponent] = useDarkMode();
  const themeMode = theme === 'dark' ? darkTheme : lightTheme;

  // Initial Greeting Animation
  const [
    shouldShowGreeting,
    greetingHasBeenShown,
    readyToMount,
  ] = useGreeting();

  // Adaptive Design for Mobile
  const isMobile = useMedia({ query: GLOBAL_MEDIA_QUERIES.mobile });

  // If we're not ready to render, just render an empty div
  if (!mountedComponent || !readyToMount) return <div />;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <Header toggleTheme={toggleTheme} />
      <ServiceWorkerWrapper />
      <ErrorBoundary>
        <Suspense fallback={renderLoader()}>
          {isMobile ? null : (
            <SocialBar isHidden={false} setIsHidden={() => {}} />
          )}
          {shouldShowGreeting === true ? (
            <Greeting setGreetingShown={greetingHasBeenShown} />
          ) : (
            <Main />
          )}
        </Suspense>
      </ErrorBoundary>
      <Footer />
    </ThemeProvider>
  );
};

export default App;

