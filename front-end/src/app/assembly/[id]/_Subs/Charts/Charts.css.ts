import { vars } from '@/globalTheme.css';
import { style } from '@vanilla-extract/css';

export const titleText = style({
  lineHeight: '18px',
  fontSize: '18px',
  fontWeight: 700,
  padding: '4px 0px',
  borderBottom: `1px solid ${vars.colors.service.STROKE_OR_BLUR}`,
  marginBottom: '12px',
});

export const chartsWrapper = style({
  width: '100%',
  height: 'fit-content',
});

export const chartsContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
});

export const chartContainer = style({
  width: '100%',
  height: '100%',
  padding: '0px 24px',
  position: 'relative',
});

export const totalCount = style({
  position: 'absolute',
  top: 0,
  right: 0,
  color: vars.colors.service.SUB_BLACK,
  fontSize: '12px',
  height: '20px',
  lineHeight: '20px',
});
