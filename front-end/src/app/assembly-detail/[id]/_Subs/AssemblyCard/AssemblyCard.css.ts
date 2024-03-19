import { vars } from '@/globalTheme.css';
import { style } from '@vanilla-extract/css';

export const textContentInCard = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
  width: '100%',
  height: '30%',
  padding: '16px',
});

export const badgesWrapper = style({
  display: 'flex',
  gap: '10px',
  width: '100%',
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
  lineHeight: '32px',
});

export const birthDate = style({
  fontSize: '14px',
  color: vars.colors.service.SUB_BLACK,
});
