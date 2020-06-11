import React, { useRef, useEffect } from 'react';
import fitty from 'fitty';
import { TweenLite } from 'gsap';
import { NavWrapper, NavHeader, FnDefWrapper, NavLineItem } from './nav.styles';
import { BoldType, Keyword, Trait } from '../function/types.styles';
import Function from '../function/function.component';
import AboutMe from '../../pages/about-me/about-me.component';
import ProjectPage from '../../pages/projects/projects.component';
import SkillsPage from '../../pages/skills/skills.component';
import ContactDetailsPage from '../../pages/contact-details/contact-details.component';

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
    component: <ProjectPage />,
  },
  {
    name: 'what_i_do',
    paramPrefix: '&mut ',
    result: 'Skills',
    component: <SkillsPage />,
  },
  {
    name: 'contact_me',
    paramPrefix: '&',
    result: 'ContactDetails',
    component: <ContactDetailsPage />,
  },
];

const Nav = () => {
  const wrapper = useRef(null);
  const closingCurly = useRef(null);

  useEffect(() => {
    if (!wrapper || !closingCurly) return;

    const wrapperRef = wrapper.current;

    const fitText = fitty(wrapperRef);

    const resizeClosingCurly = (e) => {
      const size = e.detail.newValue;
      closingCurly.current.style.fontSize = `${size}px`;
    };

    wrapperRef.addEventListener('fit', resizeClosingCurly);

    TweenLite.from('.route', {
      opacity: 0,
      duration: 0.75,
      left: '-100px',
      stagger: 0.2,
    });

    return () => {
      fitText.unsubscribe();
      wrapperRef.removeEventListener('fit', resizeClosingCurly);
    };
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
      <NavHeader ref={closingCurly}>
        <br />
        {'}'}
      </NavHeader>
    </NavWrapper>
  );
};

export default Nav;
