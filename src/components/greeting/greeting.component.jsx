import React, { useRef, useEffect, useState } from 'react';
import Typed from 'typed.js';
import { TimelineLite } from 'gsap';
import { StyledGreeting, StyledName, StyledRole } from './greeting.styles';

const Greeting = () => {
  const [hasTyped, setTyped] = useState(false);

  const typedGreeting = useRef(null);
  const typedName = useRef(null);
  const typedRole = useRef(null);

  useEffect(() => {
    if (!hasTyped) {
      const typings = [];

      typings.push(
        new Typed(typedGreeting.current, {
          strings: ['Hello World!'],
          typeSpeed: 100,
          startDelay: 50,
          showCursor: false,
          onComplete: () => {
            typings.push(
              new Typed(typedName.current, {
                strings: [
                  '<span class="leader-text">My name is &nbsp; </span>Nayman^5',
                  '<span class="leader-text">My name is &nbsp; </span>Naaman*^300',
                  '<span class="leader-text">My name is &nbsp; </span>Naaman Curtis',
                ],
                startDelay: 200,
                typeSpeed: 50,
                backSpeed: 100,
                showCursor: false,
                onComplete: () => {
                  const animationTimeline = new TimelineLite();
                  animationTimeline.set(typedGreeting.current, {
                    transformOrigin: '0% 0%',
                  });
                  animationTimeline
                    .to(
                      typedGreeting.current,
                      {
                        duration: 1.5,
                        opacity: 0,
                        scale: 0,
                        height: 0,
                        width: 0,
                      },
                      1.5
                    )
                    .eventCallback('onComplete', () =>
                      typedGreeting.current.remove()
                    );

                  animationTimeline
                    .to(
                      '.leader-text',
                      {
                        width: '0',
                        opacity: '0',
                        duration: 1.5,
                      },
                      '<'
                    )
                    .eventCallback('onComplete', () =>
                      typedName.current.childNodes[0].remove()
                    );

                  animationTimeline.to(
                    typedName.current,
                    {
                      fontSize: '3rem',
                      duration: 1.5,
                    },
                    '<'
                  );
                },
              })
            );
          },
        })
      );

      typings[0].start();
      setTyped(false);

      return () => typings.forEach((t) => t.destroy());
    }
    return () => {};
  }, [hasTyped]);

  return (
    <div>
      {hasTyped ? null : <StyledGreeting ref={typedGreeting} />}
      <StyledName ref={typedName}>
        {hasTyped ? 'Naaman Curtis' : null}
      </StyledName>
      <StyledRole ref={typedRole}>
        {hasTyped ? 'Software Engineer' : null}
      </StyledRole>
    </div>
  );
};

export default Greeting;
