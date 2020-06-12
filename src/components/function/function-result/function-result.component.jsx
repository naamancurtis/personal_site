import React, { useEffect, useState, useRef } from 'react';
import { TimelineLite } from 'gsap';
import { OpaqueFnText, FnResult, FnContent } from '../function.styles';
import { BoldKeyword } from '../types.styles';
import SvgElipisis from '../elipisis-component.component';

const FunctionResult = ({ showAnimation, result, isOpen, children }) => {
  const arrow = useRef(null);
  const curlys = useRef(null);
  const openingCurly = useRef(null);
  const closingCurly = useRef(null);
  const content = useRef(null);

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

    pulseTimeline.fromTo(
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

    pulseTimeline.to(
      arrow.current,
      {
        left: '3px',
        duration: 1,
      },
      '<'
    );
    pulseTimeline.pause();

    return () => pulseTimeline.kill();
  }, [pulseTimeline]);

  // Manage play/pause of timeline
  useEffect(() => {
    if (!pulseTimeline) return;

    // If we're hovering
    if (showAnimation && !isOpen) {
      pulseTimeline.eventCallback('onComplete', null);
      pulseTimeline.play();
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

    hiddenTimeline.to(
      closingCurly.current,
      {
        duration: 0.25,
        position: 'relative',
        top: '1em',
      },
      1
    );

    hiddenTimeline.to(
      closingCurly.current,
      {
        duration: 1.5,
        left: '-99%',
      },
      '<'
    );

    hiddenTimeline.to(
      content.current,
      {
        display: 'block',
        duration: 1.5,
      },
      '<'
    );

    hiddenTimeline.to(
      content.current,
      {
        autoAlpha: 1,
        duration: 0.75,
        height: '100%',
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
    } else {
      if (hiddenTimeline.progress() !== 0) {
        hiddenTimeline.reverse();
      }
    }
  }, [isOpen, hiddenTimeline]);

  return (
    <>
      <FnResult>
        <OpaqueFnText ref={arrow} className="arrow">
          {'-> '}
        </OpaqueFnText>
        <>
          <BoldKeyword> {result} </BoldKeyword>
          <span>
            <OpaqueFnText ref={openingCurly}> {'{'}</OpaqueFnText>
            <SvgElipisis hideComponent={isOpen} />
            <FnContent
              ref={content}
              onClick={(e) => {
                // Don't want to the section to close if the content is clicked on
                e.stopPropagation();
                e.preventDefault();
              }}
            >
              {React.cloneElement(children, { isShown: isOpen })}
            </FnContent>
            <OpaqueFnText
              ref={closingCurly}
              className={isOpen ? 'is-open' : null}
            >
              {'}'}
            </OpaqueFnText>
          </span>
        </>
      </FnResult>
    </>
  );
};

export default FunctionResult;
