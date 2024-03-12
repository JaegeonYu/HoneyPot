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
  paddingLeft: 112,
});

export const logo = style({
  width: 32,
  height: 32,
  backgroundColor: 'purple',
});

export const nav = style({
  display: 'flex',
  gap: 32,
});

export const title = style({
  height: '100%',
  fontSize: '16px',
  fontWeight: 'bold',
});

export const navItem = style({
  position: 'relative',
  textDecoration: 'none',
  color: '#777777',
  display: 'block',
  selectors: {
    '&:hover': {
      color: '#222222',
    },
  },
});

export const subMenu = style({
  display: 'none',
  position: 'absolute',
  left: '50%',
  top: '100%',
  padding: '0',
  transform: 'translateX(-50%)',

  overflow: 'hidden',
  background: 'white',
  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
  borderRadius: '12px',
  zIndex: 1000,

  selectors: {
    [`${navItem}:hover &`]: {
      display: 'block',
    },
  },
});

export const subMenuItem = style({
  width: '120px',
  padding: '10px 20px',
  color: '#222222',
  display: 'block',
  borderBottom: '1px solid #DDDDDD',
  selectors: {
    '&:last-child': {
      borderBottom: 'none',
    },
    '&:hover': {
      backgroundColor: '#DDDDDD',
    },
  },
});
