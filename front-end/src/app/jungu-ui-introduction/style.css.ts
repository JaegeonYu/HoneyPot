import { createVar, style } from '@vanilla-extract/css';
import { vars } from '@/globalTheme.css';

export const introWrapper = style({
  width: 1240,
  display: 'flex',
  flexDirection: 'column',
  rowGap: 32,
});
export const introTitle = style({
  display: 'flex',
  borderBottom: `1px solid ${vars.colors.service.HOVER_STROKE}`,
  fontSize: 22,
  fontWeight: 'bold',
  padding: '8px 0px',
});
export const introContent = style({
  display: 'flex',
  flexDirection: 'column',
  rowGap: 10,
});
export const item = style({
  display: 'flex',
  flexDirection: 'column',
  padding: '10px 12px',
  rowGap: 10,
  overflow: 'hidden',
});
export const itemTitle = style({
  display: 'flex',
});

export const panelHeight = createVar();

export const itemContent = style({
  width: 1216,
  padding: '1px 32px',
  overflow: 'hidden',
  maxHeight: panelHeight,
  transition: 'max-height 0.5s ease-out',
});
export const ulWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 15,
});
