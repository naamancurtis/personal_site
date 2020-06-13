export var lightTheme = {};
export var darkTheme = {};

// const fonts = {
// code: `'Fira Code', source-code-pro, 'Operator Mono', monospace`,
// heading: 'Fira Sans Extra Condensed, Fira Sans',
// body: 'Fira Sans Extra Condensed, Fira Sans',
// };

const fonts = {
  code: ` Ubuntu,'Fira Code', source-code-pro, 'Operator Mono', monospace`,
  heading: 'Raleway, Ubuntu, Fira Sans Extra Condensed, Fira Sans',
  body: 'Ubuntu, Fira Sans Extra Condensed, Fira Sans',
};

lightTheme = {
  fonts: { ...fonts },
  theme: 'light',
  body: '#DEDBE2',
  text: '#5D5D74',
  heading: '#536E8A',
  primaryAccent: '#4A4371',
  secondaryAccent: '#4B5B9C',
  tertiaryAccent: '#84C6BE',
  quarternayAccent: '',
  error: '#E63A57',

  oppositeBackground: darkTheme.body,
  oppositeAccent: darkTheme.accent,
};

darkTheme = {
  ...lightTheme,
  theme: 'dark',
  body: '#393A47',
  text: lightTheme.body,
  heading: '#2FCAA3',
  primaryAccent: '#DE4F67',
  secondaryAccent: '#41D2DA',
  tertiaryAccent: '#F76B8E',
  quarternayAccent: '#2FCAA3',

  oppositeBackground: lightTheme.body,
  oppositeAccent: lightTheme.accent,
};
