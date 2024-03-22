import { style } from '@vanilla-extract/css';
import { vars } from '@/globalTheme.css';

export const newsSection = style({
  width: '100%',
});
export const listSection = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
});

export const newsTitle = style({
  width: '100%',
  fontSize: 18,
  fontWeight: 'bold',
  borderBottom: `1px solid ${vars.colors.service.STROKE_OR_BLUR}`,
  padding: '8px 0',
});

export const newsContent = style({});
