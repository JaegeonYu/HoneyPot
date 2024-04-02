import { vars } from '@/globalTheme.css';
import { style } from '@vanilla-extract/css';

export const sectionWrapper = style({
  display: 'flex',
  width: '100%',
  height: 'fit-content',
});

export const mainSectionWrapper = style([
  sectionWrapper,
  {
    width: '100%',
    alignItems: 'stretch',
    justifyContent: 'center',
    gap: '24px',
    paddingBottom: '4vh',

    '@media': {
      '(max-width: 640px)': {
        flexDirection: 'column',
      },
    },
  },
]);

export const cardWrapper = style({
  width: '20%',
  minWidth: 'fit-content',
  '@media': {
    '(max-width: 974px)': {
      width: '35%',
    },

    '(max-width: 640px)': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
    },
  },
});

export const rightOfMainContent = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: '128px',
  width: '60%',
  maxWidth: '806px',

  '@media': {
    '(max-width: 974px)': {
      width: '40%',
    },

    '(max-width: 640px)': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
    },
  },
});

export const tabSectionWrapper = style([
  sectionWrapper,
  {
    flexDirection: 'column',
    alignItems: 'center',
  },
]);
