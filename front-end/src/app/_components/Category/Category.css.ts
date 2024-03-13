import { createVar, style } from '@vanilla-extract/css';

export const widthProps = createVar();
export const heightProps = createVar();
export const svgWrapper = style({
  width: widthProps,
  height: heightProps,
});

export const defaultColor = createVar();
export const hoverColor = createVar();
export const styledSvg = style({
  width: '100%',
  height: '100%',
  fill: defaultColor,

  selectors: {
    [`${svgWrapper}:hover > &`]: {
      fill: hoverColor,
    },
  },
});
