import { createVar, style } from '@vanilla-extract/css';

export const width = createVar();
export const height = createVar();
export const wrapper = style({
  width: width,
  height: height,
  backgroundColor: 'red',
  position: 'absolute',
  top: '-50%',
  left: '-50%',
  transform: 'translate(-50%, -50%)',
});
