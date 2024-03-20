import { vars } from '@/globalTheme.css';
import { createVar, style } from '@vanilla-extract/css';

export const widthProps = createVar();
export const heightProps = createVar();
export const svgWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const defaultColor = createVar();
export const hoverColor = createVar();
export const focusColor = createVar();
export const styledSvg = style({
  width: widthProps,
  height: heightProps,
  fill: defaultColor,

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
  width: '100%',
  color: defaultColor,
  fontSize: fontSize,
  textAlign: 'center',
  textWrap: 'nowrap',
  borderBottom: `2px solid ${vars.colors.service.MAIN_WHITE}`,

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
