import React, { useContext, useEffect, useState } from 'react';
import { TimelineLite } from 'gsap';

import IMG_URL from '../../constants/img-urls';

import TechnologyIcon from '../../atoms/technology-icon/technology-icon.component';
import {
  SkillsWrapper,
  SmallText,
  SkillBlockWrapper,
  SkillCardsWrapper,
} from './skills.styles';
import { ThemeContext } from 'styled-components';
import { Line, Underline } from '../../styles/components';

const SKILLS = [
  {
    name: 'Rust',
    alt: 'Rust Programming Language ',
    description: 'Rust',
    imgSrc: IMG_URL.RUST,
    additional: '(A particular area of interest)',
  },
  {
    name: 'Go',
    alt: 'Go Programming Language',
    description: 'Golang',
    imgSrc: IMG_URL.GO,
  },
  {
    name: 'Typescript',
    alt: 'Typescript',
    description: 'TypeScript',
    imgSrc: IMG_URL.TYPESCRIPT,
  },
  {
    name: 'Javascript',
    alt: 'Javascript',
    description: 'Javascript',
    imgSrc: IMG_URL.JAVASCRIPT,
  },
  {
    name: 'Angular',
    alt: 'Angular',
    description: 'Angular',
    imgSrc: IMG_URL.ANGULAR,
  },
  {
    name: 'React',
    alt: 'React',
    description: 'React',
    imgSrc: IMG_URL.REACT,
  },
  {
    name: 'Node.js',
    alt: 'Node.js',
    description: 'Node.js',
    imgSrc: '',
    imgFn: (theme) =>
      theme.theme === 'dark' ? IMG_URL.NODE_DARK : IMG_URL.NODE_LIGHT,
  },
  {
    name: 'Docker',
    alt: 'Docker',
    description: 'Docker',
    imgSrc: IMG_URL.DOCKER,
  },
  {
    name: 'Git',
    alt: 'Git',
    description: 'Git',
    imgSrc: IMG_URL.GIT,
  },
];

const SkillsPage = ({ isOpen }) => {
  const theme = useContext(ThemeContext);
  const [timeline, setTimeline] = useState(new TimelineLite());

  useEffect(() => {
    if (!timeline) {
      setTimeline(new TimelineLite());
      return;
    }
    timeline.pause();

    timeline.from('.skills-item', {
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
    <SkillsWrapper>
      <p className="skills-item">
        I build all sorts, from web apps to CLI tools, anything that provides
        value and an improved quality of life to the user.
      </p>
      <br />
      <p className="skills-item">
        To do this I focus on creating solutions with{' '}
        <Underline>intuitive user experiences</Underline> where the user and
        their needs stay first and foremost in{' '}
        <Underline>design and implementation</Underline>. While always factoring
        in performance, simplicity, scalability, testability and security.
      </p>
      <br />
      <SmallText className="skills-item">
        See below for a list of languages, technologies and frameworks I'm
        familiar with. <br /> <br />
        I'm particularly interested in the{' '}
        <Underline>
          <b>Rust</b>
        </Underline>{' '}
        programming language and it's ability to create high performance,
        scalable and secure applications.
      </SmallText>
      <Line />
      <SkillBlockWrapper className="skills-item">
        <SkillCardsWrapper>
          {SKILLS.map((skill) => {
            if (skill.imgFn) {
              skill.imgSrc = skill.imgFn(theme);
            }
            return <TechnologyIcon key={skill.name} {...skill} />;
          })}
        </SkillCardsWrapper>
      </SkillBlockWrapper>
      <Line />
    </SkillsWrapper>
  );
};

export default SkillsPage;
