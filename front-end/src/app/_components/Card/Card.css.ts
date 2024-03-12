import { createVar, style } from '@vanilla-extract/css';
import { vars } from '@/globalTheme.css';

export const aspectRatioProps = createVar();
export const wrapper = style({
  minWidth: 276,
  width: '100%',
  maxWidth: 402,
  aspectRatio: aspectRatioProps,
  borderRadius: 16,
  boxShadow: `0 4px 16px 0 rgba(0,0,0,0.16)`,
  position: 'relative',
});

export const imgHeight = createVar();
export const styledImage = style({
  width: '100%',
  height: imgHeight,
  borderBottom: '1px solid black',
});

// export const svgWrapper = style({
//   width: 'fit-content',
//   height: 'fit-content',
// });

// export const styledSvg = style({
//   fill: `${vars.colors.service.MAIN_BLACK}`,
//   selectors: {
//     [`${svgWrapper}:hover > &`]: {
//       fill: vars.colors.service.MAIN_GOLD,
//     },
//   },
// });
