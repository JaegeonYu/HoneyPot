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
    alignItems: 'stretch',
    justifyContent: 'space-between',
    gap: '48px',
    paddingBottom: '124px',

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
  width: '100%',
  maxWidth: '806px',
});

export const tabSectionWrapper = style([
  sectionWrapper,
  {
    flexDirection: 'column',
    alignItems: 'center',
  },
]);
