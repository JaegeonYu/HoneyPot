import { createVar, style } from '@vanilla-extract/css';
import { vars } from '@/globalTheme.css';

export const partycolor = createVar();

export const dynamicZIndex = createVar();
export const dot = style({
  width: 18,
  height: 18,
  backgroundColor: partycolor,
  borderRadius: 90,
  zIndex: dynamicZIndex,
  position: 'relative',

  // selectors: {
  //   [`:after`]: {
  //     content: '',
  //     position: 'absolute',
  //     top: 0,
  //     left: 0,
  //     width: 100,
  //     height: 100,
  //     backgroundColor: 'blue',
  //   },
  // },
});

export const bar = style({
  width: '400%',
  height: 4,
  backgroundColor: 'inherit',
  position: 'absolute',
  top: 8,
  right: 4,
});
