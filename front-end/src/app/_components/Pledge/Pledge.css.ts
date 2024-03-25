import { vars } from '@/globalTheme.css';
import { createVar, style } from '@vanilla-extract/css';

export const gap = createVar();
export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: 'fit-content',
  padding: '16px',
  overflow: 'hidden',
  border: `1px solid ${vars.colors.service.STROKE_OR_BLUR}`,
  borderRadius: '12px',
  cursor: 'pointer',
});

export const headerContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  height: '46px',
  gap: '12px',
});

export const iconWithTextWrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  width: '80%',
});

export const textWrapper = style({
  width: '100%',
});

export const rotate = createVar();
export const icon = style({
  width: '20px',
  height: '20px',
  transform: rotate,
  transition: 'transform 0.3s ease',
});

export const headerTitle = style({
  width: '100%',
  paddingRight: '6px',
  fontSize: '18px',
  fontWeight: 600,
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
});

export const headerSummary = style({
  width: '100%',
  paddingRight: '6px',
  fontSize: '14px',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
});

export const bgColor = createVar();
export const fontColor = createVar();
export const currentState = style({
  width: '72px',
  textAlign: 'center',
  backgroundColor: bgColor,
  color: fontColor,
  fontSize: '16px',
  fontWeight: 600,
  padding: '10px 8px',
  borderRadius: '12px',
});

export const height = createVar();
export const padding = createVar();
export const detailsWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '40px',
  maxHeight: height,
  padding: padding,
  overflow: 'hidden',
  transition: 'all 0.3s ease',
});

export const detailsContainer = style({
  width: '100%',
  height: 'fit-content',
});

export const detailsTitle = style({
  fontSize: '16px',
  fontWeight: 600,
});

export const detailsDescriptions = style({
  width: '100%',
  margin: 0,
  fontSize: '14px',
  fontWeight: 500,
  textWrap: 'wrap',
  paddingLeft: '6px',
});
