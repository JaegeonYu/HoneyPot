import { createVar, style } from '@vanilla-extract/css';
import { vars } from '@/globalTheme.css';

export const newsWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
});

export const newsHeader = style({
  padding: 4,
  borderBottom: `1px solid ${vars.colors.service.STROKE_OR_BLUR}`,
  fontSize: 18,
  fontWeight: 'bold',
});

export const newsContent = style({
  display: 'flex',
  justifyContent: 'center',
  gap: 10,
});

export const items = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
  padding: '0px 16px',
  fontSize: 14,
  width: '100%',
});
export const line = style({
  width: 1,
  backgroundColor: `${vars.colors.service.STROKE_OR_BLUR}`,
});

export const item = style({
  display: 'flex',
  justifyContent: 'space-between',
  gap: 64,
});

export const itemContent = style({
  color: `${vars.colors.service.MAIN_BLACK}`,
});

export const itemDate = style({
  color: `${vars.colors.service.SUB_BLACK}`,
});
