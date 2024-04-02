import { vars } from '@/globalTheme.css';
import { createVar, style } from '@vanilla-extract/css';

export const overlay = style({
  width: '100vw',
  height: '100vh',
  position: 'fixed',
  top: '0px',
  left: '0px',
  zIndex: 10000001,
  backgroundColor: vars.colors.service.SUB_BLACK,
  opacity: '0.5',
});

export const wrapper = style({
  width: '80vw',
  height: '75vh',
  backgroundColor: vars.colors.service.MAIN_WHITE,
  borderRadius: '12px',
  position: 'fixed',
  bottom: '-20%',
  right: '-30.5%',
  transform: 'translate(-50%, -45%)',
  zIndex: 10000002,
  transition: 'all 0.3s ease',
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

export const cardWrapper = style({
  maxWidth: '276px',
  aspectRatio: '1 / 1.4',
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
  // backgroundColor: '#bbb',
  color: 'black',
  borderRadius: '12px',
});

export const flipCardBack = style({
  position: 'absolute',
  width: '100%',
  height: '100%',
  WebkitBackfaceVisibility: 'hidden',
  backfaceVisibility: 'hidden',
  // backgroundColor: '#2980b9',
  color: 'white',
  transform: 'rotateY(180deg)',
  borderRadius: '12px',
});
