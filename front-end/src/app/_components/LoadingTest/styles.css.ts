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
