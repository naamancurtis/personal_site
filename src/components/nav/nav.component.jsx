import React, { useRef, useEffect } from 'react';
import fitty from 'fitty';
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
  const wrapper = useRef(null);

  useEffect(() => {
    if (!wrapper) return;

    const fitText = fitty(wrapper.current);

    return () => fitText.unsubscribe();
  });
  return (
    <NavWrapper>
      <NavHeader ref={wrapper}>
        <Keyword>impl </Keyword>
        <Trait>SoftwareEngineer </Trait>
        <Keyword>for </Keyword>
        <BoldType> NaamanCurtis</BoldType> {'{'}
      </NavHeader>
      <FnDefWrapper>
        {ROUTES.map((route) => (
          <div key={route.name}>
            <br />
            <Function route={route} />
          </div>
        ))}
      </FnDefWrapper>
      <NavHeader>{'}'}</NavHeader>
    </NavWrapper>
  );
};

export default Nav;
