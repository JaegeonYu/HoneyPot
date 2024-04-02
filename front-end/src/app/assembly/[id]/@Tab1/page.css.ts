import { vars } from '@/globalTheme.css';
import { style } from '@vanilla-extract/css';

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',

  gap: '24px',
});

export const titleWrapper = style({
  display: 'flex',
  justifyContent: 'space-between',
  height: '38px',
  padding: '0px',
  borderBottom: `1px solid ${vars.colors.service.STROKE_OR_BLUR}`,
});

export const title = style({
  fontSize: '18px',
  fontWeight: 600,
  lineHeight: '38px',
});

export const infomationGivenDate = style({
  textAlign: 'center',
  paddingLeft: '8px',
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

export const pledgeWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  padding: '16px',
});

export const emptyDataWrapper = style({
  width: '100%',
  height: '360px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});
