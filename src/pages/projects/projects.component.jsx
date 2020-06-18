import React from 'react';

import IMG_URL from '../../constants/img-urls';

import { ProjectWrapper } from './projects.styles';

import WorkCard from '../../components/work-card/work-card.component';

const PROJECTS = [
  {
    img:
      'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    title: 'Global Pharmaceutical Company',
    role: 'Front End Lead',
    description:
      'Managing a team of 4-5 people to build an internal business tool. The tool leveraged advanced data configuration and real time analytics to allow designers to bring life saving medicines to market quicker.',
    nda: true,
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
      press:
        'https://www2.deloitte.com/uk/en/pages/consulting/articles/astrazeneca.html',
    },
  },
];

const ProjectPage = () => {
  return (
    <ProjectWrapper>
      <WorkCard project={PROJECTS[0]} />
    </ProjectWrapper>
  );
};

export default ProjectPage;
