import React from 'react';

import IMG_URL from '../../constants/img-urls';

import { ProjectWrapper, NextButton } from './projects.styles';

import WorkCard from '../../components/work-card/work-card.component';
import { useState } from 'react';

const PROJECTS = [
  {
    img:
      'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    title: 'Global Pharmaceutical Company',
    role: 'Front End Lead',
    description:
      'Managing a team of 4-5 people to build an internal business tool. The tool leveraged advanced data configuration and real time analytics to allow designers to bring life saving medicines to market quicker.',
    nda: true,
    stack: [
      { src: IMG_URL.ANGULAR, alt: 'Angular' },
      {
        src: IMG_URL.MONGO,
        alt: 'MongoDB',
      },
    ],
    links: {
      live: null,
      code: null,
      press:
        'https://www2.deloitte.com/uk/en/pages/consulting/articles/astrazeneca.html',
    },
  },
  {
    img:
      'https://images.unsplash.com/photo-1454165205744-3b78555e5572?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    title: 'Governmental Funding Agency',
    role: 'Tech Lead',
    description:
      'Tech lead on digital proposition design program. Built a fully functional Proof of Concept digital application form, which automated the processing of application forms against business policy and priorities in real-time.',
    nda: true,
    stack: [
      { src: IMG_URL.ANGULAR, alt: 'Angular' },
      {
        src: IMG_URL.FIREBASE,
        alt: 'Firebase',
      },
    ],
    links: {
      live: null,
      code: null,
      press: null,
    },
  },
  {
    img: '',
    title: 'Portfolio Site',
    description: '',
    nda: false,
    stack: [
      { src: IMG_URL.REACT, alt: 'React' },
      { src: IMG_URL.RUST, alt: 'Rust' },
    ],
    links: {
      live: '',
      code: '',
      press: '',
    },
  },
];

const ProjectPage = () => {
  const [currentCard, setCurrentCard] = useState(0);

  return (
    <ProjectWrapper>
      <NextButton onClick={() => setCurrentCard(Math.max(currentCard - 1, 0))}>
        {'<'}
      </NextButton>
      <WorkCard project={PROJECTS[currentCard]} />
      <NextButton
        onClick={() =>
          setCurrentCard(Math.min(currentCard + 1, PROJECTS.length - 1))
        }
      >
        {'>'}
      </NextButton>
    </ProjectWrapper>
  );
};

export default ProjectPage;
