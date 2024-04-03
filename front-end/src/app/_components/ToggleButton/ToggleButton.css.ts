import { createVar, style } from '@vanilla-extract/css';
import { vars } from '@/globalTheme.css';

export const btncolor = createVar();
export const btnWrapper = style({
  height: 18,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  columnGap: 24,
  borderRadius: 90,

  // zIndex: 2,
  position: 'relative',
});

export const createSummary = style({
  fontWeight: 600,
});

export const back = style({
  display: 'flex',
  // left: '47%',
  alignItems: 'center',
  padding: '0px 2px',
  width: 40,
  height: 18,

  backgroundColor: btncolor,
  borderRadius: 90,
  // zIndex: 2,
  // position: 'relative',
});

export const dot = style({
  display: 'flex',
  position: 'absolute',
  height: 14,
  width: 14,
  backgroundColor: 'white',
  borderRadius: 90,
  // zIndex: 2,
  transition: '1s',
});
export const dotClicked = style({
  right: '3px',
  transition: '1s',
});
