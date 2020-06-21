import React, { useRef, useEffect, useState } from 'react';
import { TimelineLite, TweenLite } from 'gsap';
import { useSwipeable } from 'react-swipeable';

import PROJECTS from '../../data/projects';

import {
  ProjectWrapper,
  NextButton,
  CardStackWrapper,
  CardIndicatorWrapper,
  PageWrapper,
  StyledCircle,
  StyledArrow,
} from './projects.styles';

import Card from '../../organisms/card/card.component';

const ProjectPage = () => {
  const [currentCardPointer, setCurrentCard] = useState(0);
  const [timeline, setTimeline] = useState(new TimelineLite());

  const currentCard = useRef(null);

  const movePointer = (movement: number | null, directMove?: number) => {
    let direction = movement === 1 ? 'right' : 'left';

    const idx = currentCardPointer + (movement || 0);

    let nextCard =
      ((idx % PROJECTS.length) + PROJECTS.length) % PROJECTS.length;

    // If we're moving straight to a specific card, then overwrite
    if (directMove !== null && directMove !== undefined) {
      if (
        directMove === currentCardPointer ||
        directMove < 0 ||
        directMove >= PROJECTS.length
      )
        return;

      direction = directMove > currentCardPointer ? 'right' : 'left';
      nextCard = directMove;
    }

    const newCardStartPosition = direction === 'right' ? '-10rem' : '12rem';
    const oldCardMovement = direction === 'right' ? '12rem' : '-10rem';

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

  const handlers = useSwipeable({
    onSwipedLeft: () => movePointer(-1),
    onSwipedRight: () => movePointer(1),
    delta: 25,
  });

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
        <NextButton
          onClick={() => movePointer(-1)}
          role="button"
          aria-label="Move to previous project"
        >
          <StyledArrow icon={['fas', 'chevron-left']} />
        </NextButton>
        <CardStackWrapper {...handlers}>
          <Card ref={currentCard} project={PROJECTS[currentCardPointer]} />
        </CardStackWrapper>
        <NextButton
          onClick={() => movePointer(1)}
          role="button"
          aria-label="Move to next project"
        >
          <StyledArrow icon={['fas', 'chevron-right']} />
        </NextButton>
      </ProjectWrapper>
      <CardIndicatorWrapper>
        {Array.from(Array(PROJECTS.length).keys()).map((i) =>
          i === currentCardPointer ? (
            <StyledCircle key={i} icon={['fas', 'circle']} />
          ) : (
            <StyledCircle
              key={i}
              icon={['far', 'circle']}
              role="button"
              aria-label={`Move to project ${i + 1}`}
              onClick={() => movePointer(null, i)}
            />
          )
        )}
      </CardIndicatorWrapper>
    </PageWrapper>
  );
};

export default ProjectPage;
