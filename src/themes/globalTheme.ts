import * as styledComponents from 'styled-components';

const colorPalette = {
  brandSuccess: '#4DB6AC',
  brandDanger: '#C63939',
  brandWarning: '#F7BF1E',
  brandWhite: '#FFFFFF',
  primaryButtonHover: '#FF9933',
  secondaryButtonHover: '#B6B6B6',
  tertiaryButtonHover: '#B6B6B6',
  heading4: '#767676',
  black: '#000000',
  greyDark: '#212121',
  grey: '#464646',
  greyLight: '#737373',
  greyLighter: '#B6B6B6',
  greyLighter1: '#DDDDDD',
  greyLighter2: '#F1F1F1',
  greyLighter3: '#F7F7F7',
  greyLighter4: '#F0F0F0',
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
