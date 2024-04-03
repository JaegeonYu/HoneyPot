import { vars } from '@/globalTheme.css';
import { style } from '@vanilla-extract/css';

export const chartWrapper = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
  position: 'relative',
});

export const chartTitle = style({
  width: '100%',
  fontSize: '14px',
  fontWeight: 600,
  textAlign: 'center',
});

export const customLegendUlContainer = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  margin: 0,
  padding: 0,
});

export const customLegendLiItem = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  cursor: 'default',
});

export const colorBox = style({
  display: 'inline-block',
  flexShrink: '0',
  height: '16px',
  marginRight: '10px',
  width: '16px',
  borderRadius: 100,
});

export const legendTitle = style({
  fontSize: 12,
  color: vars.colors.service.MAIN_BLACK,
  paddingBottom: 2,
  lineHeight: '16px',
});

export const percentInCenter = style({
  display: 'flex',
  flexDirection: 'column',
  position: 'absolute',
  top: '49%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
});

export const percentInCenterText = style({
  fontSize: '13px',
  fontWeight: 600,
  textAlign: 'center',
});
