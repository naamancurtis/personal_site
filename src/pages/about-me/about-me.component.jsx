import React, { useEffect, useState } from 'react';
import { TimelineLite } from 'gsap';
import { AboutMeWrapper, AboutMeParagraph } from './about-me.styles';
import { Line } from '../../styles/components';

const AboutMe = ({ isOpen }) => {
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
    if (!isOpen || !timeline) return;

    if (isOpen) {
      timeline.seek(0).play();
    } else {
      if (timeline.progress() !== 0) {
        timeline.reverse();
      }
    }
  }, [timeline, isOpen]);

  return (
    <AboutMeWrapper>
      <Line />
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
        <span className="underline">innovative solutions</span>, always keeping
        sight of the longer term vision and ambition of the project.
      </AboutMeParagraph>
      <br />
      <AboutMeParagraph className="about-me-text">
        I firmly believe that the best products and solutions are created when
        you bring a <span className="underline">diverse group</span> of people
        together and allow each to bring their unique ideas and perspectives to
        the table.
      </AboutMeParagraph>
    </AboutMeWrapper>
  );
};

export default AboutMe;
