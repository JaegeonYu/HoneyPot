import { vars } from '@/globalTheme.css';
import { createVar, globalStyle, style } from '@vanilla-extract/css';

export const window = style({
  width: '100%',
  overflowY: 'hidden',
  overflowX: 'scroll',
  position: 'relative',
});
globalStyle(`${window}::-webkit-scrollbar`, {
  visibility: 'hidden',
});

export const totalCountText = style({
  height: '28px',
  fontSize: '16px',
  textAlign: 'right',
  paddingRight: '24px',
  borderBottom: `2px solid ${vars.colors.service.STROKE_OR_BLUR}`,
});

export const totalNumber = style({
  fontWeight: 700,
});

export const arrowButtonPositionRigiht = createVar();
export const categoriesWrapper = style({
  display: 'flex',
  gap: '48px',
  width: 'fit-content',
  transform: `translateX( ${arrowButtonPositionRigiht})`,
  transition: 'transform 0.2s ease',
});

export const billListWithChartWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  justifyContent: 'space-between',
  padding: '16px',

  paddingTop: '36px',
});

export const chartWrapper = style({
  width: '100%',
  height: '100%',
});
