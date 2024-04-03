import { style } from '@vanilla-extract/css';

export const gridWrapper = style({
  width: '100%',
  height: 'fit-content',
  display: 'grid',
  gridTemplateColumns: 'repeat(5, 1fr)',
  alignItems: 'center',
  justifyItems: 'center',
  gap: 34,
  padding: 16,
  transition: 'padding 0.5s ease',

  '@media': {
    '(max-width: 1360px)': {
      gridTemplateColumns: 'repeat(4, 1fr)',
    },
    '(max-width: 1040px)': {
      gridTemplateColumns: 'repeat(3, 1fr)',
      padding: '16px 48px',
    },
    '(max-width: 878px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
      padding: '16px 4vw',
    },
    '(max-width: 714px)': {
      gridTemplateColumns: 'repeat(1, 1fr)',
      padding: '16px 3vw',
    },
  },
});
