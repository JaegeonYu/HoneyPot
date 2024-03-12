import { vars } from '@/globalTheme.css';
import { style } from '@vanilla-extract/css';

export const headerContainer = style({
  background: '#fff',
  fontSize: '14px',
  textAlign: 'center',
  height: '80px',
  width: '100vw',
  display: 'flex',
  alignItems: 'center',
  gap: 40,
  paddingLeft: '5vw',
  position: 'sticky',
});

export const logo = style({
  width: 32,
  height: 32,
  backgroundColor: 'purple',
  cursor: 'pointer',
});

export const navWrapper = style({
  height: '100%',
  display: 'flex',
  gap: 32,
});

export const title = style({
  height: '100%',
  fontSize: '18px',
  fontWeight: 'bold',
  cursor: 'pointer',
});

export const navTitle = style({
  width: 64,
  height: '100%',
  lineHeight: '80px',
  position: 'relative',
  color: vars.colors.service.MAIN_BLACK,
  cursor: 'pointer',
  fontWeight: 600,
});

export const dropBox = style({
  visibility: 'hidden',
  position: 'absolute',
  top: 72,
  left: -32,
  height: 'fit-content',
  overflow: 'hidden',
  background: vars.colors.service.MAIN_WHITE,
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.16)',
  borderRadius: '12px',
  zIndex: 1000,

  selectors: {
    [`${navTitle}:hover &`]: {
      visibility: 'visible',
    },
  },
});

export const dropBoxItem = style({
  width: '120px',
  height: '44px',
  lineHeight: 'calc(44px - 20px)',
  padding: '10px 20px',
  color: vars.colors.service.MAIN_BLACK,
  display: 'block',
  borderBottom: `1px solid ${vars.colors.service.HOVER_BACKGROUND}`,
  cursor: 'pointer',

  selectors: {
    '&:last-child': {
      borderBottom: 'none',
    },
    '&:hover': {
      backgroundColor: `${vars.colors.service.HOVER_BACKGROUND}`,
    },
  },
});
