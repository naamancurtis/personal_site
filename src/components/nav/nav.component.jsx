import React from 'react';
import { NavWrapper, NavHeader } from './nav.styles';
import {
  BoldType,
  Type,
  Keyword,
  OpaqueFnText,
  Trait,
} from '../function-def/function-def.styles';
import FunctionDef from '../function-def/function-def.component';

const Nav = () => {
  const aboutme = {
    self: {
      prefix: '&',
    },
    result: {
      result: 'About',
    },
  };

  return (
    <NavWrapper>
      <NavHeader>
        <Keyword>impl </Keyword>
        <Trait>SoftwareEngineer </Trait>
        <Keyword>for </Keyword>
        <BoldType> NaamanCurtis</BoldType> {'{'}
      </NavHeader>
      <FunctionDef
        isPub
        fnName={'about_me'}
        self={aboutme.self}
        result={aboutme.result}
      />
    </NavWrapper>
  );
};

export default Nav;
