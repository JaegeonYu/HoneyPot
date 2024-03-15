import { createVar, style } from '@vanilla-extract/css';
import { vars } from '@/globalTheme.css';

export const partycolor = createVar();

export const dot = style({
  width: 24,
  height: 24,
  backgroundColor: partycolor,
  borderRadius: 90,
  zIndex: 1,
});
