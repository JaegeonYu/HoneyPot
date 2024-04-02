import { vars } from '@/globalTheme.css';
import { style } from '@vanilla-extract/css';

export const chartSectionWrapper = style({
  width: '100%',
  position: 'relative',
});

export const partyLogo = style({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  paddingBottom: '24px',
  borderBottom: `1px solid ${vars.colors.service.STROKE_OR_BLUR}`,
});

export const givenInfomation = style({
  position: 'absolute',
  top: '100px',
  right: '0px',
  fontSize: '12px',
  color: vars.colors.service.SUB_BLACK,
  padding: '0px 8px',
  lineHeight: '26px',
});

export const givenInfomationLink = style({
  fontSize: '12px',
  color: vars.colors.service.SUB_BLACK,
  textDecoration: 'underline',
});

export const tabSectionWrapper = style({
  width: '100%',
});
