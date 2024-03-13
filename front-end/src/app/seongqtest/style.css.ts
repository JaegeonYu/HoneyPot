import { style } from '@vanilla-extract/css';

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

export const textWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  rowGap: 8,
});

export const postWrapper = style({
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  justifyContent: 'space-between',
  padding: '16px 16px',
});
