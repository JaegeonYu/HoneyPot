import { vars } from '@/globalTheme.css';
import { createVar, globalStyle, style } from '@vanilla-extract/css';

export const wrapper = style({
  display: 'flex',
  justifyContent: 'space-between',
  gap: '12px',
  width: '100%',
  padding: '24px 24px 48px 24px',

  '@media': {
    '(max-width: 972px)': {
      overflowY: 'hidden',
      overflowX: 'scroll',
    },
  },
});
globalStyle(`${wrapper}::-webkit-scrollbar`, {
  display: 'none',
});

export const posterWrapper = style({
  width: '30%',
  minWidth: 268,
});

export const chartTitle = style({
  fontSize: 'clamp(14px, 1.4vw ,18px)',
  fontWeight: 700,
});

export const legend = style({
  color: `${vars.colors.service.MAIN_BLACK}`,
  fontSize: 'clamp(14px, 1.4vw ,18px)',
  fontWeight: 700,
  textAlign: 'center',
});

export const attendanceRate = style({
  display: 'flex',
  flexDirection: 'column',
});

export const attendanceRateTitle = style({
  fontSize: 'clamp(14px, 1.4vw ,18px)',
  fontWeight: 700,
  padding: '4px 0px',
});

export const memberName = style({
  fontSize: 'clamp(12px, 1.2vw ,16px)',
  fontWeight: 500,
});

export const subText = style({
  fontSize: 'clamp(10px, 1vw ,14px)',
});

export const containerWidth = createVar();
export const container = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  gap: 8,
  width: containerWidth,
  height: '100%',
  textAlign: 'center',
});

export const mostCategoryContent = style({
  display: 'flex',
  justifyContent: 'space-evenly',
  gap: 12,
  width: '100%',
});

export const mostWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
});

export const skeletonLoading = style({
  width: '30%',
  minWidth: 268,
  aspectRatio: '1 / 1.1',
  borderRadius: '8px',
  backgroundColor: vars.colors.service.SUB_WHITE,
});
