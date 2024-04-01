import { style } from '@vanilla-extract/css';
import { vars } from '@/globalTheme.css';

export const newsSection = style({
  width: '100%',
});

export const newsWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
});

export const newsHeader = style({
  padding: 4,
  borderBottom: `1px solid ${vars.colors.service.STROKE_OR_BLUR}`,
  fontSize: 18,
  fontWeight: 'bold',
});

export const newsContent = style({
  display: 'flex',
  justifyContent: 'center',
  gap: 10,
  width: '100%',

  '@media': {
    '(max-width: 768px)': {
      flexDirection: 'column',
    },
  },
});

export const itemsWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
  width: '50%',
  padding: '0px 16px',
  fontSize: 14,

  '@media': {
    '(max-width: 768px)': {
      width: '100%',
    },
  },
});

export const line = style({
  width: 1,
  backgroundColor: `${vars.colors.service.STROKE_OR_BLUR}`,

  '@media': {
    '(max-width: 768px)': {
      display: 'none',
    },
  },
});

export const partyTitle = style({
  width: '100%',
  fontSize: 18,
  fontWeight: 'bold',
  borderBottom: `1px solid ${vars.colors.service.STROKE_OR_BLUR}`,
  padding: '48px 0px 8px 0px',
});

export const skeletonNews = style({
  width: '100%',
  height: '24px',
  backgroundColor: vars.colors.service.HOVER_BACKGROUND,
});
