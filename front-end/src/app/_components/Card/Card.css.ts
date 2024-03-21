import { createVar, style } from '@vanilla-extract/css';

export const aspectRatioProps = createVar();
export const wrapper = style({
  minWidth: 276,
  width: '100%',
  maxWidth: 402,
  aspectRatio: aspectRatioProps,
  borderRadius: 16,
  boxShadow: `0 4px 16px 0 rgba(0,0,0,0.16)`,
  position: 'relative',
  overflow: 'hidden',
});

export const imgHeight = createVar();
export const styledImage = style({
  width: '100%',
  height: imgHeight,
});
