// styles.css.ts
import { style } from '@vanilla-extract/css';

export const container = style({
  position: 'relative',
});

export const loader = style({
  position: 'absolute',
  height: '100%',
  backgroundColor: 'yellow',
});

export const text = style({
  margin: '21px',
  color: 'white',
  whiteSpace: 'nowrap',
  mixBlendMode: 'difference',
});

export const wrapper = style({
  display: 'flex',
  height: '100%',
  width: '400px',
  margin: 0,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'white',
});
