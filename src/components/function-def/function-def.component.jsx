import React, { useEffect, useState, useRef } from 'react';
import { TimelineLite, TweenLite } from 'gsap';
import {
  Fn,
  FnDef,
  Type,
  ReservedWord,
  OpaqueFnText,
  FnResult,
} from './function-def.styles';
import SvgElipisis from './elipisis-component.component';

const FunctionDef = ({ isPub, fnName, self, result }) => {
  const [isHover, setHover] = useState(false);

  const [animationState, setAnimationState] = useState({
    elipisisTimeline: null,
    hoverTimeline: null,
  });

  // References to elements needed for animation
  const [elipisisRef, setElipisisRef] = useState({
    leftCircle: null,
    rightCircle: null,
  });
  const arrow = useRef(null);
  const curlys = useRef(null);
  const fnDef = useRef(null);

  // Set up Animations
  useEffect(() => {
    let elipisisTimeline;
    let hoverTimeline;

    if (
      !animationState.elipisisTimeline &&
      elipisisRef.leftCircle &&
      elipisisRef.rightCircle
    ) {
      elipisisTimeline = new TimelineLite({ repeat: -1, yoyo: true });
      elipisisTimeline.from(elipisisRef.leftCircle, {
        x: '-1.5px',
        duration: 1,
      });
      elipisisTimeline.from(
        elipisisRef.rightCircle,
        {
          x: '1.5px',
          duration: 1,
        },
        '<'
      );
    }

    if (!animationState.hoverTimeline && arrow.current && curlys.current) {
      hoverTimeline = new TimelineLite({ repeat: -1, yoyo: true });
      hoverTimeline.fromTo(
        curlys.current,
        {
          fontWeight: 100,
          duration: 1,
        },
        {
          fontWeight: 600,
          duration: 1,
        }
      );

      hoverTimeline.to(
        arrow.current,
        {
          left: '3px',
          duration: 1,
        },
        '<'
      );
      // hoverTimeline.eventCallback('onComplete', () => {
      //   if (!isHover) {
      //     hoverTimeline.pause();
      //   }
      // });
      hoverTimeline.pause();

      setAnimationState({
        elipisisTimeline,
        hoverTimeline,
      });
    }

    return () => {
      if (animationState.elipisisTimeline && animationState.hoverTimeline) {
        animationState.elipisisTimeline.kill();
        animationState.hoverTimeline.kill();
        setAnimationState({ elipisisTimeline: null, hoverTimeline: null });
      }
    };
    // Need to force a 'DidDismount' event to clear up GSAP
    // However don't want init code running every re-render
    //eslint-disable-next-line
  }, [elipisisRef, curlys, arrow]);

  useEffect(() => {
    const timeline = animationState.hoverTimeline;
    if (!timeline) return;

    if (isHover) {
      timeline.eventCallback('onComplete', null);
      timeline.play();
      TweenLite.to(fnDef.current, {
        opacity: 0.7,
        duration: 0.7,
      });
    } else {
      if (!timeline.reversed()) {
        timeline.iteration(1).reverse();
      }
      timeline.eventCallback('onComplete', () => timeline.pause());
      TweenLite.to(fnDef.current, {
        opacity: 0.1,
        duration: 0.7,
      });
    }
  }, [isHover, animationState.hoverTimeline]);

  return (
    <Fn
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      <FnDef ref={fnDef}>
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
      </FnDef>

      <FnResult>
        <OpaqueFnText ref={arrow} className="arrow">
          {'-> '}
        </OpaqueFnText>
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
            <OpaqueFnText ref={curlys}>
              {'{'}
              <SvgElipisis
                fnName={fnName}
                setElipisisRef={setElipisisRef.bind(this)}
              />
              {'}'}
            </OpaqueFnText>
          </>
        )}
      </FnResult>
    </Fn>
  );
};

export default FunctionDef;
