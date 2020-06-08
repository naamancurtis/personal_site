import React, { useRef, useEffect } from 'react';
import Typed from 'typed.js';
import { TimelineLite } from 'gsap';
import { GreetingWrapper, Greeting, Name, Role } from './greeting.styles';

const IntroAnimation = ({ theme, toggleTyped }) => {
  const greeting = useRef(null);
  const name = useRef(null);
  const role = useRef(null);

  useEffect(() => {
    const typings = [];

    typings.push(
      new Typed(greeting.current, {
        strings: ['Hello World!'],
        typeSpeed: 100,
        startDelay: 50,
        showCursor: false,
        onComplete: () => {
          typings.push(
            new Typed(name.current, {
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

                // Work on Hello World
                animationTimeline.set(greeting.current, {
                  transformOrigin: '0% 0%',
                });

                // Show the Role
                animationTimeline.to(role.current, {
                  duration: 1.3,
                  opacity: 0.75,
                  ease: 'bounce.in',
                });

                animationTimeline
                  .to(
                    greeting.current,
                    {
                      duration: 1.5,
                      opacity: 0,
                      scale: 0,
                      height: 0,
                      width: 0,
                      ease: 'slow(0.7, 0.7, false)',
                    },
                    2
                  )
                  .eventCallback('onComplete', () => greeting.current.remove());

                // Get rid of the prefix to the name
                animationTimeline
                  .to(
                    '.leader-text',
                    {
                      width: '0',
                      opacity: '0',
                      duration: 1.5,
                      ease: 'slow( 0.7, 0.7, false)',
                    },
                    '<'
                  )
                  .eventCallback('onComplete', () =>
                    name.current.childNodes[0].remove()
                  );

                animationTimeline.to(
                  name.current,
                  {
                    fontSize: '3rem',
                    duration: 1.5,
                  },
                  '<'
                );

                animationTimeline.to(
                  name.current,
                  {
                    opacity: 0,
                    ease: 'sine.out',
                    duration: 1.75,
                  },
                  '+=1'
                );

                animationTimeline.to(
                  role.current,
                  {
                    opacity: 0,
                    ease: 'sine.out',
                    duration: 1.75,
                  },
                  '<'
                );

                animationTimeline.eventCallback('onComplete', () => {
                  toggleTyped();
                });
              },
            })
          );
        },
      })
    );

    typings[0].start();

    return () => typings.forEach((t) => t.destroy());
  }, [theme]);

  return (
    <GreetingWrapper>
      <Greeting ref={greeting} />
      <Name ref={name} />
      <Role ref={role}> Software Engineer </Role>
    </GreetingWrapper>
  );
};

export default IntroAnimation;
