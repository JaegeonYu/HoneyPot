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
  width: 312,
  display: 'flex',
  flexDirection: 'column',
  rowGap: 8,
});

export const listContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
  gap: 16,
  width: '1240px',
  height: '76px',
  overflow: 'scroll',
});

export const categoryCard = style({
  width: 'fit-content',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '10px 16px',
  selectors: {
    '&:hover': {
      borderBottom: '1px solid #222222',
    },
  },
});

export const name = style({
  width: 'fit-content',
  whiteSpace: 'nowrap',
  color: vars.colors.service.SUB_BLACK,
  fontSize: '10px',
  selectors: {
    [`${categoryCard}:hover &`]: {
      color: vars.colors.service.MAIN_BLACK,
    },
  },
});

export const sectionTwoContent = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
});
