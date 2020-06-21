import IMG_URL from '../constants/img-urls';
import { Theme } from '../styles/theme';

export default [
  {
    name: 'Rust',
    alt: 'Rust Programming Language ',
    description: 'Rust',
    imgSrc: IMG_URL.RUST,
    additional: '(A particular area of interest)',
  },
  {
    name: 'Go',
    alt: 'Go Programming Language',
    description: 'Golang',
    imgSrc: IMG_URL.GO,
  },
  {
    name: 'Typescript',
    alt: 'Typescript',
    description: 'TypeScript',
    imgSrc: IMG_URL.TYPESCRIPT,
  },
  {
    name: 'Javascript',
    alt: 'Javascript',
    description: 'Javascript',
    imgSrc: IMG_URL.JAVASCRIPT,
  },
  {
    name: 'Angular',
    alt: 'Angular',
    description: 'Angular',
    imgSrc: IMG_URL.ANGULAR,
  },
  {
    name: 'React',
    alt: 'React',
    description: 'React',
    imgSrc: IMG_URL.REACT,
  },
  {
    name: 'Node.js',
    alt: 'Node.js',
    description: 'Node.js',
    imgSrc: '',
    imgFn: (theme: Theme) =>
      theme.theme === 'dark' ? IMG_URL.NODE_DARK : IMG_URL.NODE_LIGHT,
  },
  {
    name: 'Docker',
    alt: 'Docker',
    description: 'Docker',
    imgSrc: IMG_URL.DOCKER,
  },
  {
    name: 'Git',
    alt: 'Git',
    description: 'Git',
    imgSrc: IMG_URL.GIT,
  },
];
