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
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  flexDirection: 'column',
  gap: '24px',
  width: '80vw',
  height: '90vh',
  padding: '24px',
  backgroundColor: vars.colors.service.MAIN_WHITE,
  borderRadius: '12px',
  position: 'fixed',
  bottom: '-35%',
  right: '-30.5%',
  transform: 'translate(-50%, -45%)',
  zIndex: 10000002,
  transition: 'all 0.3s ease',

  '@media': {
    '(max-width: 984px)': {
      height: 'fit-content',
      flexDirection: 'column',
    },
  },
});

export const headingTitle = style({
  width: '100%',
  textAlign: 'left',
  paddingLeft: '8px',
  margin: '0px 6px',
  borderBottom: `1px solid ${vars.colors.service.SUB_BLACK}`,
  fontWeight: 600,
});

export const pdfSection = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  position: 'relative',

  width: 'calc(428px * 2)',
  '@media': {
    '(max-width: 1220px)': {
      width: '428px',
    },
  },
});

export const pledgePdfWindow = style({
  display: 'flex',
  // aspectRatio: '538 / 737',
  overflow: 'hidden',

  width: 'calc(428px * 2)',
  '@media': {
    '(max-width: 1220px)': {
      width: '428px',
    },
  },
});

export const translateX = createVar();
export const pledgePdfContainer = style({
  display: 'flex',
  width: 'fit-content',
  transform: translateX,
  transition: 'transform 0.3s ease',
});

export const pledgePdfItem = style({
  width: '428px',
  height: '100%',
  aspectRatio: '538 / 737',
  userSelect: 'none',
});

export const toLeftIcon = style({
  borderRadius: '50%',
  boxShadow: '0 2px 12px 0 rgba(0,0,0,0.16)',
  backgroundColor: vars.colors.service.MAIN_WHITE,
  position: 'absolute',
  top: '50%',
  left: '-16px',
  transform: 'rotate(-90deg)',
});

export const toRightIcon = style({
  borderRadius: '50%',
  boxShadow: '0 2px 12px 0 rgba(0,0,0,0.16)',
  backgroundColor: vars.colors.service.MAIN_WHITE,
  position: 'absolute',
  top: '50%',
  right: '-16px',
  transform: 'rotate(90deg)',
});

export const skeletonCarousel = style({
  // aspectRatio: '538 / 737',
  backgroundColor: vars.colors.service.HOVER_BACKGROUND,
  borderRadius: '12px',

  width: 'calc(428px * 2)',
  '@media': {
    '(max-width: 1220px)': {
      width: '428px',
    },
  },
});
