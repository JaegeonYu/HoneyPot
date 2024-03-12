import { style } from '@vanilla-extract/css';
import { vars } from '@/globalTheme.css';

export const wrapper = style({
  minWidth: 276,
  width: '100%',
  aspectRatio: '16 / 11',
  // height: 100,
  border: '1px solid black',
});
