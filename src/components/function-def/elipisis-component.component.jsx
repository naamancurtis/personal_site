import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

const SvgElipisis = (props) => {
  const theme = useContext(ThemeContext);

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
      {...props}
    >
      <defs>
        <clipPath id="elipisis_svg__a">
          <path d="M660 355.664h21.784v5H660z" />
        </clipPath>
      </defs>
      <g>
        <circle
          className="elipisis-circle circle-1"
          vectorEffect="non-scaling-stroke"
          cx={662.5}
          cy={358.164}
          r={2.5}
        />
        <circle
          className="elipisis-circle circle-2"
          vectorEffect="non-scaling-stroke"
          cx={670.892}
          cy={358.164}
          r={2.5}
        />
        <circle
          className="elipisis-circle circle-3"
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

