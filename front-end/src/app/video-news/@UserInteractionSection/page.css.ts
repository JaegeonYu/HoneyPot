import { globalStyle, style } from '@vanilla-extract/css';

export const wrapper = style({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  gap: '2%',
});

export const keywordWindow = style({
  width: 'calc(54% - 2%)',
  height: '40px',
  overflowY: 'hidden',
  overflowX: 'scroll',
  paddingBottom: '12px',
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
  height: '40px',
});
