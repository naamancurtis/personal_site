import React, { useState } from 'react';
import { Fn } from './function.styles';
import FunctionDef from '../../molecules/function-def/function-def.component';
import FunctionResult from '../../molecules/function-result/function-result.component';

const Function = ({ route, children }) => {
  const [isHover, setHover] = useState(false);
  const [isOpen, toggleOpen] = useState(false);

  return (
    <Fn
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      onClick={() => toggleOpen(!isOpen)}
      className={isOpen ? 'is-open' : null}
    >
      <FunctionDef
        isShown={isHover || isOpen}
        fnName={route.name}
        paramPrefix={route.paramPrefix}
      />
      <FunctionResult
        showAnimation={isHover}
        result={route.result}
        isOpen={isOpen}
        children={children}
      />
    </Fn>
  );
};

export default Function;
