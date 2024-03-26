import { style } from '@vanilla-extract/css';
import { vars } from '@/globalTheme.css';

export const styledLink = style({
  width: '100%',
  cursor: 'pointer',
});

export const cardInfoSection = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: 10,
  height: '30%',
  textAlign: 'center',
});

export const partyCntWrapper = style({
  color: `${vars.colors.service.SUB_BLACK}`,
});

export const partySeat = style({
  fontSize: '18px',
  fontWeight: 600,
});

export const totalSeat = style({
  fontSize: '16px',
  color: vars.colors.service.SUB_BLACK,
});

export const leaderName = style({
  color: `${vars.colors.service.MAIN_BLACK}`,
});
