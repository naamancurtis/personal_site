import React, { useRef, useEffect } from 'react';
import { TweenLite } from 'gsap';
import { OpaqueFnText, FnDef } from '../../organisms/function/function.styles';
import {
  Params,
  FunctionName,
} from '../../atoms/function-types/function-types.styles';

type FunctionDefProps = {
  isShown: boolean;
  hideCompletely: boolean;
  fnName: string;
  paramPrefix: string;
};

const FunctionDef = ({
  isShown,
  hideCompletely,
  fnName,
  paramPrefix,
}: FunctionDefProps) => {
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

    if (isShown) {
      TweenLite.to(self.current, {
        opacity: 0.8,
        duration: 0.7,
        fontSize: '1.2em',
      });
    } else {
      TweenLite.to(self.current, {
        opacity: 0.2,
        duration: 0.7,
        fontSize: '0.9em',
      });
    }
  }, [isShown, hideCompletely]);

  return (
    <FnDef ref={self}>
      <OpaqueFnText>pub fn </OpaqueFnText> <FunctionName>{fnName}</FunctionName>
      <OpaqueFnText>{'('}</OpaqueFnText>
      {self ? (
        <>
          <Params>{paramPrefix + 'self'}</Params>
        </>
      ) : null}
      <OpaqueFnText>{') '}</OpaqueFnText>
    </FnDef>
  );
};

export default FunctionDef;
