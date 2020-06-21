import React, {
  useEffect,
  useState,
  useRef,
  ReactElement,
  MouseEvent,
} from 'react';
import { TimelineLite } from 'gsap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  FnResult,
  FnContent,
  ArrowWrapper,
  FnCurlys,
  TransparentLine,
} from '../../organisms/function/function.styles';
import { FunctionResultStyle } from '../../atoms/function-types/function-types.styles';
import SvgEllipsis from '../../atoms/ellipsis/elipisis-component.component';

type FunctionResultProps = {
  showAnimation: boolean;
  result: string;
  isOpen: boolean;
  children: ReactElement;
};

const FunctionResult = ({
  showAnimation,
  result,
  isOpen,
  children,
}: FunctionResultProps) => {
  const arrow = useRef(null);
  const curlys = useRef(null);
  const openingCurly = useRef(null);
  const closingCurly = useRef(null);
  const content = useRef(null);
  const line = useRef(null);

  const [pulseTimeline, setPulseTimeline] = useState(
    new TimelineLite({ repeat: -1, yoyo: true })
  );

  const [hiddenTimeline, setHiddenTimeline] = useState(new TimelineLite());

  // Set up Animation Timeline
  useEffect(() => {
    if (!arrow || !curlys) return;

    if (!pulseTimeline) {
      setPulseTimeline(new TimelineLite({ repeat: -1, yoyo: true }));
      return;
    }

    pulseTimeline
      .to(
        arrow.current,
        {
          left: '3px',
          duration: 1,
        },
        '<'
      )
      .pause();

    return () => {
      pulseTimeline.kill();
    };
  }, [pulseTimeline]);

  // Manage play/pause of timeline
  useEffect(() => {
    if (!pulseTimeline) return;

    // If we're hovering
    if (showAnimation && !isOpen) {
      pulseTimeline
        .eventCallback('onComplete', (null as any) as gsap.Callback)
        .play();
      return;
    }

    if (!pulseTimeline.reversed()) {
      pulseTimeline.iteration(1).reverse();
    }
    pulseTimeline.eventCallback('onComplete', () => pulseTimeline.pause());
  }, [showAnimation, pulseTimeline, isOpen]);

  // Set up Hidden Timeline
  useEffect(() => {
    if (!content) return;
    if (!hiddenTimeline) {
      setHiddenTimeline(new TimelineLite());
      return;
    }
    hiddenTimeline.pause();

    hiddenTimeline
      .to(
        closingCurly.current,
        {
          duration: 0.25,
          position: 'relative',
          top: '1em',
        },
        1
      )
      .to(
        closingCurly.current,
        {
          duration: 1.5,
          left: '-99%',
        },
        '<'
      )
      .to(
        content.current,
        {
          display: 'block',
          duration: 1.5,
        },
        '<'
      )
      .to(
        content.current,
        {
          autoAlpha: 1,
          duration: 0.75,
          height: '100%',
        },
        '>'
      )
      .to(
        line.current,
        {
          display: 'block',
        },
        '<'
      )
      .to(
        line.current,
        {
          autoAlpha: 1,
          duration: 1,
        },
        '>'
      );
  }, [hiddenTimeline, content]);

  // Manage play/pause of hidden timeline
  useEffect(() => {
    if (!closingCurly) return;
    if (!content) return;

    if (isOpen) {
      hiddenTimeline.seek(0).play();
    } else if (hiddenTimeline.progress() !== 0) {
      hiddenTimeline.reverse();
    }
  }, [isOpen, hiddenTimeline]);

  return (
    <>
      <FnResult>
        <ArrowWrapper ref={arrow}>
          <FontAwesomeIcon icon="long-arrow-alt-right" />
        </ArrowWrapper>
        <>
          <FunctionResultStyle> {result} </FunctionResultStyle>
          <FnCurlys ref={openingCurly}> {'{'}</FnCurlys>
          <TransparentLine ref={line} />
          <SvgEllipsis hideComponent={isOpen} />
          <FnContent
            ref={content}
            onClick={(e: MouseEvent<HTMLDivElement>) => {
              e.stopPropagation();

              // Don't want to the section to close if the content is clicked on
              if (
                !e.target ||
                !(e.target as HTMLDivElement).classList ||
                !(e.target as HTMLDivElement).classList.contains('clickable')
              ) {
                e.preventDefault();
              }
            }}
          >
            {React.cloneElement(children, { isOpen })}
          </FnContent>
          <FnCurlys ref={closingCurly}>{'}'}</FnCurlys>
        </>
      </FnResult>
    </>
  );
};

export default FunctionResult;
