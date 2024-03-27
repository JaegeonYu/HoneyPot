import { vars } from '@/globalTheme.css';
import { style } from '@vanilla-extract/css';

export const chartsWrapper = style({
  borderBottom: `1px solid ${vars.colors.service.STROKE_OR_BLUR}`,
});
export const title = style({
  borderBottom: `1px solid ${vars.colors.service.STROKE_OR_BLUR}`,
  textAlign: 'center',
  padding: 10,
});
export const content = style({
  display: 'flex',
  padding: 16,
});

export const leftContainer = style({});
export const chartContent = style({
  color: `${vars.colors.service.MAIN_BLACK}`,
  textAlign: 'center',
});

export const midContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
  textAlign: 'center',
});
export const attendanceRate = style({
  display: 'flex',
  flexDirection: 'column',
  // gap: 3,
});
export const attendanceRateTitle = style({
  fontSize: 18,
  fontWeight: 'bold',
});
export const attendanceRateContent = style({});

export const rightContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
  textAlign: 'center',
});
export const mostCategory = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
});
export const mostCategoryTitle = style({
  fontSize: 18,
  fontWeight: 'bold',
});
export const mostCategoryContent = style({
  display: 'flex',
  gap: 12,
});

export const mostAssembly = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
});
export const mostAssemblyTitle = style({
  fontSize: 18,
  fontWeight: 'bold',
});
export const mostAssemblyContent = style({});
