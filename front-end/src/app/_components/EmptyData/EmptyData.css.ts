import { createVar, style } from '@vanilla-extract/css';

export const maxWidth = createVar();
export const maxHeight = createVar();
export const emptyDataImage = style({
  maxWidth: maxWidth,
  maxHeight: maxHeight,
  aspectRatio: 3 / 1,
});

export const emptyDataWrapper = style({
  width: '100%',
  aspectRatio: '1 / 1',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});
