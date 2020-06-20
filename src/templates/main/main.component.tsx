import React, { useEffect, useRef } from 'react';
import { TweenLite } from 'gsap';

import MainWrapper from './main.styles';
import ImplBlock from '../../organisms/impl-block/impl-block.component';

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
      <ImplBlock />
    </MainWrapper>
  );
};

export default Main;
