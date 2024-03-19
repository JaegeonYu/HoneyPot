import { vars } from '@/globalTheme.css';
import { createVar, style } from '@vanilla-extract/css';

export const mainWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  // alignItems: 'center',
  width: '100%',
  overflow: 'hidden',
  position: 'relative',
});

export const solganSection = style({
  display: 'flex',
  flexDirection: 'column',
  height: '80vh',
  width: '100%',
  justifyContent: 'space-between',
  backgroundColor: `${vars.colors.service.MAIN_COLOR_20}`,
});

export const solganWrapper = style({
  display: 'flex',
  flexDirection: 'row',
  // alignItems: 'center',
  marginTop: '8%',
  justifyContent: 'center',
  width: '100%',
});

export const arrow = style({
  alignItems: 'center',
  justifyContent: 'center',
  display: 'flex',
  width: '100%',
});

export const tempWrapper = style({
  display: 'flex',
  flexDirection: 'row',
  // alignItems: 'center',
  height: '1230px',
  justifyContent: 'center',
  width: '100%',
});

////FONT STYLE////
export const solganFont = style({
  fontSize: 60,
  fontWeight: 500,
  textAlign: 'center',
});
