import React from 'react';
import { AboutMeWrapper } from './about-me.styles';

const AboutMe = () => {
  return (
    <AboutMeWrapper>
      <p>
        I'm a full-stack Software Engineer who uses technology to create
        products and solutions that&nbsp;
        <span className="underline">positively impact</span> people's day-to-day
        lives.
      </p>
      <br />
      <p>
        Both passionate and enthuastic, I enjoy taking on challenges and
        finding&nbsp;
        <span className="underline">innovative solutions</span> to them.
      </p>
      <br />
      <p>
        I firmly believe that the best products and solutions are created when
        you bring a <span className="underline">diverse group</span> of people
        together and allow each to bring their unique perspectives to the table.
      </p>
      <br />
    </AboutMeWrapper>
  );
};

export default AboutMe;

// Old Copy
/*
      <p>
        I endeavor to always continue self-development and learning and strive
        to support others in doing the same.
      </p>
      <br />
 */
