import * as styledComponents from 'styled-components';

const colorPalette = {
  heading1: '#052d4f',
  heading4: '#052d4f',
  buttonBackgroundColor: '#ff6d05',
  buttonBorderColor: '#ff6d05',
  divColor: '#052d4f',
  white: '#fff',
  black: '#000000',
  greyDark: '#212121',
  grey: '#464646',
  greyLight: '#737373',
};

const sizePalette = {
  heading1: '32px',
  heading2: '28px',
  heading3: '20px',
  heading4: '16px',
  price: '20px',
  name: '20px',
  paragraph: '14px',
  button: '12px',
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
