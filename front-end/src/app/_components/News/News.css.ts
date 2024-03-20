import { createVar, style } from '@vanilla-extract/css';
import { vars } from '@/globalTheme.css';

export const newsWrapper = style({
  width: 1240,
  height: 168,
});

export const newsHeader = style({
  padding: 4,
  borderBottom: `1px solid ${vars.colors.service.HOVER_STROKE}`,
});

export const newsContent = style({});
export const newsItem = style({});
export const leftItems = style({
  display: 'flex',
});
export const rightItems = style({});
export const itemContent = style({});
export const itemDate = style({});
