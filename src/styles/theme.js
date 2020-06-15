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

// type: '#ED7666',
// keyword: '#657FAF',
// trait: '#52AE92',
// fnDef: '#2E8E89',
// params: '#ED7666',
// return: '#4F52A6',

//   underlineStart: '#41B3A3',
//   underlineEnd: '#8860D0',

//   error: '#E63A57',

//   contrastBody: darkTheme.body,
// };

// lightTheme = {
// fonts: { ...fonts },
// theme: 'light',
// body: '#DEDBE2',
// text: '#595F78',

// // Text Highlighting
// type: '#056370',
// keyword: '#EB937D',
// trait: '#4F52A6',
// fnDef: '',
// params: '',
// return: '#4E628B',

// underlineStart: '#41B3A3',
// underlineEnd: '#8860D0',

// error: '#E63A57',

// contrastBody: darkTheme.body,
// };

// lightTheme = {
//   fonts: { ...fonts },
//   theme: 'light',
//   body: '#EDECEE',
//   text: '#404756',

//   // Text Highlighting
//   type: '#2D549D',
//   keyword: '#404756',
//   trait: '#51285A',
//   fnDef: '#20416b',
//   params: '#806fa9',
//   return: '#0B785C',

//   underlineStart: '#41B3A3',
//   underlineEnd: '#8860D0',

//   error: '#E63A57',

//   contrastBody: darkTheme.body,
// };
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
  // return: '#294975',
  return: '#4478C2',

  underlineStart: '#41B3A3',
  underlineEnd: '#8860D0',

  error: '#E63A57',

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
  fnDef: '#41D2DA',
  params: '#2FCAA3',
  return: '#F76B8E',

  underlineStart: '#2FCAA3',
  underlineEnd: '#41D2DA',

  contrastBody: '#DEDBE2',
};
