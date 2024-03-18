import { style } from '@vanilla-extract/css';
import { vars } from '@/globalTheme.css';

export const sectionOne = style({
  width: 1240,
  height: 476,
});

export const partyImg = style({
  height: 84,
  textAlign: 'center',
});

export const statistics = style({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '10px',
});

export const contentBar = style({
  width: 660,
  height: 40,
});

export const sectionTwo = style({
  width: 1240,
  height: 632,
});

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

export const contentWapper = style({
  rowGap: 12,
});

export const sectionTwoHeader = style({
  display: 'flex',
  flexDirection: 'column',
  //   rowGap: 8,
  padding: '8px 0px',
  alignItems: 'flex-start',
  width: '100%',
  borderBottom: `2px solid ${vars.colors.service.HOVER_STROKE}`,
});

export const textWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  rowGap: 2,
});

export const sectionTwoContent = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
});
