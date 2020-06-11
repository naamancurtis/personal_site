import React, { useRef, useState, useEffect } from 'react';
import { TimelineLite } from 'gsap';
import { Name, LogoWrapper, CurlyBracket } from './logo.styles';

const Logo = () => {
  const leftCurly = useRef(null);
  const rightCurly = useRef(null);
  const name = useRef(null);

  const [timeline, setTimeline] = useState(new TimelineLite());

  useEffect(() => {
    if (!leftCurly || !rightCurly || !name) return;

    if (!timeline) {
      setTimeline(new TimelineLite());
      return;
    }

    timeline.to(leftCurly.current, {
      paddingLeft: 0,
      duration: 1.5,
    });
    timeline.to(
      rightCurly.current,
      {
        duration: 1.5,
      },
      '<'
    );

    timeline.to(
      name.current,
      {
        width: '115px',
        duration: 1.5,
      },
      '<'
    );

    timeline
      .to(
        name.current,
        {
          duration: 1.5,
          opacity: 1,
        },
        '-=0.25'
      )
      .eventCallback('onComplete', () => timeline.kill());

    return () => timeline.kill();
  }, [timeline]);

  return (
    <LogoWrapper>
      <CurlyBracket ref={leftCurly} className="left">
        {'{'}
      </CurlyBracket>
      <Name ref={name}> {' Naaman Curtis '.toUpperCase()} </Name>
      <CurlyBracket ref={rightCurly}>{'}'}</CurlyBracket>
    </LogoWrapper>
  );
};

export default Logo;
