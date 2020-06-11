import React, { useEffect, useRef, useState } from 'react';
import { TimelineLite } from 'gsap';
import { AboutMeWrapper } from './about-me.styles';

const AboutMe = ({ isShown }) => {
  const self = useRef(null);
  const [timeline, setTimeline] = useState(new TimelineLite());

  useEffect(() => {
    if (!self) return;

    if (!timeline) {
      setTimeline(new TimelineLite());
      return;
    }
    timeline.pause();

    timeline.from('.text', {
      y: -100,
      stagger: 0.3,
      opacity: 0,
      duration: 0.75,
      delay: 2.5,
    });
  }, [self, timeline]);

  useEffect(() => {
    if (!self || !isShown || !timeline) return;

    if (isShown) {
      timeline.seek(0).play();
    } else {
      console.log('playing timeline in reverse');
      if (timeline.progress() !== 0) {
        timeline.reverse();
      }
    }
  }, [self, timeline, isShown]);

  return (
    <AboutMeWrapper ref={self}>
      <p className="text">
        I'm a full-stack Software Engineer who uses technology to create
        products and solutions that&nbsp;
        <span className="underline">positively impact</span> people's day-to-day
        lives.
      </p>
      <br />
      <p className="text">
        Both passionate and enthuastic, I enjoy taking on challenges and
        finding&nbsp;
        <span className="underline">innovative solutions</span> to them.
      </p>
      <br />
      <p className="text">
        I firmly believe that the best products and solutions are created when
        you bring a <span className="underline">diverse group</span> of people
        together and allow each to bring their unique perspectives to the table.
      </p>
    </AboutMeWrapper>
  );
};

export default AboutMe;
