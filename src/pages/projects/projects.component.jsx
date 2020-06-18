import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import IMG_URL from '../../constants/img-urls';

import { ProjectWrapper } from './projects.styles';

import WorkCard from '../../components/work-card/work-card.component';

const PROJECTS = [
  {
    title: 'Global Pharmaceutical Company',
    role: 'Front End Lead',
    description:
      'Managing a team of 4-5 people to build an internal business tool. The tool leveraged advanced data configuration and real time analytics to allow designers to bring life saving medicines to market quicker.',
    stack: [
      { src: IMG_URL.ANGULAR },
      {
        srcFn: (theme) =>
          theme.theme === 'dark' ? IMG_URL.MONGO_DARK : IMG_URL.MONGO_LIGHT,
      },
    ],
    links: {
      live: null,
      code: null,
      press: '',
    },
  },
];

const ProjectPage = () => {
  const theme = useContext(ThemeContext);

  return (
    <ProjectWrapper>
      <WorkCard project={PROJECTS[0]} />
    </ProjectWrapper>
  );
};

export default ProjectPage;
