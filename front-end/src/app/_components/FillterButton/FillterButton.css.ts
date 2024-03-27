import { vars } from '@/globalTheme.css';
import { createVar, globalStyle, style } from '@vanilla-extract/css';

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
export const item = style({
  borderRadius: '6px',
  overflow: 'hidden',
  backgroundColor: isSelectedBgColor,
});

export const isSelectedFontColor = createVar();
export const text = style({
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
    [`${item}:hover &`]: {
      backgroundColor: vars.colors.service.HOVER_BACKGROUND,
    },
    [`${item}:focus &`]: {
      fontWeight: 700,
      color: vars.colors.service.MAIN_WHITE,
      backgroundColor: vars.colors.service.MAIN_BLACK,
    },
  },
});
