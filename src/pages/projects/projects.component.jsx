import React, { useRef, useEffect } from 'react';
import { TimelineLite, TweenLite } from 'gsap';
import { useSwipeable } from 'react-swipeable';

import IMG_URL from '../../constants/img-urls';

import {
  ProjectWrapper,
  NextButton,
  CardStackWrapper,
  CardIndicatorWrapper,
  PageWrapper,
} from './projects.styles';

import WorkCard from '../../components/work-card/work-card.component';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PROJECTS = [
  {
    img:
      'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    title: 'Global Pharmaceutical Company',
    role: 'Front End Lead',
    description: [
      'Managing a team of 4-5 front-end developers (across timezones) to build a global internal business tool.',
      'The tool leveraged real-time data configuration and analytics to allow trial designers to more effectively design trials. Enabling the company to bring life saving medicines to market quicker.',
    ],
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
    description: [
      'Tech lead on digital initiative as well as building a fully functional proof of concept digital application form, a first for the company.',
      'This app automated the processing of applications against business policy and priorities in real-time, and enabled richer data capture and analysis than ever before.',
    ],
    nda: true,
    stack: [
      { src: IMG_URL.ANGULAR, alt: 'Angular' },
      {
        src: IMG_URL.FIREBASE,
        alt: 'Firebase',
      },
      {
        srcFn: (theme) =>
          theme.theme === 'dark' ? IMG_URL.NODE_DARK : IMG_URL.NODE_LIGHT,
        alt: 'Node.js & Express.js',
      },
    ],
    links: {
      live: null,
      code: null,
      press: null,
    },
  },
];

const ProjectPage = () => {
  const [currentCardPointer, setCurrentCard] = useState(0);
  const [timeline, setTimeline] = useState(new TimelineLite());

  const handlers = useSwipeable({
    onSwipedLeft: () => movePointer(-1),
    onSwipedRight: () => movePointer(1),
    delta: 25,
  });

  const currentCard = useRef(null);

  const movePointer = (movement) => {
    const idx = currentCardPointer + movement;
    const nextCard =
      ((idx % PROJECTS.length) + PROJECTS.length) % PROJECTS.length;

    const newCardStartPosition = movement === 1 ? '-10rem' : '12rem';
    const oldCardMovement = movement === 1 ? '12rem' : '-10rem';

    if (!timeline) {
      setTimeline(new TimelineLite());
      return;
    }
    timeline.restart();
    timeline.clear();

    timeline
      .to(currentCard.current, {
        opacity: 0,
        duration: 0.75,
        left: oldCardMovement,
        ease: 'power3.out',
      })
      .to(
        currentCard.current,
        {
          left: newCardStartPosition,
          duration: 0.1,
          delay: 0.1,
          onComplete: () => setCurrentCard(nextCard),
        },
        '>'
      );
  };

  useEffect(() => {
    if (!currentCard.current) return;
    TweenLite.to(currentCard.current, {
      opacity: 1,
      duration: 1,
      left: 0,
    });
  }, [currentCardPointer]);

  return (
    <PageWrapper>
      <ProjectWrapper>
        <NextButton onClick={() => movePointer(-1)}>
          <FontAwesomeIcon icon={['fas', 'chevron-left']} />
        </NextButton>
        <CardStackWrapper {...handlers}>
          <WorkCard ref={currentCard} project={PROJECTS[currentCardPointer]} />
        </CardStackWrapper>
        <NextButton onClick={() => movePointer(1)}>
          <FontAwesomeIcon icon={['fas', 'chevron-right']} />
        </NextButton>
      </ProjectWrapper>
      <CardIndicatorWrapper>
        {[...Array(PROJECTS.length).keys()].map((i) =>
          i === currentCardPointer ? (
            <FontAwesomeIcon key={i} icon={['fas', 'circle']} />
          ) : (
            <FontAwesomeIcon key={i} icon={['far', 'circle']} />
          )
        )}
      </CardIndicatorWrapper>
    </PageWrapper>
  );
};

export default ProjectPage;
