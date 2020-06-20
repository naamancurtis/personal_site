import IMG_URL from '../constants/img-urls';
import { DefaultTheme } from 'styled-components';

export default [
  {
    img:
      'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    title: 'Global Pharmaceutical Company',
    role: 'Front End Lead',
    description: [
      'Managing a team of 4-5 front-end developers (across timezones) to build a global internal business tool.',
      'The tool leveraged real-time data configuration and analytics to allow trial designers to more effectively design trials. Enabling the company to bring life saving medicines to market quicker.',
    ],
    nda: true,
    stack: [
      { src: IMG_URL.ANGULAR, alt: 'Angular' },
      {
        src: IMG_URL.MONGO,
        alt: 'MongoDB',
      },
    ],
    links: {
      live: null,
      code: null,
      press:
        'https://www2.deloitte.com/uk/en/pages/consulting/articles/astrazeneca.html',
    },
  },
  {
    img:
      'https://images.unsplash.com/photo-1454165205744-3b78555e5572?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    title: 'Governmental Funding Agency',
    role: 'Tech Lead',
    description: [
      'Tech lead on digital initiative as well as building a fully functional proof of concept digital application form, a first for the company.',
      'This app automated the processing of applications against business policy and priorities in real-time, and enabled richer data capture and analysis than ever before.',
    ],
    nda: true,
    stack: [
      { src: IMG_URL.ANGULAR, alt: 'Angular' },
      {
        src: IMG_URL.FIREBASE,
        alt: 'Firebase',
      },
      {
        srcFn: (theme: DefaultTheme) =>
          theme.theme === 'dark' ? IMG_URL.NODE_DARK : IMG_URL.NODE_LIGHT,
        alt: 'Node.js & Express.js',
      },
    ],
    links: {
      live: null,
      code: null,
      press: null,
    },
  },
];
