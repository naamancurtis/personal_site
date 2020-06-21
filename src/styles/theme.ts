export type ThemeFonts = {
  code: string;
  heading: string;
  body: string;
};

export type Theme = {
  fonts: ThemeFonts;

  theme: string;
  body: string;
  text: string;

  // Text Highlighting
  type: string;
  keyword: string;
  trait: string;
  fnDef: string;
  params: string;
  return: string;

  underlineStart: string;
  underlineEnd: string;

  error: string;
  success: string;

  contrastBody: string;
  contrastText: string;
};

const _dark_theme = {
  body: '#393A47',
  text: '#DEDBE2',
};

const fonts: ThemeFonts = {
  code: `Ubuntu,'Fira Code', source-code-pro, 'Operator Mono', monospace`,
  heading: 'Raleway, Ubuntu, Fira Sans Extra Condensed, Fira Sans',
  body: 'Raleway, Ubuntu, Fira Sans Extra Condensed, Fira Sans',
};

export const lightTheme: Theme = {
  fonts: { ...fonts },
  theme: 'light',
  body: '#EDECEE',
  text: '#4C5D75',

  // Text Highlighting
  type: '#294975',
  keyword: '#2d3436',
  trait: '#22AAA1',
  fnDef: '#F57D6E',
  params: '#4478C2',
  return: '#4478C2',

  underlineStart: '#ECA677',
  underlineEnd: '#6D62DF',

  error: '#ED6A5A',
  success: '#188D4F',

  contrastBody: _dark_theme.body,
  contrastText: _dark_theme.text,
};

export const darkTheme = {
  ...lightTheme,
  theme: 'dark',
  body: _dark_theme.body,
  text: _dark_theme.text,

  // Text Highlighting
  type: '#41D2DA',
  keyword: '#F76B8E',
  trait: '#2FCAA3',
  fnDef: '#59B6E8',
  params: '#F991FF',
  return: '#F76B8E',

  success: '#20CB81',

  underlineStart: '#2FCAA3',
  underlineEnd: '#8860D0',

  contrastBody: '#DEDBE2',
};
