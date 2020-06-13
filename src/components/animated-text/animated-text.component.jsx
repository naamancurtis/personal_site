import React, { useState, useEffect, useRef } from 'react';
import { TimelineLite } from 'gsap';
import {
  AnimatedH2,
  AnimationWrapper,
  AnimatedCursor,
} from './animated-text.styles';

const AnimatedText = ({ text, isOpen }) => {
  const animatedText = useRef(null);
  const cursor = useRef(null);
  const [timeline, setTimeline] = useState(new TimelineLite());

  // Set up Timeline
  useEffect(() => {
    if (!animatedText || !cursor) return;
    if (!timeline) {
      setTimeline(new TimelineLite());
      return;
    }

    timeline
      .set(cursor.current, { transformOrigin: '0% 0%', scaleX: 0 })
      .to(cursor.current, {
        duration: 1.5,
        scaleX: 1,
        ease: 'back.out(1.7)',
        delay: 3.5,
      })
      .to(
        animatedText.current,
        {
          duration: 0.1,
          opacity: 1,
        },
        '-=0.1'
      )
      .to(cursor.current, {
        duration: 2,
        scaleX: 0,
      });

    return () => timeline.kill();
  }, [timeline]);

  // Manage play/pausing of the timeline
  useEffect(() => {
    if (!animatedText || !timeline || !cursor) return;

    if (!isOpen) {
      timeline.pause();
    } else {
      timeline.restart();
    }
  }, [isOpen, timeline]);

  return (
    <AnimationWrapper>
      <AnimatedCursor ref={cursor} />
      <AnimatedH2 ref={animatedText}>{text}</AnimatedH2>
    </AnimationWrapper>
  );
};

export default AnimatedText;
