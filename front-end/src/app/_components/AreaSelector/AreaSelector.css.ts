import { vars } from '@/globalTheme.css';
import { style } from '@vanilla-extract/css';

export const wrapper = style({
  display: 'flex',
  justifyContent: 'space-between',
  maxWidth: '660px',
  width: '100%',
  height: '60px',
  borderRadius: '32px',
  fontSize: '14px',
  border: `1px solid ${vars.colors.service.STROKE_OR_BLUR}`,
  boxShadow: '0 3px 12px 0 rgba(0,0,0,0.1), 0 1px 2px 0 rgba(0,0,0,0.08)',
  zIndex: 1,

  selectors: {
    [`&:focus-within`]: {
      backgroundColor: vars.colors.service.HOVER_STROKE,
    },
  },
});

export const areaContainer = style({
  width: '33%',
  height: '100%',
  cursor: 'pointer',
  borderRadius: '32px',
  position: 'relative',

  selectors: {
    [`&:hover`]: {
      fontWeight: 500,
      backgroundColor: vars.colors.service.HOVER_STROKE,
    },
    [`&:focus-within`]: {
      fontWeight: 500,
      backgroundColor: vars.colors.service.MAIN_WHITE,
      boxShadow: '0 2px 12px 0 rgba(0,0,0,0.16)',
    },
  },
});

export const styledHr = style({
  width: '1px',
  height: 'calc(100% - 16px)',
  border: `0.5px solid ${vars.colors.service.STROKE_OR_BLUR}`,
  visibility: 'visible',

  selectors: {
    [`${wrapper}:focus-within > &`]: {
      visibility: 'hidden',
    },
  },
});

export const ulContainer = style({
  width: '100%',
  height: '176px',
  borderRadius: '32px',
  position: 'absolute',
  top: 'calc(60px + 12px)',
  left: '0px',
  visibility: 'hidden',
  boxShadow: '0 2px 12px 0 rgba(0,0,0,0.16)',
  backgroundColor: vars.colors.service.MAIN_WHITE,

  overflow: 'auto',

  selectors: {
    [`${areaContainer}:focus > &`]: {
      visibility: 'visible',
    },
  },
});

export const optionsItem = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '40px',
  borderBottom: `1px solid ${vars.colors.service.STROKE_OR_BLUR}`,

  selectors: {
    [`&:hover`]: {
      backgroundColor: vars.colors.service.HOVER_BACKGROUND,
    },
  },
});
