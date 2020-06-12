import React, { useEffect, useState } from 'react';
import { TimelineLite } from 'gsap';
import { AboutMeWrapper, AboutMeParagraph } from './about-me.styles';

const AboutMe = ({ isShown }) => {
  const [timeline, setTimeline] = useState(new TimelineLite());

  useEffect(() => {
    if (!timeline) {
      setTimeline(new TimelineLite());
      return;
    }
    timeline.pause();

    timeline.from('.about-me-text', {
      x: -50,
      stagger: 0.3,
      opacity: 0,
      duration: 0.75,
      delay: 2.5,
    });
  }, [timeline]);

  useEffect(() => {
    if (!isShown || !timeline) return;

    if (isShown) {
      timeline.seek(0).play();
    } else {
      if (timeline.progress() !== 0) {
        timeline.reverse();
      }
    }
  }, [timeline, isShown]);

  return (
    <AboutMeWrapper>
      <AboutMeParagraph className="about-me-text">
        I'm a full-stack Software Engineer who uses technology to create
        products and solutions that&nbsp;
        <span className="underline">positively impact</span> people's day-to-day
        lives.
      </AboutMeParagraph>
      <br />
      <AboutMeParagraph className="about-me-text">
        Both passionate and enthuastic, I enjoy taking on challenges and
        finding&nbsp;
        <span className="underline">innovative solutions</span> to them.
      </AboutMeParagraph>
      <br />
      <AboutMeParagraph className="about-me-text">
        I firmly believe that the best products and solutions are created when
        you bring a <span className="underline">diverse group</span> of people
        together and allow each to bring their unique perspectives to the table.
      </AboutMeParagraph>
    </AboutMeWrapper>
  );
};

export default AboutMe;
