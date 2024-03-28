import { vars } from '@/globalTheme.css';
import { createVar, style } from '@vanilla-extract/css';

export const overlay = style({
  width: '100vw',
  height: '100vh',
  position: 'fixed',
  top: '0px',
  left: '0px',
  zIndex: 9999999,
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
  height: height,
  backgroundColor: vars.colors.service.MAIN_WHITE,
  borderRadius: '12px',
  position: 'fixed',
  bottom: bottom,
  right: right,
  transform: transform,
  zIndex: 10000000,

  transition: 'all 0.3s ease',
});

export const padding = createVar();
export const container = style({
  width: '100%',
  height: '100%',
  padding: padding,
  position: 'relative',
});

export const icon = style({
  position: 'absolute',
  padding: '4px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  selectors: {
    [`&:hover`]: {},
  },
});

export const extendIcon = style([
  icon,
  {
    top: '4px',
    left: '6px',
  },
]);

export const arrowIcon = style([
  icon,
  {
    width: '28px',
    height: '28px',
    padding: '8px',
    top: '4px',
    left: '6px',
    border: `1px solid ${vars.colors.service.SUB_BLACK}`,
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
    top: '4px',
    right: '4px',
    padding: '8px',
    border: `1px solid ${vars.colors.service.SUB_BLACK}`,
    borderRadius: '100%',
  },
]);
