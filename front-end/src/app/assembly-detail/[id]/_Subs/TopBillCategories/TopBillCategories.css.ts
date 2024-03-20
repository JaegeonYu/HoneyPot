import { vars } from '@/globalTheme.css';
import { style } from '@vanilla-extract/css';

export const titleText = style({
  lineHeight: '18px',
  fontSize: '18px',
  fontWeight: 700,
  padding: '4px 0px',
  marginBottom: '12px',
  borderBottom: `1px solid ${vars.colors.service.STROKE_OR_BLUR}`,
});

export const mostCategoriesWrapper = style({
  width: '100%',
  height: 'fit-content',
});

export const mostCategoryContainer = style({
  display: 'flex',
  gap: '24px',
});

export const categoryItem = style({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  gap: '8px',
  padding: '0px 16px 12px 16px',
});

export const categoryName = style({
  fontSize: '14px',
  textAlign: 'center',
});
