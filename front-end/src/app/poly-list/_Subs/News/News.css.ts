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
  gap: 10,
  padding: '0px 16px',
});

export const leftItem = style({
  width: '50%',
});
export const rightItem = style({
  width: '50%',
});
export const line = style({
  width: 1,
  backgroundColor: `${vars.colors.service.STROKE_OR_BLUR}`,
});

export const item = style({
  display: 'flex',
  justifyContent: 'space-between',
  gap: 64,
  padding: '10px 0px',
});

export const itemContent = style({
  overflow: 'hidden',
});

export const itemDate = style({
  color: `${vars.colors.service.SUB_BLACK}`,
});
