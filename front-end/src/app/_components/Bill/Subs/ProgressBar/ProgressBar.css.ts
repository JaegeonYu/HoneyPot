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
  rowGap: 8,
  position: 'relative',

  //   height: '100%',
});

export const replaceWord = style({
  position: 'absolute',
  height: 22,
  // top: '-6px',
  left: '50%',
  transform: 'translateX(-50%)',
  fontSize: 12,
  fontWeight: 600,
  //   height: '100%',
});
export const finalDate = style({
  position: 'absolute',
  height: 22,
  top: 60,
  left: '50%',

  transform: 'translateX(-50%)',
  fontSize: 12,
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
