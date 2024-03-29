import { vars } from '@/globalTheme.css';
import { style } from '@vanilla-extract/css';

export const styledLink = style({
  width: '100%',
  cursor: 'pointer',
});

export const cardSection = style({
  width: '100%',
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
});

export const totalContWrapper = style({
  fontSize: '14px',
  lineHeight: '38px',
});

export const number = style({
  fontWeight: 600,
  lineHeight: '38px',
});

export const cardArticle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  height: '16%',
  padding: '4px 16px',
});

export const mainText = style({
  fontSize: '18px',
  fontWeight: 600,
  margin: 0,
});

export const subText = style({
  fontSize: '12px',
  marginLeft: '8px',
  color: vars.colors.service.SUB_BLACK,
});

export const areaName = style({
  height: '26px',
  fontSize: '14px',
  lineHeight: '33px',
});

export const skeletonCard = style({
  minWidth: 212,
  width: '100%',
  maxWidth: 402,
  aspectRatio: '4 / 6',
  borderRadius: 16,
});
