import { vars } from '@/globalTheme.css';
import { style } from '@vanilla-extract/css';

export const styledLink = style({
  width: '100%',
  cursor: 'pointer',
});

export const cardSection = style({
  width: '100%',
});

export const totalCountText = style({
  height: '28px',
  fontSize: '16px',
  textAlign: 'right',
  paddingRight: '24px',
  borderBottom: `2px solid ${vars.colors.service.STROKE_OR_BLUR}`,
});

export const totalNumber = style({
  fontWeight: 700,
});

export const cardArticle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  height: '18%',
  padding: '0px 16px',
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
  minWidth: 276,
  width: '100%',
  maxWidth: 402,
  aspectRatio: '4 / 6',
  borderRadius: 16,
});
