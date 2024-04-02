import { vars } from '@/globalTheme.css';
import { style } from '@vanilla-extract/css';

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
});

export const profileImg = style({
  width: '100%',
  height: '100%',
});
