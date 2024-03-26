import { vars } from '@/globalTheme.css';
import { createVar, style } from '@vanilla-extract/css';

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
  width: '75%',
  //   border: '1px solid red',
});

export const billCardKeyword = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  rowGap: 24,
  padding: '20px 32px',
  width: '25%',
  //   border: '1px solid red',
});

export const billCardContentsProblemText = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  rowGap: 10,
});

export const fontTitle = style({
  //   height: 58,
  fontSize: 15,
  fontWeight: 700,
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
