import React from 'react';
import { NavWrapper, NavHeader, FnDefWrapper } from './nav.styles';
import { BoldType, Keyword, Trait } from '../function/types.styles';
import Function from '../function/function.component';

const ROUTES = [
  {
    name: 'about_me',
    paramPrefix: '&',
    result: 'AboutMe',
  },
  {
    name: 'my_work',
    paramPrefix: '&mut ',
    result: 'Projects',
  },
  {
    name: 'what_i_do',
    paramPrefix: '&mut ',
    result: 'Skills',
  },
  {
    name: 'contact_me',
    paramPrefix: '&',
    result: 'ContactDetails',
  },
];

const Nav = () => {
  return (
    <NavWrapper>
      <NavHeader>
        <Keyword>impl </Keyword>
        <Trait>SoftwareEngineer </Trait>
        <Keyword>for </Keyword>
        <BoldType> NaamanCurtis</BoldType> {'{'}
      </NavHeader>
      <FnDefWrapper>
        {ROUTES.map((route) => (
          <>
            <br />
            <Function route={route} />
          </>
        ))}
      </FnDefWrapper>
      <NavHeader>{'}'}</NavHeader>
    </NavWrapper>
  );
};

export default Nav;
