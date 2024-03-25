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

export const isSelectedBgColor = createVar();
export const partyItem = style({
  borderRadius: '6px',
  overflow: 'hidden',
  backgroundColor: isSelectedBgColor,
});

export const isSelectedFontColor = createVar();
export const partyText = style({
  display: 'inline-block',
  width: 'fit-content',
  height: '100%',
  padding: '6px 16px',
  fontWeight: 500,
  fontSize: '14px',
  lineHeight: '27px',
  textWrap: 'nowrap',
  color: isSelectedFontColor,

  selectors: {
    [`${partyItem}:hover &`]: {
      backgroundColor: vars.colors.service.HOVER_BACKGROUND,
    },
    [`${partyItem}:focus &`]: {
      fontWeight: 700,
      color: vars.colors.service.MAIN_WHITE,
      backgroundColor: vars.colors.service.MAIN_BLACK,
    },
  },
});

export const skeletonPartyWrapper = style({
  width: '100%',
  height: '40px',
  borderRadius: '32px',
  backgroundColor: vars.colors.service.SUB_WHITE,
});
