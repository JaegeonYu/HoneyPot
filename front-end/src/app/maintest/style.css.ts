import { vars } from '@/globalTheme.css';
import { createVar, style } from '@vanilla-extract/css';

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
});
