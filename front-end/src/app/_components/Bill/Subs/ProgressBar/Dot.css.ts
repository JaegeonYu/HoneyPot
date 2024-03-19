import { createVar, style } from '@vanilla-extract/css';
import { vars } from '@/globalTheme.css';

export const partycolor = createVar();

export const dot = style({
  width: 18,
  height: 18,
  backgroundColor: partycolor,
  borderRadius: 90,
  zIndex: 1,
});
