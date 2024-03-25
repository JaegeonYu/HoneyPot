import { globalStyle, style } from '@vanilla-extract/css';

export const window = style({
  width: '100%',
  overflowY: 'hidden',
  overflowX: 'scroll',
});
globalStyle(`${window}::-webkit-scrollbar`, {
  visibility: 'hidden',
});

export const categoriesWrapper = style({
  display: 'flex',
  gap: '48px',
  width: 'fit-content',
});

export const categoryItem = style({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  width: 'fit-content',
  cursor: 'pointer',
});

export const selectedCategoryItem = style([categoryItem, {}]);
