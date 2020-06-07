const LIGHT_BACKGROUND = '#DEDBE2';
const LIGHT_ACCENT = '#EC697F';
const DARK_BACKGROUND = '#393A47';
const DARK_ACCENT = '#A6E7C1';

export const lightTheme = {
  theme: 'light',
  body: LIGHT_BACKGROUND,
  text: '#405070',
  accent: LIGHT_ACCENT,

  oppositeBackground: DARK_BACKGROUND,
  oppositeAccent: DARK_ACCENT,
};

export const darkTheme = {
  theme: 'dark',
  body: DARK_BACKGROUND,
  text: '#41D2DA',
  accent: DARK_ACCENT,

  oppositeBackground: LIGHT_BACKGROUND,
  oppositeAccent: LIGHT_ACCENT,
};
