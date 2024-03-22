import { vars } from '@/globalTheme.css';
import { style } from '@vanilla-extract/css';

export const styledLink = style({
  width: '100%',
  cursor: 'pointer',
});

export const cardArticle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
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
