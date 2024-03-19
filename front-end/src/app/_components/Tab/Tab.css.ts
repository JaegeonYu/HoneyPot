import { vars } from '@/globalTheme.css';
import { createVar, style } from '@vanilla-extract/css';

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  gap: 32,
});

export const tabIndexWrapper = style({
  width: '100%',
  maxWidth: 660,
  height: 40,
  display: 'flex',
  gap: 16,
});

export const oneOfTabWidthVar = createVar();
export const color = createVar();
export const fontWeight = createVar();
export const borderBottom = createVar();
export const tabItem = style({
  selectors: {
    '&:hover': {
      borderBottom: `1px solid ${vars.colors.service.HOVER_STROKE}`,
      color: `${vars.colors.service.MAIN_BLACK}`,
    },
    '&:active, &:focus': {
      borderBottom: `1px solid ${borderBottom}`,
    },
  },

  width: oneOfTabWidthVar,
  height: '100%',
  padding: '10px 16px',
  color: color,
  fontWeight: fontWeight,
  fontSize: 14,
  borderBottom: `1px solid ${borderBottom}`,
});

export const translateX = createVar();
export const window = style({
  width: '100%',
  overflow: 'hidden',
});

export const tabsWrapper = style({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  transform: `translateX(calc(${translateX}))`,
  transition: 'transform 0.2s ease',
});

export const tabContainer = style({
  minWidth: '100%',
});
