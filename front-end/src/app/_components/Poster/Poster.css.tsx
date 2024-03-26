import { createVar, style } from '@vanilla-extract/css';

export const posterwidth = createVar();
export const posterheight = createVar();
export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'center',
  rowGap: 24,
  padding: '24px 24px',
  width: posterwidth,
  height: posterheight,
  // minHeight: 360,
  borderRadius: 8,
  boxShadow: `0 1.5px 2px 0 rgba(0,0,0,0.16)`,
  border: '1px solid #DDDDDD',
  aspectRatio: '1 / 1.1',
});
