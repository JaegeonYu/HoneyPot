import { createVar, style } from '@vanilla-extract/css';

export const cursor = createVar();
export const svgWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  cursor: cursor,
});

export const hoverColor = createVar();
export const focusColor = createVar();

export const widthProps = createVar();
export const heightProps = createVar();
export const styledSvg = style({
  width: widthProps,
  height: heightProps,
  fill: focusColor,

  selectors: {
    [`${svgWrapper}:hover > &`]: {
      fill: hoverColor,
    },
    [`${svgWrapper}:focus > &`]: {
      fill: focusColor,
    },
  },
});

export const fontSize = createVar();
export const hoverBorder = createVar();
export const focusBorder = createVar();
export const categoryName = style({
  display: 'inline-block',
  width: '100%',
  fontSize: fontSize,
  textAlign: 'center',
  textWrap: 'nowrap',
  paddingBottom: '8px',
  color: focusColor,
  borderBottom: `2px solid ${focusBorder}`,

  selectors: {
    [`${svgWrapper}:hover > &`]: {
      color: hoverColor,
      borderBottom: `2px solid ${hoverBorder}`,
    },
    [`${svgWrapper}:focus > &`]: {
      color: focusColor,
      borderBottom: `2px solid ${focusBorder}`,
    },
  },
});
