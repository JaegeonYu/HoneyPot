import { vars } from '@/globalTheme.css';
import { createVar, style, keyframes } from '@vanilla-extract/css';

export const mainWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  // alignItems: 'center',
  width: '120%',
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
export const solganSubWrapper = style({
  display: 'flex',
  flexDirection: 'row',
  // alignItems: 'center',
  marginTop: '8%',
  marginBottom: '8%',
  justifyContent: 'center',
  width: '100%',
});

export const tempWrapper = style({
  display: 'flex',
  flexDirection: 'row',
  // alignItems: 'center',
  height: '1230px',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  backgroundColor: `${vars.colors.service.HOVER_BACKGROUND}`,
});

const rotate = keyframes({
  // '0%': { transform: 'rotate(0deg)' },
  '50%': { transform: 'translateY(-30px)' },
  '100%': { transform: 'translateY(0px)' },
});
export const arrow = style({
  alignItems: 'center',
  justifyContent: 'center',
  display: 'flex',
  width: '100%',
  animationName: rotate,
  animationDuration: '2s',
  animationIterationCount: 'infinite',
});

////////////////////////////////////////FONT STYLE/////////////////
export const solganFont = style({
  fontSize: 60,
  fontWeight: 500,
  textAlign: 'center',
});
export const solganSubFont = style({
  fontSize: 28,
  fontWeight: 700,
  textAlign: 'center',
});
