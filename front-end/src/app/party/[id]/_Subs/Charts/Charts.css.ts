import { vars } from '@/globalTheme.css';
import { createVar, style } from '@vanilla-extract/css';

export const chartsWrapper = style({
  width: '100%',
  borderBottom: `1px solid ${vars.colors.service.STROKE_OR_BLUR}`,
});

export const title = style({
  borderBottom: `1px solid ${vars.colors.service.STROKE_OR_BLUR}`,
  textAlign: 'center',
  padding: 10,
});

export const content = style({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  padding: '24px',
});

export const chartContent = style({
  color: `${vars.colors.service.MAIN_BLACK}`,
  fontWeight: 700,
  textAlign: 'center',
});

export const attendanceRate = style({
  display: 'flex',
  flexDirection: 'column',
});

export const attendanceRateTitle = style({
  fontSize: 'clamp(14px, 1.5vw ,18px)',
  fontWeight: 700,
  padding: '4px 0px',
});

export const memberName = style({
  fontWeight: 500,
});
export const subText = style({
  fontSize: 'clamp(12px, 1vw ,14px)',
});

export const containerWidth = createVar();
export const container = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: 24,
  width: containerWidth,
  height: '100%',
  textAlign: 'center',
});

export const mostCategoryContent = style({
  display: 'flex',
  justifyContent: 'space-between',
  gap: 12,
  width: '100%',
});

export const mostAssembly = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
});
