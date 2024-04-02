import { vars } from '@/globalTheme.css';
import { globalStyle, style } from '@vanilla-extract/css';

export const wrapper = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-end',
  width: '100%',
  gap: '2%',
});

export const relativeWrapper = style({
  position: 'relative',
  width: 'calc(54% - 2%)',
  padding: '0px 16px',
});

export const keywordWindow = style({
  width: '100%',
  height: '40px',
  overflowY: 'hidden',
  overflowX: 'scroll',
  scrollBehavior: 'smooth',
});
globalStyle(`${keywordWindow}::-webkit-scrollbar`, {
  display: 'none',
});

export const keywordList = style({
  display: 'flex',
  gap: '12px',
  width: 'fit-content',
});

export const inputWrapper = style({
  width: 'calc(44% - 2%)',
  height: '66px',
});

export const givenInfomation = style({
  width: '100%',
  textAlign: 'right',
  fontSize: '12px',
  color: vars.colors.service.SUB_BLACK,
  padding: '0px 8px',
  lineHeight: '26px',
});

export const givenInfomationLink = style({
  fontSize: '12px',
  color: vars.colors.service.SUB_BLACK,
  textDecoration: 'underline',
  paddingLeft: '4px',
});

export const skeletonWrapper = style({
  width: 'calc(54% - 2%)',
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
  left: '0px',
  transform: 'rotate(-90deg)',
});

export const toRightIcon = style({
  borderRadius: '50%',
  boxShadow: '0 2px 12px 0 rgba(0,0,0,0.16)',
  backgroundColor: vars.colors.service.MAIN_WHITE,
  position: 'absolute',
  top: '25%',
  right: '0px',
  transform: 'rotate(90deg)',
});
