import React, { useEffect, useState, useRef } from 'react';
import { TimelineLite } from 'gsap';
import { Type } from './types.styles';
import { Fn, FnDef, OpaqueFnText, FnResult } from './function.styles';
import FunctionDef from './function-def/function-def.component';
import SvgElipisis from './elipisis-component.component';

const Function = ({ route, contentComponent }) => {
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
    } else {
      if (!timeline.reversed()) {
        timeline.iteration(1).reverse();
      }
      timeline.eventCallback('onComplete', () => timeline.pause());
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
      <FunctionDef
        isHover={isHover}
        fnName={route.name}
        paramPrefix={route.paramPrefix}
      />
      <FnResult>
        <OpaqueFnText ref={arrow} className="arrow">
          {'-> '}
        </OpaqueFnText>
        <>
          <Type> {route.result} </Type>
          <OpaqueFnText ref={curlys}>
            {'{'}
            <SvgElipisis setElipisisRef={setElipisisRef.bind(this)} />
            {'}'}
          </OpaqueFnText>
        </>
      </FnResult>
      {contentComponent}
    </Fn>
  );
};

export default Function;
