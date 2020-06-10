import React, { useEffect, useState, useRef } from 'react';
import { TimelineLite } from 'gsap';
import { OpaqueFnText, FnResult } from '../function.styles';
import SvgElipisis from '../elipisis-component.component';

const FunctionResult = ({ showAnimation, result, isOpen }) => {
  const arrow = useRef(null);
  const curlys = useRef(null);

  const [timeline, setTimeline] = useState(
    new TimelineLite({ repeat: -1, yoyo: true })
  );

  // Set up Animation Timeline
  useEffect(() => {
    if (!arrow || !curlys) return;

    if (!timeline) {
      setTimeline(new TimelineLite({ repeat: -1, yoyo: true }));
      return;
    }

    timeline.fromTo(
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

    timeline.to(
      arrow.current,
      {
        left: '3px',
        duration: 1,
      },
      '<'
    );
    timeline.pause();

    return () => timeline.kill();
  }, [timeline]);

  // Manage play/pause of timeline
  useEffect(() => {
    if (!timeline) return;

    if (showAnimation) {
      timeline.eventCallback('onComplete', null);
      timeline.play();
    } else {
      if (!timeline.reversed()) {
        timeline.iteration(1).reverse();
      }
      timeline.eventCallback('onComplete', () => timeline.pause());
    }
  }, [showAnimation, timeline]);

  return (
    <>
      <FnResult>
        <OpaqueFnText ref={arrow} className="arrow">
          {'-> '}
        </OpaqueFnText>
        <>
          <span> {result} </span>
          <OpaqueFnText ref={curlys}>
            {'{'}
            <SvgElipisis hideComponent={isOpen} />
            {'}'}
          </OpaqueFnText>
        </>
      </FnResult>
    </>
  );
};

export default FunctionResult;
