import { vars } from '@/globalTheme.css';
import { style } from '@vanilla-extract/css';

export const textContentInCard = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  width: '100%',
  height: '30%',
  padding: '6%',
});

export const badgesWrapper = style({
  display: 'flex',
  gap: '10px',
  width: '100%',
});

export const mainText = style({
  fontSize: 'clamp(14px, 2vw, 18px)',
  fontWeight: 600,
  margin: 0,

  '@media': {
    '(max-width: 640px)': {
      fontSize: '20px',
    },
  },
});

export const subText = style({
  fontSize: 'clamp(10px, 2vw, 12px)',
  marginLeft: '8px',
  color: vars.colors.service.SUB_BLACK,

  '@media': {
    '(max-width: 640px)': {
      fontSize: '14px',
    },
  },
});

export const areaName = style({
  height: 'clamp(12px, 15%, 26px)',
  fontSize: 'clamp(12px, 2vw, 14px)',
  lineHeight: 'clamp(12px, 15%, 26px)',

  '@media': {
    '(max-width: 640px)': {
      fontSize: '18px',
    },
  },
});

export const birthDate = style({
  fontSize: 'clamp(12px, 2vw, 14px)',
  color: vars.colors.service.SUB_BLACK,

  '@media': {
    '(max-width: 640px)': {
      fontSize: '16px',
    },
  },
});

export const snsWrapper = style({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  maxWidth: '276px',
  padding: '12px 8px',
});

export const snsItem = style({
  display: 'inline-block',
  position: 'relative',
  width: '42px',
  height: '44px',
  padding: '6px 0px 0px 6px',
  backgroundColor: vars.colors.service.MAIN_WHITE,
  boxShadow: '0 4px 10px 0 rgba(0,0,0,0.16)',
  borderRadius: '12px',
  overflow: 'hidden',
});

export const snsItemOverlay = style({
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
  backgroundColor: vars.colors.service.MAIN_BLACK,
  opacity: 0.3,
});
