import React, { useEffect, useState, useRef } from 'react';
import { TimelineLite } from 'gsap';
import { OpaqueFnText, FnResult, FnContent } from '../function.styles';
import SvgElipisis from '../elipisis-component.component';

const FunctionResult = ({ showAnimation, result, isOpen }) => {
  const arrow = useRef(null);
  const curlys = useRef(null);
  const openingCurly = useRef(null);
  const closingCurly = useRef(null);

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
      [openingCurly.current, closingCurly.current],
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
      [openingCurly.current, closingCurly.current],
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

    // If we're hovering
    if (showAnimation && !isOpen) {
      timeline.eventCallback('onComplete', null);
      timeline.play();
      return;
    }

    if (!timeline.reversed()) {
      timeline.iteration(1).reverse();
    }
    timeline.eventCallback('onComplete', () => timeline.pause());
  }, [showAnimation, timeline, isOpen]);

  return (
    <>
      <FnResult>
        <OpaqueFnText ref={arrow} className="arrow">
          {'-> '}
        </OpaqueFnText>
        <>
          <span> {result} </span>
          <span>
            <OpaqueFnText ref={openingCurly}> {'{'}</OpaqueFnText>
            <SvgElipisis hideComponent={isOpen} />
            <FnContent>
              {' '}
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              natus, alias eos omnis culpa molestias. Iure, sequi dolorum! Ullam
              nesciunt veniam et facere veritatis maxime nostrum voluptatum
              magnam distinctio quos.{' '}
            </FnContent>
            <OpaqueFnText
              ref={closingCurly}
              className={isOpen ? 'is-open' : null}
            >
              {'}'}{' '}
            </OpaqueFnText>
          </span>
        </>
      </FnResult>
    </>
  );
};

export default FunctionResult;
