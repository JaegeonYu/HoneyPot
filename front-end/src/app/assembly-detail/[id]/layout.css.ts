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

export const snsWrapper = style({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  padding: '12px 8px',
});

export const snsItem = style({
  width: '42px',
  height: '44px',
  paddingTop: '2px',
  backgroundColor: vars.colors.service.MAIN_WHITE,
  boxShadow: '0 4px 10px 0 rgba(0,0,0,0.16)',
  borderRadius: '12px',
});

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
