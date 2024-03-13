import { createVar, style } from '@vanilla-extract/css';

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'center',
  rowGap: 24,
  padding: '24px 24px',
  width: 360,
  height: '100%',
  minHeight: 360,
  borderRadius: 8,
  boxShadow: `0 1.5px 2px 0 rgba(0,0,0,0.16)`,
  border: '1px solid #DDDDDD',
});
