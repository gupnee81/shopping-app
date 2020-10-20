import * as styledComponents from 'styled-components';

const colorPalette = {
  heading4: '#052d4f',
  black: '#000000',
  greyDark: '#212121',
  grey: '#464646',
  greyLight: '#737373',
};

const sizePalette = {
  heading1: '32px',
  heading2: '24px',
  heading3: '18px',
  heading4: '14px',
  paragraph: '16px',
  button: '16px',
  label: '11px',
};

const { default: styled, css, createGlobalStyle, keyframes, ThemeProvider } = styledComponents;

export interface ThemeInterface {
  color: any;
  DesktopSize: any;
}

export const theme: ThemeInterface = {
  color: colorPalette,
  DesktopSize: sizePalette,
};

export default styled;

export { css, createGlobalStyle, keyframes, ThemeProvider };
