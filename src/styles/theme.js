export var lightTheme = {};
export var darkTheme = {};

const fonts = {
  code: `Ubuntu,'Fira Code', source-code-pro, 'Operator Mono', monospace`,
  heading: 'Raleway, Ubuntu, Fira Sans Extra Condensed, Fira Sans',
  body: 'Raleway, Ubuntu, Fira Sans Extra Condensed, Fira Sans',
};

lightTheme = {
  fonts: { ...fonts },
  theme: 'light',
  body: '#EDECEE',
  text: '#4C5D75',

  // Text Highlighting
  type: '#5698F5',
  keyword: '#2d3436',
  trait: '#294975',
  fnDef: '#F57D6E',
  params: '#4478C2',
  return: '#4478C2',

  // underlineStart: '#41B3A3',
  // underlineEnd: '#8860D0',

  underlineStart: '#ECA677',
  underlineEnd: '#6D62DF',

  error: '#E63A57',
  success: '#188D4F',

  contrastBody: darkTheme.body,
};

darkTheme = {
  ...lightTheme,
  theme: 'dark',
  body: '#393A47',
  text: '#DEDBE2',

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
