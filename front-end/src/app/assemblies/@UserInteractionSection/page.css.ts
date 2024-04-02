import { vars } from '@/globalTheme.css';
import { globalStyle, style } from '@vanilla-extract/css';

export const userInteractionSection = style({
  width: '100%',
  height: 'fit-content',
  padding: '14px 0px',
});

export const inputWrapper = style({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  padding: '16px 0px',
});

export const areaSelectorWrapper = style({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
});

export const relativeWrapper = style({
  width: '100%',
  position: 'relative',
  overflow: 'hidden',
  padding: '0px 16px',
});

export const scrollAblePartyList = style({
  width: '100%',
  height: '40px',
  overflowX: 'scroll',
  padding: '0px 16px',
  scrollBehavior: 'smooth',
});
globalStyle(`${scrollAblePartyList}::-webkit-scrollbar`, {
  display: 'none',
});

export const partySelectorWrapper = style({
  display: 'flex',
  gap: '16px',
  width: 'fit-content',
  height: '40px',
});

export const skeletonPartyWrapper = style({
  width: '100%',
  height: '40px',
  borderRadius: '32px',
  backgroundColor: vars.colors.service.SUB_WHITE,
});

export const toLeftIcon = style({
  borderRadius: '50%',
  boxShadow: '0 2px 12px 0 rgba(0,0,0,0.16)',
  backgroundColor: vars.colors.service.MAIN_WHITE,
  position: 'absolute',
  top: '25%',
  left: '16px',
  transform: 'rotate(-90deg)',
});

export const toRightIcon = style({
  borderRadius: '50%',
  boxShadow: '0 2px 12px 0 rgba(0,0,0,0.16)',
  backgroundColor: vars.colors.service.MAIN_WHITE,
  position: 'absolute',
  top: '25%',
  right: '16px',
  transform: 'rotate(90deg)',
});
