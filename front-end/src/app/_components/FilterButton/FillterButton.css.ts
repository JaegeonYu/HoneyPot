import { vars } from '@/globalTheme.css';
import { createVar, style } from '@vanilla-extract/css';

export const isSelectedBgColor = createVar();
export const item = style({
  display: 'inline-block',
  width: '100%',
  minWidth: 'fit-content',
  borderRadius: '6px',
  overflow: 'hidden',
  backgroundColor: isSelectedBgColor,
});

export const isSelectedFontColor = createVar();
export const text = style({
  width: '100%',
  minWidth: 'fit-content',
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
