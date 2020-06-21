import React, { useState, ReactElement, useEffect } from 'react';
import { Fn } from './function.styles';
import FunctionDef from '../../molecules/function-def/function-def.component';
import FunctionResult from '../../molecules/function-result/function-result.component';
import { Route } from '../../models/route';
import ReactGA, { EventArgs } from 'react-ga';
import { useMedia } from 'react-media';
import { GLOBAL_MEDIA_QUERIES } from '../../styles/media';

type FunctionProps = {
  route: Route;
  children: ReactElement;
};

const Function = ({ route, children }: FunctionProps) => {
  const isMobile = useMedia({ query: GLOBAL_MEDIA_QUERIES.mobile });
  const [isHover, setHover] = useState<boolean>(isMobile);
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

  const handleHoverState = (state: boolean): boolean => {
    if (isMobile && isHover !== true) {
      setHover(true);
      return true;
    }
    setHover(state);
    return false;
  };

  const opaqueFnDef = () => isHover || isOpen;

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
        handleHoverState(true);
      }}
      onMouseLeave={() => {
        handleHoverState(false);
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
      role="button"
      aria-label={`View ${route.name.split('_').join(' ')} section`}
    >
      <FunctionDef
        isShown={opaqueFnDef()}
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
