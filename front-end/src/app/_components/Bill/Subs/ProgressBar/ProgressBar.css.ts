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
  position: 'relative',
});

export const element = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  //   height: '100%',
});

export const bar = style({
  width: 60,
  height: 6,
  backgroundColor: partycolor,
  position: 'absolute',
  top: 32,
  left: 40,
  zIndex: 0,
});
export const bar2 = style({
  width: 60,
  height: 6,
  backgroundColor: partycolor,
  position: 'absolute',
  top: 32,
  left: 110,
  zIndex: 0,
});

export const bar3 = style({
  width: 60,
  height: 6,
  backgroundColor: partycolor,
  position: 'absolute',
  top: 32,
  left: 190,
  zIndex: 0,
});
