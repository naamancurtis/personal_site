export var lightTheme = {};
export var darkTheme = {};

// const fonts = {
// code: `'Fira Code', source-code-pro, 'Operator Mono', monospace`,
// heading: 'Fira Sans Extra Condensed, Fira Sans',
// body: 'Fira Sans Extra Condensed, Fira Sans',
// };

const fonts = {
  code: `Ubuntu,'Fira Code', source-code-pro, 'Operator Mono', monospace`,
  heading: 'Raleway, Ubuntu, Fira Sans Extra Condensed, Fira Sans',
  body: 'Raleway, Ubuntu, Fira Sans Extra Condensed, Fira Sans',
};

lightTheme = {
  fonts: { ...fonts },
  theme: 'light',
  body: '#DEDBE2',
  text: '#595F78',
  primaryAccent: '#41B3A3',
  secondaryAccent: '#44318D',
  tertiaryAccent: '#EB7274',
  quarternayAccent: '#41B3A3',
  error: '#E63A57',
  underlineStart: '#41B3A3',
  underlineEnd: '#8860D0',

  contrastBody: darkTheme.body,
  oppositeAccent: darkTheme.accent,
};

darkTheme = {
  ...lightTheme,
  theme: 'dark',
  body: '#393A47',
  text: lightTheme.body,
  primaryAccent: '#DE4F67',
  secondaryAccent: '#41D2DA',
  tertiaryAccent: '#F76B8E',
  quarternayAccent: '#2FCAA3',
  underlineStart: '#2FCAA3',
  underlineEnd: '#41D2DA',

  contrastBody: lightTheme.body,
  oppositeAccent: lightTheme.accent,
};
