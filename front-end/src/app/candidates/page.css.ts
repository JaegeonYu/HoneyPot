import { vars } from '@/globalTheme.css';
import { style } from '@vanilla-extract/css';

export const pageSection = style({
  width: '100%',
  position: 'relative',
});

export const titleWrapper = style({
  display: 'flex',
  justifyContent: 'space-between',
  height: '38px',
  borderBottom: `1px solid ${vars.colors.service.STROKE_OR_BLUR}`,
});

export const title = style({
  fontSize: '18px',
  fontWeight: 600,
  lineHeight: '38px',
  paddingRight: '6px',
});

export const dynamicTitle = style({
  width: 'fit-content',
  padding: '0px 2px',
  fontSize: '12px',
  color: vars.colors.service.SUB_BLACK,
});

export const totalContWrapper = style({
  fontSize: '14px',
  lineHeight: '38px',
});

export const number = style({
  fontWeight: 600,
  lineHeight: '38px',
});

export const emptyDataWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  height: '360px',
});

export const exceptionText = style({
  fontWeight: 600,
  textAlign: 'center',
});

export const cardArticle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  height: '20%',
  padding: '4px 16px',
});

export const hgName = style({
  fontSize: '18px',
  fontWeight: 600,
});
