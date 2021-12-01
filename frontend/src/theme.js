export const color = {
  secondary: '#5f9efc',
  red: '#db3838',
  primary: '#24c217',
  white: '#ffffff',
  gray1: '#333333',
  gray2: '#676767',
  gray3: '#d0d0d0',
  gray4: '#f5f5f5',
};

color.canvasBgColor = color.gray4;

const xxxs = '0.375rem';
const xxs = '0.625rem';
const xs = '0.75rem';
const sm = '1.125rem';
const md = '1.375rem';
const lg = '1.75rem';
const xl = '2.25rem';
const xxl = '3.5rem';

export const spacing = {
  xxxs,
  xxs,
  xs,
  sm,
  md,
  lg,
  xl,
  xxl,
  button: `${xs} ${xl}`,
  input: `${xs}`,

  sidebarWidth: '300px',
  headerHeight: '65px',
};

export const zIndex = {
  interface: 10,
};

export const borderWidth = {
  bold: '3px',
  normal: '2px',
};

export const media = {
  sm: '@media only screen and (min-width: 421px) and (max-width: 767px)',
  md: '@media only screen and (min-width: 768px) and (max-width: 1023px)',
  lg: '@media only screen and (min-width: 1024px) and (max-width: 1439px)',
  xl: '@media only screen and (min-width: 1440px)',
};
