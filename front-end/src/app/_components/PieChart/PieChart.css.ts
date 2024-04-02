import { vars } from '@/globalTheme.css';
import { style } from '@vanilla-extract/css';

export const chartWrapper = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
});

export const chartTitle = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  fontSize: '14px',
  fontWeight: 600,
  textAlign: 'center',
});

export const customLegendUlContainer = style({
  minWidth: '100%',
  height: 'fit-content',
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: '12px',
  margin: 0,
  padding: 0,
});

export const customLegendLiItem = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 'fit-content',
  cursor: 'default',
});

export const colorBox = style({
  display: 'inline-block',
  flexShrink: '0',
  height: '16px',
  marginRight: '2px',
  width: '16px',
  borderRadius: 100,
});

export const legendTitle = style({
  fontSize: 10,
  height: 'fit-content',
  color: vars.colors.service.MAIN_BLACK,
  textWrap: 'nowrap',
});
