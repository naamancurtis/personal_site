import React, { useEffect, useRef } from 'react';
import { TweenLite } from 'gsap';

import MainWrapper from './main.styles';
import Nav from '../../components/nav/nav.component';

const Main = () => {
  const self = useRef(null);

  useEffect(() => {
    if (!self) return;

    TweenLite.to(self.current, {
      opacity: 1,
      duration: 0.75,
    });
  }, [self]);

  return (
    <MainWrapper ref={self}>
      <Nav />
    </MainWrapper>
  );
};

export default Main;
