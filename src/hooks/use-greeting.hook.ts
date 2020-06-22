import { useEffect, useState } from 'react';

export default () => {
  const [showGreeting, setGreeting] = useState<boolean | null>(null);
  const [mountedComponent, setMountedComponent] = useState<boolean>(false);

  const greetingHasBeenShown = () => {
    setGreeting(false);
    window.sessionStorage.setItem('showGreeting', 'false');
    setMountedComponent(true);
  };

  const greetingHasNotBeenShown = () => {
    setGreeting(true);
    window.sessionStorage.setItem('showGreeting', 'true');
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

  return [showGreeting, greetingHasBeenShown, mountedComponent] as [
    boolean | null,
    () => void,
    boolean
  ];
};
