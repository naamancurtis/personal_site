export var lightTheme = {};
export var darkTheme = {};

lightTheme = {
  theme: 'light',
  body: '#DEDBE2',
  text: '#5D5D74',
  heading: '#536E8A',
  primaryAccent: '#EC697F',
  secondaryAccent: '#405070',
  tertiaryAccent: '#F76B8E',
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
  primaryAccent: '#A6E7C1',
  secondaryAccent: '#41D2DA',
  tertiaryAccent: '#F76B8E',

  oppositeBackground: lightTheme.body,
  oppositeAccent: lightTheme.accent,
};
