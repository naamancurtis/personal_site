import React from 'react';
import SkillCard from '../../components/skill-card/skill-card.component';
import {
  SkillsWrapper,
  SmallText,
  SkillBlockWrapper,
  SkillCardsWrapper,
} from './skills.styles';

const programmingLanguages = [
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
];

const frameworks = [
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
];

const technologies = [
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

const SkillsPage = () => {
  let temp = 1;

  return (
    <SkillsWrapper>
      <p>
        I build innovative digital products and tools to&nbsp;
        <span className="underline">
          drive business outcomes and end user value.
        </span>
      </p>
      <br />
      <p>
        br I enjoy building anything from microservices and web apps to CLI
        tools and everything inbetween and have done so across a number of
        different programming languages and frameworks (and I'm always happy and
        enthuastic to pick up new ones).
      </p>
      <br />
      <SmallText>
        See below for a list of tools and technologies I'm already familiar
        with.
      </SmallText>
      <SkillBlockWrapper>
        <h2> Programming Languages </h2>
        <SkillCardsWrapper>
          {programmingLanguages.map((language) => (
            <SkillCard {...language} />
          ))}
        </SkillCardsWrapper>
      </SkillBlockWrapper>
      <SkillBlockWrapper>
        <h2>Frameworks</h2>
        {frameworks.map((framework) => (
          <SkillCard {...framework} />
        ))}
      </SkillBlockWrapper>
      <SkillBlockWrapper>
        <h2>Additional Technologies</h2>
        {technologies.map((technology) => (
          <SkillCard {...technology} />
        ))}
      </SkillBlockWrapper>
    </SkillsWrapper>
  );
};

export default SkillsPage;
