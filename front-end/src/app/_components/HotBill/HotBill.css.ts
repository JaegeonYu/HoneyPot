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

export const billCardHeader = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  minHeight: 50,
  paddingLeft: 26,
  paddingRight: 12,
  paddingTop: 2,
  paddingBottom: 2,
  columnGap: 20,
  //   justifyContent: 'space-between',
});

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
  //   border: '1px solid red',
});

export const billCardContentsProblemText = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  rowGap: 10,
});

//////////////////////
export const fontName = style({
  //   height: 58,
  fontSize: 20,
  fontWeight: 900,
});
export const fontHeader = style({
  //   height: 58,
  fontSize: 18,
  fontWeight: 900,
});

export const fontSubHeader = style({
  //   height: 58,
  fontSize: 20,
  fontWeight: 800,
});

export const fontTitle = style({
  //   height: 58,
  fontSize: 20,
  fontWeight: 800,
});

export const fontContent = style({
  //   height: 58,
  fontSize: 15,
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
////////////////////
