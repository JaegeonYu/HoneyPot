import { vars } from '@/globalTheme.css';
import { style } from '@vanilla-extract/css';

export const pageSection = style({
  width: '100%',
  position: 'relative',
});

export const titleWrapper = style({
  display: 'flex',
  justifyContent: 'space-between',
  height: '38px',
  borderBottom: `1px solid ${vars.colors.service.STROKE_OR_BLUR}`,
});

export const title = style({
  fontSize: '18px',
  fontWeight: 600,
  lineHeight: '38px',
  paddingRight: '6px',
});

export const dynamicTitle = style({
  width: 'fit-content',
  padding: '0px 2px',
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

export const emptyDataWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  height: '360px',
});

export const exceptionText = style({
  fontWeight: 600,
  textAlign: 'center',
});

export const gridWrapper = style({
  width: '100%',
  height: 'fit-content',
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  alignItems: 'center',
  justifyItems: 'center',
  gap: 34,
  padding: 16,
  transition: 'padding 0.5s ease',

  '@media': {
    '(max-width: 1372px)': {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
    '(max-width: 1024px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
      padding: '16px 2vw',
    },
    '(max-width: 668px)': {
      gridTemplateColumns: 'repeat(1, 1fr)',
      padding: '16px 4vw',
    },
  },
});
