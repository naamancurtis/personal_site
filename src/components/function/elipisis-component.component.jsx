import React, { useContext, useEffect, useRef, useState } from 'react';
import { TimelineLite } from 'gsap';
import { ThemeContext } from 'styled-components';

const SvgElipisis = ({ hideComponent }) => {
  const theme = useContext(ThemeContext);
  const self = useRef(null);
  const leftCircle = useRef(null);
  const rightCircle = useRef(null);
  // Used two make the two outer dots bounce in and out
  const [yoyoTimeline, setYoyoTimeline] = useState(
    new TimelineLite({ repeat: -1, yoyo: true })
  );

  // Transition state between hidden and showing
  const [hiddenTimeline, setHiddenTimeline] = useState(new TimelineLite());

  useEffect(() => {
    if (!leftCircle || !rightCircle) return;

    if (!yoyoTimeline) {
      setYoyoTimeline(new TimelineLite({ repeat: -1, yoyo: true }));
      return;
    }

    yoyoTimeline
      .from(
        leftCircle.current,
        {
          x: '-1.5px',
          duration: 1,
        },
        0
      )
      .from(
        rightCircle.current,
        {
          x: '1.5px',
          duration: 1,
        },
        '<'
      )
      .play();

    return () => yoyoTimeline.kill();
  }, [leftCircle, rightCircle, yoyoTimeline]);

  // Should only be run once
  useEffect(() => {
    if (!self) return;

    if (!hiddenTimeline) {
      setHiddenTimeline(new TimelineLite());
      return;
    }

    hiddenTimeline.pause().to(
      self.current,
      {
        autoAlpha: 0,
        duration: 1,
        width: 0,
      },
      0
    );
  }, [hiddenTimeline]);

  useEffect(() => {
    if (!self) return;

    if (hideComponent) {
      hiddenTimeline.seek(0).play();
      yoyoTimeline.pause();
    } else {
      if (!hideComponent && hiddenTimeline.progress() !== 0) {
        setTimeout(() => {
          hiddenTimeline.reverse();
        }, 2500);
      }
      yoyoTimeline.play();
    }
  }, [hideComponent, hiddenTimeline, yoyoTimeline]);

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
