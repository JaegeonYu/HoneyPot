import { vars } from '@/globalTheme.css';
import { createVar, style } from '@vanilla-extract/css';

export const circle = style({
  position: 'relative',
  aspectRatio: '1',
});

export const letter = style({
  position: 'absolute',
  top: 0,
  left: '50%',
  color: '#e91e27',
});
