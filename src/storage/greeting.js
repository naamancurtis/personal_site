import { useEffect, useState } from 'react';

export const useGreeting = () => {
  const [showGreeting, setGreeting] = useState(null);
  const [mountedComponent, setMountedComponent] = useState(false);

  const greetingHasBeenShown = () => {
    setGreeting(false);
    window.sessionStorage.setItem('showGreeting', false);
    setMountedComponent(true);
  };

  const greetingHasNotBeenShown = () => {
    setGreeting(true);
    window.sessionStorage.setItem('showGreeting', true);
    setMountedComponent(true);
  };

  useEffect(() => {
    const shouldShowGreeting = window.sessionStorage.getItem('showGreeting');

    if (shouldShowGreeting === 'false') {
      greetingHasBeenShown();
    } else if (shouldShowGreeting === null) {
      greetingHasNotBeenShown();
    }
  }, [showGreeting]);

  return [showGreeting, greetingHasBeenShown, mountedComponent];
};
