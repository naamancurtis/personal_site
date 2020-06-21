import React, { useState, ReactElement, useEffect } from 'react';
import { Fn } from './function.styles';
import FunctionDef from '../../molecules/function-def/function-def.component';
import FunctionResult from '../../molecules/function-result/function-result.component';
import { Route } from '../../models/route';
import ReactGA, { EventArgs } from 'react-ga';

type FunctionProps = {
  route: Route;
  children: ReactElement;
};

const Function = ({ route, children }: FunctionProps) => {
  const [isHover, setHover] = useState<boolean>(false);
  const [isOpen, toggleOpen] = useState<boolean>(false);
  const [timeOpened, setTimeOpened] = useState<Date | null>(null);

  const submitGA = () => {
    const section = route.name;
    const openedOrClosed = isOpen ? 'Closed' : 'Opened';
    const gaVars: EventArgs = {
      category: 'Navigation',
      action: `${openedOrClosed}: ${section}`,
    };
    if (isOpen && timeOpened) {
      // 3.5 is ~ the time it takes for the animation to
      // make content actually visible to the human eye
      const timeSectionWasOpen =
        Math.abs((new Date().getTime() - timeOpened.getTime()) / 1000) - 3.5;

      gaVars.value = timeSectionWasOpen;
    }
    ReactGA.event(gaVars);
  };

  // If the user navigates off the site, correctly close out the timer
  useEffect(() => {
    return () => {
      if (isOpen) {
        submitGA();
      }
    };
    // only want clear up code run on ComponentDidDismount
    // eslint-disable-next-line
  }, []);

  return (
    <Fn
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      onClick={() => {
        submitGA();
        toggleOpen(!isOpen);
        if (isOpen) {
          setTimeOpened(null);
        } else {
          setTimeOpened(new Date());
        }
      }}
      className={isOpen ? 'is-open' : ''}
    >
      <FunctionDef
        isShown={isHover || isOpen}
        fnName={route.name}
        paramPrefix={route.paramPrefix}
        hideCompletely={false}
      />
      <FunctionResult
        showAnimation={isHover}
        result={route.result}
        isOpen={isOpen}
      >
        {children}
      </FunctionResult>
    </Fn>
  );
};

export default Function;
