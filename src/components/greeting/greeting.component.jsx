import React, { useRef, useEffect, useState } from 'react';
import Typed from 'typed.js';
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
                  'My name is <span class="name">Nayman</span>^50',
                  'My name is <span class="name">Naaman*</span>^300',
                  'My name is <span class="name">Naaman Curtis</span>',
                ],
                startDelay: 200,
                typeSpeed: 50,
                backSpeed: 100,
                showCursor: false,
                onComplete: () => {
                  typings.push(
                    new Typed(typedRole.current, {
                      strings: ['Software Engineer'],
                      showCursor: false,
                      typeSpeed: 50,
                      onComplete: () => {
                        typedGreeting.current.classList.add('hidden');
                        setTimeout(() => {
                          typedGreeting.current.remove();
                        }, 1000);
                        typedName.current.childNodes[1].remove();
                        typedName.current.style.fontSize = '2.5rem';
                        typedName.current.style.marginBottom = '0.9rem';
                        typedName.current.childNodes[0].nodeValue =
                          'Naaman Curtis';
                        typedName.current.style.marginBottom = '0.6rem';
                      },
                    })
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
