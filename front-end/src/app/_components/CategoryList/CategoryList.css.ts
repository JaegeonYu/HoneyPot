import { vars } from '@/globalTheme.css';
import { globalStyle, style } from '@vanilla-extract/css';

export const relativeWrapper = style({
  position: 'relative',
  width: '100%',
  padding: '0px 32px',
});

export const scrollAbleWrapper = style({
  width: '100%',
  overflowY: 'hidden',
  overflowX: 'scroll',
  scrollBehavior: 'smooth',
});
globalStyle(`${scrollAbleWrapper}::-webkit-scrollbar`, {
  visibility: 'hidden',
});

export const categoryListWrapper = style({
  display: 'flex',
  gap: '48px',
  width: 'fit-content',
});

export const categoryItem = style({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  width: 'fit-content',
  cursor: 'pointer',
});

export const toLeftIcon = style({
  position: 'absolute',
  top: '25%',
  left: '8px',
  transform: 'rotate(-90deg)',
  backgroundColor: vars.colors.service.MAIN_WHITE,
  boxShadow: '0 2px 12px 0 rgba(0,0,0,0.16)',
  borderRadius: '50%',
});

export const toRightIcon = style({
  position: 'absolute',
  top: '25%',
  right: '8px',
  transform: 'rotate(90deg)',
  backgroundColor: vars.colors.service.MAIN_WHITE,
  boxShadow: '0 2px 12px 0 rgba(0,0,0,0.16)',
  borderRadius: '50%',
});
