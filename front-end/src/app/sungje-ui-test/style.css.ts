import { style } from '@vanilla-extract/css';

export const gridWrapper = style({
  width: '100%',
  height: 'fit-content',
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: 34,
  padding: 16,

  '@media': {
    '(max-width: 1400px)': {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
    '(max-width: 1040px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
  },
});
