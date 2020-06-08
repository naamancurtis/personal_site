import React, { useEffect, useState } from 'react';
import { TimelineLite } from 'gsap';
import {
  StyledFnDef,
  Type,
  ReservedWord,
  OpaqueFnText,
} from './function-def.styles';
import SvgElipisis from './elipisis-component.component';

const FunctionDef = ({ isPub, fnName, self, result }) => {
  const [animationState, setAnimationState] = useState({
    elipisisTimeline: null,
    hoverTimeline: null,
  });

  const [isHover, setHover] = useState(false);

  // Set up Animations
  useEffect(() => {
    if (!animationState.elipisisTimeline) {
      const timeline = new TimelineLite({ repeat: -1, yoyo: true });
      timeline.from('circle.circle-1', {
        x: '-1.5px',
        duration: 1,
      });
      timeline.from(
        'circle.circle-3',
        {
          x: '1.5px',
          duration: 1,
        },
        '<'
      );
      setAnimationState({ ...animationState, elipisisTimeline: timeline });
    }

    if (!animationState.hoverTimeline) {
      const hoverTimeline = new TimelineLite({ repeat: -1, yoyo: true });
      hoverTimeline.fromTo(
        '.expand',
        {
          fontWeight: 100,
          duration: 1,
        },
        {
          fontWeight: 600,
          duration: 1,
          repeat: -1,
          yoyo: true,
        }
      );

      hoverTimeline.to(
        '.arrow',
        {
          left: '3px',
          duration: 1,
          repeat: -1,
          yoyo: true,
        },
        '<'
      );
      hoverTimeline.pause();

      setAnimationState({
        ...animationState,
        hoverTimeline,
      });
    }

    return () => {
      if (animationState.timeline && animationState.curlys) {
        animationState.timeline.kill();
        animationState.curlys.kill();
      }
    };
  }, []);

  useEffect(() => {
    const timeline = animationState.hoverTimeline;
    if (!timeline) return;

    if (isHover) {
      timeline.eventCallback('onComplete', null);
      timeline.play();
    } else {
      if (!timeline.reversed()) {
        timeline.reverse();
      }
      timeline.eventCallback('onComplete', () => timeline.reset());
    }
  }, [isHover]);

  return (
    <StyledFnDef
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      {isPub ? <OpaqueFnText>pub </OpaqueFnText> : null}
      <OpaqueFnText>fn </OpaqueFnText>
      <Type>{fnName}</Type>
      <OpaqueFnText>{'('}</OpaqueFnText>
      {self ? (
        <>
          <ReservedWord>{self['prefix'] + 'self'}</ReservedWord>
        </>
      ) : null}
      <OpaqueFnText>{') '}</OpaqueFnText>
      <OpaqueFnText className="arrow">{'-> '}</OpaqueFnText>
      {result['generic'] ? (
        <>
          <ReservedWord>{result['result']}</ReservedWord>
          {'<'}
          <OpaqueFnText>{result['generic']}</OpaqueFnText>
          {'> {...}'}
        </>
      ) : (
        <>
          <Type> {result['result']} </Type>
          <OpaqueFnText className="expand">
            {'{'}
            <SvgElipisis />
            {'}'}
          </OpaqueFnText>
        </>
      )}
    </StyledFnDef>
  );
};

export default FunctionDef;
