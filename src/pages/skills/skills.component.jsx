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

const SkillsPage = ({ isShown }) => {
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
    <SkillsWrapper>
      <p className="skills-item">
        I build anything from web apps to CLI tools, anything that provides
        value and an improved quality of life to the user.
      </p>
      <br />
      <p className="skills-item">
        To do this I focus on creating solutions with{' '}
        <span className="underline">intuitive user experiences</span> where the
        user and their needs stay firmly at the center of the experience.
      </p>
      <br />
      <SmallText className="skills-item">
        See below for a list of languages, technologies and frameworks I'm
        familiar with.
      </SmallText>
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
    </SkillsWrapper>
  );
};

export default SkillsPage;

// <p>
//   I build innovative digital products and tools to&nbsp;
//   <span className="underline">drive business outcomes</span> and&nbsp;
//   <span className="underline">end user value.</span>
// </p>
// <br />
// <p>
//   I enjoy building anything from&nbsp;
//   <span className="underline">
//     microservices and web apps to CLI tools
//   </span>
//   &nbsp;and everything inbetween and have done so across a number of
//   different programming languages and frameworks (and I'm always happy and
//   enthuastic to pick up new ones).
// </p>
// <br />
