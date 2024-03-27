import { vars } from '@/globalTheme.css';
import { createVar, globalStyle, style } from '@vanilla-extract/css';

export const userInteractionSection = style({
  width: '100%',
  height: 'fit-content',
  padding: '14px 0px',
});

export const inputWrapper = style({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  padding: '16px 0px',
});

export const areaSelectorWrapper = style({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
});

export const partyListWindow = style({
  width: '100%',
  height: '40px',
  overflowX: 'scroll',
  overflowY: 'hidden',
});
globalStyle(`${partyListWindow}::-webkit-scrollbar`, {
  display: 'none',
});

export const partySelectorWrapper = style({
  display: 'flex',
  gap: '16px',
  width: 'fit-content',
  height: '40px',
});

export const skeletonPartyWrapper = style({
  width: '100%',
  height: '40px',
  borderRadius: '32px',
  backgroundColor: vars.colors.service.SUB_WHITE,
});
