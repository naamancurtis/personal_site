import React, { useRef, useEffect } from 'react';
import { TweenLite } from 'gsap';
import { OpaqueFnText, FnDef } from '../function.styles';
import { Type, ReservedWord } from '../types.styles';

const FunctionDef = ({ isHover, hideCompletely, fnName, paramPrefix }) => {
  const self = useRef(null);

  useEffect(() => {
    if (!self) return;

    if (hideCompletely) {
      TweenLite.to(self.current, {
        opacity: 0,
        duration: 0.7,
      });
      return;
    }

    if (isHover) {
      TweenLite.to(self.current, {
        opacity: 0.7,
        duration: 0.7,
        fontSize: '1em',
      });
    } else {
      TweenLite.to(self.current, {
        opacity: 0.1,
        duration: 0.7,
        fontSize: '0.7em',
      });
    }
  }, [isHover, hideCompletely]);

  return (
    <FnDef ref={self}>
      <OpaqueFnText>pub fn </OpaqueFnText> <Type>{fnName}</Type>
      <OpaqueFnText>{'('}</OpaqueFnText>
      {self ? (
        <>
          <ReservedWord>{paramPrefix + 'self'}</ReservedWord>
        </>
      ) : null}
      <OpaqueFnText>{') '}</OpaqueFnText>
    </FnDef>
  );
};

export default FunctionDef;
