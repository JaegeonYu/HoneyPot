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
    height: 'calc(642px + 124px)',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    paddingBottom: '124px',
  },
]);

export const rightOfMainContent = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
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
