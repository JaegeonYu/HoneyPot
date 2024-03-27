import { vars } from '@/globalTheme.css';
import { style } from '@vanilla-extract/css';

export const chartSectionWrapper = style({
  width: '100%',
});

export const partyLogo = style({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  paddingBottom: '24px',
  borderBottom: `1px solid ${vars.colors.service.STROKE_OR_BLUR}`,
});

export const tabSectionWrapper = style({
  width: '100%',
});
