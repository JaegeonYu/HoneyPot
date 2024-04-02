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

export const width = createVar();
export const height = createVar();
export const bottom = createVar();
export const right = createVar();
export const transform = createVar();
export const wrapper = style({
  width: width,
  maxWidth: '90vw',
  height: height,
  backgroundColor: vars.colors.service.MAIN_WHITE,
  borderRadius: '12px',
  position: 'fixed',
  bottom: bottom,
  right: right,
  transform: transform,
  zIndex: 10000002,
  transition: 'all 0.3s ease',
});

export const paddingTop = createVar();
export const container = style({
  width: '100%',
  height: '100%',
  paddingTop: paddingTop,
  position: 'relative',
});

export const icon = style({
  position: 'absolute',
  padding: '4px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  selectors: {
    [`&:hover`]: {
      backgroundColor: vars.colors.service.HOVER_STROKE,
    },
  },
});

export const extendIcon = style([
  icon,
  {
    width: '28px',
    height: '28px',
    top: '2px',
    left: '6px',
    padding: '4px',
    borderRadius: '100%',
  },
]);

export const arrowIcon = style([
  icon,
  {
    width: '28px',
    height: '28px',
    padding: '8px',
    top: '2px',
    left: '6px',
    borderRadius: '100%',
  },
]);

export const positionX = createVar();
export const positionY = createVar();
export const closeIcon = style([
  icon,
  {
    width: '28px',
    height: '28px',
    top: '2px',
    right: '4px',
    padding: '8px',
    borderRadius: '100%',
  },
]);
