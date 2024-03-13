import { vars } from '@/globalTheme.css';
import { createVar, style } from '@vanilla-extract/css';

export const billCardWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   maxHeight: '100vh',
  width: '80%',
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
export const fontContent = style({
  //   height: 58,
  fontSize: 12,
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
  paddingTop: 10,
  paddingBottom: 10,
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

  //   border: '1px solid red',
});

export const billTitleCommittee = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  rowGap: 4,
  padding: '10px 16px',

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
  border: '1px solid #E61E2B',
  borderRadius: 3,
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

export const billCardContentsProblem = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  rowGap: 24,
  padding: '20px 32px',
  border: '1px solid red',
});

export const billCardContentsProblemText = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  rowGap: 10,

  //   border: '1px solid red',
});
