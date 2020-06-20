import React, { useRef, useEffect } from 'react';
import fitty from 'fitty';
import { TweenLite } from 'gsap';
import {
  ImplBlockWrapper,
  ImplBlockHeader,
  FnDefWrapper,
  ImplBlockLineItem,
  RoutesWrapper,
  Curlys,
} from './impl-block.styles';
import {
  BoldType,
  Keyword,
  Trait,
} from '../../atoms/function-types/function-types.styles';
import Function from '../function/function.component';
import AboutMe from '../../pages/about-me/about-me.component';
import ProjectPage from '../../pages/projects/projects.component';
import SkillsPage from '../../pages/skills/skills.component';
import ContactDetailsPage from '../../pages/contact-details/contact-details.component';
import { Route } from '../../models/route';

const ROUTES: Route[] = [
  {
    name: 'about_me',
    paramPrefix: '&',
    result: 'AboutMe',
    component: <AboutMe isOpen={false} />,
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
    component: <SkillsPage isOpen={false} />,
  },
  {
    name: 'contact_me',
    paramPrefix: '&',
    result: 'ContactDetails',
    component: <ContactDetailsPage />,
  },
];

interface FittyEvent {
  detail: {
    newValue: number;
  };
}

const ImplBlock = () => {
  const wrapper = useRef<HTMLHeadingElement | null>(null);
  const closingCurly = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (!wrapper || !closingCurly) return;

    const wrapperRef = wrapper!.current;

    const fitText = fitty(wrapperRef!);

    const resizeClosingCurly = (e: FittyEvent) => {
      const size = e.detail.newValue;
      closingCurly!.current!.style.fontSize = `${size}px`;
    };

    // Not able to find any typings for fitty.js
    // @ts-ignore
    wrapperRef!.addEventListener('fit', resizeClosingCurly);

    TweenLite.from('.route', {
      opacity: 0,
      duration: 0.75,
      left: '-100px',
      stagger: 0.2,
    });

    return () => {
      fitText.unsubscribe();
      // @ts-ignore
      wrapperRef.removeEventListener('fit', resizeClosingCurly);
    };
  });

  return (
    <ImplBlockWrapper>
      <ImplBlockHeader ref={wrapper}>
        <Keyword>impl &nbsp;</Keyword>
        <Trait>SoftwareEngineer &nbsp;</Trait>
        <Keyword>for &nbsp;</Keyword>
        <BoldType>NaamanCurtis&nbsp;</BoldType> <Curlys>{'{'}</Curlys>
      </ImplBlockHeader>
      <RoutesWrapper>
        <FnDefWrapper>
          {ROUTES.map((route) => (
            <ImplBlockLineItem key={route.name} className="route">
              <br />
              <Function route={route} children={route.component}></Function>
            </ImplBlockLineItem>
          ))}
        </FnDefWrapper>
      </RoutesWrapper>
      <Curlys ref={closingCurly}>
        <br />
        {'}'}
      </Curlys>
    </ImplBlockWrapper>
  );
};

export default ImplBlock;
