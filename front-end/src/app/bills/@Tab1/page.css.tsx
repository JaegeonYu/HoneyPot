import { style } from '@vanilla-extract/css';
import { vars } from '@/globalTheme.css';

export const fontTitle = style({
  fontSize: 15,
  fontWeight: 900,
  textAlign: 'center',
});
export const fontContent = style({
  //   height: 58,
  fontSize: 12,
  fontWeight: 500,
  textAlign: 'center',
});

export const fontHead = style({
  //   height: 58,
  fontSize: 22,
  fontWeight: 900,
  // textAlign: 'center',
});
export const fontSub = style({
  //   height: 58,
  fontSize: 12,
  fontWeight: 500,
  // textAlign: 'center',
});

export const headWrapper = style({
  display: 'flex',
  flexDirection: 'row',
  //   rowGap: 8,
  padding: '8px 0px',
  justifyContent: 'space-between',
  alignItems: 'flex-end',

  width: '100%',
  borderBottom: `2px solid ${vars.colors.service.HOVER_STROKE}`,
});

export const textWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  rowGap: 8,
});

export const postWrapper = style({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  //   alignItems:'center',
  justifyContent: 'center',
  width: '100%',
  //   justifyContent: 'space-between',
  columnGap: 16,
  rowGap: 16,
  padding: '16px 16px',
});

export const mostAssembly = style({
  //   height: 58,
  display: 'flex',
  flexDirection: 'row',

  columnGap: 8,
  // textAlign: 'center',
  alignItems: 'center',
  justifyContent: 'center',
});

export const fontMostAssembly = style({
  //   height: 58,

  fontSize: 15,
  fontWeight: 500,
  columnGap: 20,
  // textAlign: 'center',
});

export const titleWrapper = style({
  display: 'flex',
  justifyContent: 'space-between',
  height: '38px',
  borderBottom: `1px solid ${vars.colors.service.STROKE_OR_BLUR}`,
});

export const title = style({
  fontSize: '18px',
  fontWeight: 600,
  lineHeight: '38px',
});

export const totalContWrapper = style({
  fontSize: '14px',
  lineHeight: '38px',
});

export const number = style({
  fontWeight: 600,
  lineHeight: '38px',
});
