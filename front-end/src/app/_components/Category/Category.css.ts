import { createVar, globalStyle, style } from '@vanilla-extract/css';
import { vars } from '@/globalTheme.css';

export const aspectRatioProps = createVar();
export const wrapper = style({
  display: 'flex',
  justifyContent: 'center',
  width: '1240px',
  height: '76px',
  // textAlign: 'center',
  // alignItems: 'center',
  gap: 16,
  border: '1px solid black',
});

export const categoryCard = style({
  width: 'fit-content',
  height: '100%',
  border: '1px solid red',
});

export const svgWrapper = style({
  width: '30px',
  height: '34px',
});

export const styledSvg = style({
  fill: vars.colors.service.SUB_BLACK,
  width: '100%',
  height: '100%',
  border: '1px solid blue',
  display: 'block',
  verticalAlign: 'top',
});

export const name = style({
  color: vars.colors.service.SUB_BLACK,
  fontSize: '14px',
  border: '1px solid yellow',
});
