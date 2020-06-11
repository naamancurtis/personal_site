import React from 'react';
import SkillCard from '../../components/skill-card/skill-card.component';
import { SkillsWrapper, SmallText, SkillBlockWrapper } from './skills.styles';

const programmingLanguages = [
  {
    name: 'Rust',
    alt: 'Rust Programming Language Logo',
    description: 'Rust',
    imgSrc: 'https://www.rust-lang.org/logos/rust-logo-512x512.png',
    additional: '(A particular area of interest)',
  },
  {
    name: 'Go',
    alt: 'Go Programming Language Gopher',
    description: 'Golang',
    imgSrc: 'https://blog.golang.org/go-brand/Go-Logo/SVG/Go-Logo_Blue.svg',
  },
  {
    name: 'Typescript',
    alt: 'Typescript logo',
    description: 'TypeScript',
    imgSrc:
      'https://cloud.githubusercontent.com/assets/10656223/15247118/e71dc6a2-1909-11e6-9b90-ae86204f41c3.png',
  },
  {
    name: 'Javascript',
    alt: 'Javascript logo',
    description: 'Javascript',
    imgSrc:
      'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
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
        I enjoy building anything from microservices and web apps to CLI tools
        and everything inbetween and have done so across a number of different
        programming languages and frameworks (and I'm always happy and
        enthuastic to pick up new ones).
      </p>
      <br />
      <SmallText>
        See below for a list of tools and technologies I'm already familiar
        with.
      </SmallText>
      <SkillBlockWrapper>
        <h2> Programming Languages </h2>
        {programmingLanguages.map((language) => (
          <SkillCard {...language} />
        ))}
      </SkillBlockWrapper>
    </SkillsWrapper>
  );
};

export default SkillsPage;
