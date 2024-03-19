import { createVar, style } from '@vanilla-extract/css';
import { vars } from '@/globalTheme.css';

export const partycolor = createVar();

export const wrapper = style({
  display: 'flex',
  flexDirection: 'row',
  alignContent: 'space-evenly',
  columnGap: 5,
  width: 290,
  height: '100%',
});

export const element = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  rowGap: 8,
  //   height: '100%',
});

export const fontContent = style({
  //   height: 58,
  fontSize: 12,
  fontWeight: 500,
});

export const fontDate = style({
  //   height: 58,
  fontSize: 12,
  fontWeight: 500,
});
