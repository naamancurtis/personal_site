import React, { useRef, useEffect, lazy } from 'react';
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
import { Route } from '../../models/route';

const AboutMe = lazy(() => import('../../pages/about-me/about-me.component'));
const ProjectPage = lazy(() =>
  import('../../pages/projects/projects.component')
);
const SkillsPage = lazy(() => import('../../pages/skills/skills.component'));
const ContactDetailsPage = lazy(() =>
  import('../../pages/contact-details/contact-details.component')
);

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

const ImplBlock = () => {
  const wrapper = useRef<HTMLDivElement | null>(null);
  const headingWrapper = useRef<HTMLHeadingElement | null>(null);
  const closingCurly = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (!wrapper || !headingWrapper || !closingCurly) return;

    const wrapperRef = wrapper!.current;

    const resizeHandler = () => {
      const width = wrapperRef!.getBoundingClientRect().width;
      const fontSize = width / 21.8; // Seems to be the golden number
      headingWrapper.current!.style.fontSize = `${fontSize}px`;
      closingCurly.current!.style.fontSize = `${fontSize}px`;
    };

    window.addEventListener('resize', resizeHandler, { passive: true });

    TweenLite.from('.route', {
      opacity: 0,
      duration: 0.75,
      left: '-100px',
      stagger: 0.2,
    });

    setTimeout(() => {
      resizeHandler();
    }, 25);
    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  });

  useEffect(() => {});

  return (
    <ImplBlockWrapper ref={wrapper}>
      <ImplBlockHeader ref={headingWrapper}>
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
              <Function route={route}>{route.component}</Function>
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
