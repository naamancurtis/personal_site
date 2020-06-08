import React from 'react';
import { NavWrapper, NavHeader } from './nav.styles';
import { BoldType, Keyword, Trait } from '../function-def/function-def.styles';
import FunctionDef from '../function-def/function-def.component';

const aboutMe = {
  self: {
    prefix: '&',
  },
  result: {
    result: 'AboutMe',
  },
};

const myWork = {
  self: {
    prefix: '&mut ',
  },
  result: {
    result: 'MyWork',
  },
};

const whatIDo = {
  self: {
    prefix: '&mut ',
  },
  result: {
    result: 'Skills',
  },
};

const contactMe = {
  self: {
    prefix: '& ',
  },
  result: {
    result: 'ContactDetails',
  },
};

const Nav = () => {
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
        self={aboutMe.self}
        result={aboutMe.result}
      />
      <br />
      <FunctionDef
        isPub
        fnName={'my_work'}
        self={myWork.self}
        result={myWork.result}
      />
      <br />
      <FunctionDef
        isPub
        fnName={'what_i_do'}
        self={whatIDo.self}
        result={whatIDo.result}
      />
      <br />
      <FunctionDef
        isPub
        fnName={'contact_me'}
        self={contactMe.self}
        result={contactMe.result}
      />

      <NavHeader>{'}'}</NavHeader>
    </NavWrapper>
  );
};

export default Nav;
