import { createVar, style } from '@vanilla-extract/css';
import { vars } from '@/globalTheme.css';

export const cardSection = style({});
export const polyCnt = style({
  color: `${vars.colors.service.SUB_BLACK}`,
});
export const leaderName = style({
  color: `${vars.colors.service.MAIN_BLACK}`,
});
export const cardInfoSection = style({
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  // padding: '16px 0px',
  gap: 10,
});
export const styledLink = style({
  cursor: 'pointer',
});
