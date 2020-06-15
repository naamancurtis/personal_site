export var lightTheme = {};
export var darkTheme = {};

const fonts = {
  code: `Ubuntu,'Fira Code', source-code-pro, 'Operator Mono', monospace`,
  heading: 'Raleway, Ubuntu, Fira Sans Extra Condensed, Fira Sans',
  body: 'Raleway, Ubuntu, Fira Sans Extra Condensed, Fira Sans',
};

// lightTheme = {
//   fonts: { ...fonts },
//   theme: 'light',
//   body: '#DEDBE2',
//   text: '#595F78',

//   // Text Highlighting
//   type: '#44318D',
//   keyword: '#EB7274',
//   trait: '#41B3A3',

//   underlineStart: '#41B3A3',
//   underlineEnd: '#8860D0',

//   error: '#E63A57',

//   contrastBody: darkTheme.body,
// };
lightTheme = {
  fonts: { ...fonts },
  theme: 'light',
  body: '#DEDBE2',
  text: '#595F78',

  // Text Highlighting
  type: '#FFAAAB',
  keyword: '#2A5A95',
  trait: '#52AE92',
  fnDef: '',
  params: '',
  return: '',

  underlineStart: '#41B3A3',
  underlineEnd: '#8860D0',

  error: '#E63A57',

  contrastBody: darkTheme.body,
};

darkTheme = {
  ...lightTheme,
  theme: 'dark',
  body: '#393A47',
  text: lightTheme.body,

  // Text Highlighting
  type: '#41D2DA',
  keyword: '#F76B8E',
  trait: '#2FCAA3',
  fnDef: '#41D2DA',
  params: '#2FCAA3',
  return: '#F76B8E',

  underlineStart: '#2FCAA3',
  underlineEnd: '#41D2DA',

  contrastBody: lightTheme.body,
};
