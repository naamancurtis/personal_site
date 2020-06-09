import React, { useContext, useEffect, useRef } from 'react';
import { ThemeContext } from 'styled-components';

const SvgElipisis = ({ setElipisisRef }) => {
  const theme = useContext(ThemeContext);
  const leftCircle = useRef(null);
  const rightCircle = useRef(null);

  useEffect(() => {
    if (leftCircle.current && rightCircle.current) {
      setElipisisRef({
        leftCircle: leftCircle.current,
        rightCircle: rightCircle.current,
      });
    }
    // Putting setElipisisRef in the deps array causes recursion limit
    // eslint-disable-next-line
  }, [leftCircle, rightCircle]);

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

