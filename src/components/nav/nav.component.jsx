import React, { useRef, useEffect } from 'react';
import fitty from 'fitty';
import { TweenLite } from 'gsap';
import { NavWrapper, NavHeader, FnDefWrapper, NavLineItem } from './nav.styles';
import { BoldType, Keyword, Trait } from '../function/types.styles';
import Function from '../function/function.component';
import AboutMe from '../../pages/about-me/about-me.component';

const ROUTES = [
  {
    name: 'about_me',
    paramPrefix: '&',
    result: 'AboutMe',
    component: <AboutMe />,
  },
  {
    name: 'my_work',
    paramPrefix: '&mut ',
    result: 'Projects',
    component: <AboutMe />,
  },
  {
    name: 'what_i_do',
    paramPrefix: '&mut ',
    result: 'Skills',
    component: <AboutMe />,
  },
  {
    name: 'contact_me',
    paramPrefix: '&',
    result: 'ContactDetails',
    component: <AboutMe />,
  },
];

const Nav = () => {
  const wrapper = useRef(null);

  useEffect(() => {
    if (!wrapper) return;

    const fitText = fitty(wrapper.current);
    TweenLite.from('.route', {
      opacity: 0,
      duration: 0.75,
      left: '-100px',
      stagger: 0.2,
    });

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
          <NavLineItem key={route.name} className="route">
            <br />
            <Function route={route} children={route.component}></Function>
          </NavLineItem>
        ))}
      </FnDefWrapper>
      <NavHeader>{'}'}</NavHeader>
    </NavWrapper>
  );
};

export default Nav;
