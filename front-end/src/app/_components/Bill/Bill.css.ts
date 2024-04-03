import { vars } from '@/globalTheme.css';
import { createVar, style } from '@vanilla-extract/css';

export const billCardWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   maxHeight: '100vh',
  width: '100%',
  padding: 15,
  selectors: {
    '&:hover': {
      backgroundColor: vars.colors.service.HOVER_BACKGROUND,
    },
  },
  cursor: 'pointer',
  outline: `2px solid ${vars.colors.service.HOVER_STROKE}`,
  borderRadius: 3,
  overflow: 'hidden',
  //   transition: 'all 0.4s ease-out',
});

export const fontName = style({
  //   height: 58,
  fontSize: 20,
  fontWeight: 900,
});
export const fontHeader = style({
  //   height: 58,
  fontSize: 17,
  fontWeight: 700,
});

export const fontTitle = style({
  //   height: 58,
  fontSize: 17,
  fontWeight: 700,
});

export const fontContent = style({
  //   height: 58,
  fontSize: 14,
  fontWeight: 500,
});

export const Assembly = style({
  //   height: 58,
  fontSize: 14,
  fontWeight: 500,
  selectors: {
    '&:hover': {
      fontWeight: 800,
      // backgroundColor: vars.colors.service.HOVER_BACKGROUND,
      textDecorationLine: 'underline',
    },
  },
});

export const AssemblyNoHover = style({
  //   height: 58,
  fontSize: 14,
  fontWeight: 500,
});

export const fontKeywordBold = style({
  //   height: 58,
  fontSize: 12,
  fontWeight: 900,
});
export const fontKeyword = style({
  //   height: 58,
  fontSize: 12,
  fontWeight: 500,
});

export const billCardHeader = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  minHeight: 50,
  paddingLeft: 26,
  paddingRight: 12,
  paddingTop: 2,
  paddingBottom: 2,
  justifyContent: 'space-between',
});

export const billTitle = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  paddingTop: 6,
  paddingBottom: 6,
  rowGap: 8,

  //   border: '1px solid red',
});
export const billTitlePerson = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  columnGap: 12,
  justifyContent: 'center',

  //   border: '1px solid red',
});

export const billTitleCommittee = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  rowGap: 4,
  padding: '10px 16px',
  width: 134,

  //   border: '1px solid red',
});

export const heightVar = createVar();
export const bgccolor = createVar();
export const panelHeight = createVar();

export const billCardContents = style({
  //   backgroundColor: 'gray',
  overflow: 'hidden',
  //   width: 50,
  maxHeight: panelHeight,
  transition: 'all 0.3s ease-out',
});

export const billCardContentsHeader = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  columnGap: 12,
  padding: '10px 39px',
  justifyContent: 'space-between',
});
export const billCardContentsHeaderSummary = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  columnGap: 30,
});

export const billCardContentsHeaderSummarytBtn = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  columnGap: 10,
  padding: '8px 14px',
  // border: '1px solid #E61E2B', // 정당 코드색?
  border: `1px solid ${vars.colors.service.MAIN_BLACK}`,
  borderRadius: 3,
  // backgroundColor: `${vars.colors.party.PEOPLE_POWER_PARTY[20]}`,
});

export const billCardContentsHeaderLink = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  columnGap: 10,
});
////////////// MAIN CONTENTS START
export const billCardContentsMain = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  columnGap: 4,
  padding: '10px 16px',
});
export const textRandom = style({
  display: 'flex',
  height: '100%',
  // backgroundColor: `${vars.colors.service.MAIN_COLOR_100}`,
  justifyContent: 'center',
  alignItems: 'center',
});
