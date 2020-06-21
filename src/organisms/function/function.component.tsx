import React, { useState, ReactElement } from 'react';
import { Fn } from './function.styles';
import FunctionDef from '../../molecules/function-def/function-def.component';
import FunctionResult from '../../molecules/function-result/function-result.component';
import { Route } from '../../models/route';

type FunctionProps = {
  route: Route;
  children: ReactElement;
};

const Function = ({ route, children }: FunctionProps) => {
  const [isHover, setHover] = useState<boolean>(false);
  const [isOpen, toggleOpen] = useState<boolean>(false);

  return (
    <Fn
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      onClick={() => toggleOpen(!isOpen)}
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
