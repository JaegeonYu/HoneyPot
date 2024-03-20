import { vars } from '@/globalTheme.css';
import { createVar, globalStyle, style } from '@vanilla-extract/css';

export const window = style({
  width: '100%',
  overflowY: 'hidden',
  overflowX: 'scroll',
  position: 'relative',
});

globalStyle(`${window}::-webkit-scrollbar`, {
  visibility: 'hidden',
});

export const arrowButtonPositionRigiht = createVar();
export const categoriesWrapper = style({
  display: 'flex',
  gap: '48px',
  width: 'fit-content',
  transform: `translateX( ${arrowButtonPositionRigiht})`,
  transition: 'transform 0.2s ease',
});

export const billListWithChartWrapper = style({
  display: 'flex',
  justifyContent: 'space-between',

  paddingTop: '36px',
});

export const chartWrapper = style({
  width: '100%',
  height: '100%',
});

// export const categoryItem = style({
//   display: 'flex',
//   alignItems: 'center',
//   flexDirection: 'column',
//   width: 'fit-content',
//   cursor: 'pointer',

//   selectors: {
//     [`&:hover`]: {
//       fill: vars.colors.service.MAIN_BLACK,
//     },
//   },
// });

// export const categoryName = style({
//   color: vars.colors.service.SUB_BLACK,
//   borderBottom: `1px solid ${vars.colors.service.MAIN_WHITE}`,
//   textWrap: 'nowrap',
//   fontSize: '16px',

//   selectors: {
//     [`${categoryItem} &:hover`]: {
//       color: vars.colors.service.MAIN_BLACK,
//       borderBottom: `1px solid ${vars.colors.service.SUB_BLACK}`,
//     },
//     [`${categoryItem} &:focus-within`]: {
//       color: vars.colors.service.MAIN_BLACK,
//       borderBottom: `1px solid ${vars.colors.service.MAIN_BLACK}`,
//     },
//   },
// });

// export const arrowButtonWrapper = style({
//   width: '16px',
//   height: '16px',
//   borderRadius: '100%',
//   backgroundColor: vars.colors.service.MAIN_WHITE,
//   position: 'absolute',
//   right: `${arrowButtonPositionRigiht}`,
//   top: '40%',
//   transform: `translate(-50%, 0%)`,
// });

// export const styleArrowSvg = style({
//   transform: 'rotate(90deg)',
// });
