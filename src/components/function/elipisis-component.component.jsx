import React, { useContext, useEffect, useRef, useState } from 'react';
import { TimelineLite, TweenLite } from 'gsap';
import { ThemeContext } from 'styled-components';

const SvgElipisis = ({ hideComponent }) => {
  const theme = useContext(ThemeContext);
  const self = useRef(null);
  const leftCircle = useRef(null);
  const rightCircle = useRef(null);
  const [timeline, setTimeline] = useState(
    new TimelineLite({ repeat: -1, yoyo: true })
  );

  useEffect(() => {
    if (!leftCircle || !rightCircle) return;

    if (!timeline) {
      setTimeline(new TimelineLite({ repeat: -1, yoyo: true }));
      return;
    }

    timeline.from(
      leftCircle.current,
      {
        x: '-1.5px',
        duration: 1,
      },
      0
    );
    timeline.from(
      rightCircle.current,
      {
        x: '1.5px',
        duration: 1,
      },
      '<'
    );
    timeline.play();

    return () => timeline.kill();
  }, [leftCircle, rightCircle, timeline]);

  useEffect(() => {
    if (!self) return;

    if (hideComponent) {
      TweenLite.to(self.current, {
        opacity: 0,
        duration: 0.5,
      });
      timeline.pause();
    } else {
      TweenLite.to(self.current, {
        opacity: 1,
        duration: 0.5,
      });
      timeline.play();
    }
  });

  return (
    <svg
      style={{
        isolation: 'isolate',
      }}
      viewBox="653.5 350 35 10"
      width={20}
      height="5pt"
      overflow="visible"
      fill={theme.text}
      ref={self}
    >
      <defs>
        <clipPath id="elipisis_svg__a">
          <path d="M660 355.664h21.784v5H660z" />
        </clipPath>
      </defs>
      <g>
        <circle
          ref={leftCircle}
          vectorEffect="non-scaling-stroke"
          cx={662.5}
          cy={358.164}
          r={2.5}
        />
        <circle
          vectorEffect="non-scaling-stroke"
          cx={670.892}
          cy={358.164}
          r={2.5}
        />
        <circle
          ref={rightCircle}
          vectorEffect="non-scaling-stroke"
          cx={679.284}
          cy={358.164}
          r={2.5}
        />
      </g>
    </svg>
  );
};

export default SvgElipisis;
