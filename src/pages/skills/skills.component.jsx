import React, { useContext, useEffect, useState } from 'react';
import { TimelineLite } from 'gsap';
import SkillCard from '../../components/skill-card/skill-card.component';
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
    imgSrc: 'https://www.rust-lang.org/logos/rust-logo-512x512.png',
    additional: '(A particular area of interest)',
  },
  {
    name: 'Go',
    alt: 'Go Programming Language',
    description: 'Golang',
    imgSrc: 'https://blog.golang.org/go-brand/Go-Logo/SVG/Go-Logo_Blue.svg',
  },
  {
    name: 'Typescript',
    alt: 'Typescript',
    description: 'TypeScript',
    imgSrc:
      'https://cloud.githubusercontent.com/assets/10656223/15247118/e71dc6a2-1909-11e6-9b90-ae86204f41c3.png',
  },
  {
    name: 'Javascript',
    alt: 'Javascript',
    description: 'Javascript',
    imgSrc:
      'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
  },
  {
    name: 'Angular',
    alt: 'Angular',
    description: 'Angular',
    imgSrc: 'https://angular.io/assets/images/logos/angular/angular.png',
  },
  {
    name: 'React',
    alt: 'React',
    description: 'React',
    imgSrc:
      'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png',
  },
  {
    name: 'Node.js',
    alt: 'Node.js',
    description: 'Node.js',
    imgSrc: '',
    imgFn: (theme) => {
      return theme.theme === 'dark'
        ? 'https://nodejs.org/static/images/logos/nodejs-new-pantone-white.svg'
        : 'https://nodejs.org/static/images/logos/nodejs-new-pantone-black.svg';
    },
  },
  {
    name: 'Docker',
    alt: 'Docker',
    description: 'Docker',
    imgSrc:
      'https://www.docker.com/sites/default/files/d8/styles/role_icon/public/2019-07/vertical-logo-monochromatic.png?itok=erja9lKc',
  },
  {
    name: 'Git',
    alt: 'Git',
    description: 'Git',
    imgSrc:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/1200px-Git_icon.svg.png',
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
      <Line />
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
        I'm particularly interested in the <Underline>Rust</Underline>{' '}
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
            return <SkillCard key={skill.name} {...skill} />;
          })}
        </SkillCardsWrapper>
      </SkillBlockWrapper>
      <Line />
    </SkillsWrapper>
  );
};

export default SkillsPage;
