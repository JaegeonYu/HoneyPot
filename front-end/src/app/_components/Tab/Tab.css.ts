import { vars } from '@/globalTheme.css';
import { createVar, style } from '@vanilla-extract/css';

export const categoryWrapper = style({
  width: '100%',
  maxWidth: 660,
  height: 40,
  display: 'flex',
  gap: 16,
});

export const oneOfCategoryWidthVar = createVar();
export const color = createVar();
export const fontWeight = createVar();
export const borderBottom = createVar();
export const category = style({
  selectors: {
    '&:hover': {
      borderBottom: `1px solid ${vars.colors.service.HOVER_STROKE}`,
      color: `${vars.colors.service.MAIN_BLACK}`,
    },
    '&:active, &:focus': {
      borderBottom: `1px solid ${borderBottom}`,
    },
  },

  width: oneOfCategoryWidthVar,
  height: '100%',
  padding: '10px 16px',
  color: color,
  fontWeight: fontWeight,
  fontSize: 14,
  borderBottom: `1px solid ${borderBottom}`,
});
