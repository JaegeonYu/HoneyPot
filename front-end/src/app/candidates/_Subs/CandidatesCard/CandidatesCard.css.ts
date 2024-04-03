import { vars } from '@/globalTheme.css';
import { createVar, keyframes, style } from '@vanilla-extract/css';

export const infoSection = style({
  maxWidth: '276px',
  height: '424px',
  aspectRatio: '1 / 1.4',
  cursor: 'pointer',
});

export const cardWrapper = style({
  width: '100%',
  height: 'calc(100% - 36px)',
});

export const profileImgWrapper = style({
  maxWidth: '276px',
  aspectRatio: '1 / 1.4',
  borderRadius: '12px',
  overflow: 'hidden',
  position: 'relative',
});

export const profileImg = style({
  width: '100%',
  height: '100%',
  borderRadius: '12px',
});

const rotate = keyframes({
  '0%': { transform: 'rotateY(0deg)' },
  '25%': { transform: 'rotateY(60deg)' },
  '50%': { transform: 'rotateY(120deg)' },
  '100%': { transform: 'rotateY(0deg)' },
});

export const flipCardFlag = createVar();
export const flipCard = style({
  position: 'relative',
  width: '100%',
  height: '100%',
  borderRadius: '12px',

  textAlign: 'center',
  transition: 'transform 0.6s',
  transformStyle: 'preserve-3d',
  boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',

  animation: `0.7s 1 alternate ${rotate}`,
  transform: flipCardFlag,
});

export const flipCardInner = style({
  position: 'relative',
  width: '100%',
  height: '100%',
  textAlign: 'center',
  transition: 'transform 0.6s',
  transformStyle: 'preserve-3d',
  boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
  borderRadius: '12px',
});

export const flipCardFront = style({
  position: 'absolute',
  width: '100%',
  height: '100%',
  WebkitBackfaceVisibility: 'hidden',
  backfaceVisibility: 'hidden',
  color: 'black',
  borderRadius: '12px',
});

export const flipCardBack = style({
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
  width: '100%',
  height: '100%',
  padding: '16px',
  WebkitBackfaceVisibility: 'hidden',
  backfaceVisibility: 'hidden',
  color: 'white',
  transform: 'rotateY(180deg)',
  borderRadius: '12px',
});

export const hgName = style({
  width: '100%',
  textAlign: 'center',
  fontWeight: 600,
});

export const giho = style({
  textAlign: 'center',
  fontWeight: 500,
  fontSize: '16px',
  color: vars.colors.service.SUB_BLACK,
});

export const headingTitle = style({
  textAlign: 'left',
  paddingLeft: '2px',
  margin: '0px 6px',
  borderBottom: `1px solid ${vars.colors.service.SUB_BLACK}`,
  fontWeight: 600,
  fontSize: '18px',
});

export const content = style({
  fontSize: '14px',
  textAlign: 'left',
  paddingLeft: '2px',
  margin: '0px 6px',
});

export const subContent = style({
  fontSize: '12px',
  color: vars.colors.service.SUB_BLACK,
});
