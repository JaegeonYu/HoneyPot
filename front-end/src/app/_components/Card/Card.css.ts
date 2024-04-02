import { createVar, style } from '@vanilla-extract/css';

export const maxWidth = createVar();
export const aspectRatioProps = createVar();
export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  minWidth: '212px',
  width: '100%',
  maxWidth: maxWidth,
  aspectRatio: aspectRatioProps,
  borderRadius: 16,
  boxShadow: `0 4px 16px 0 rgba(0,0,0,0.16)`,
  position: 'relative',
  overflow: 'hidden',
});

export const imgPadding = createVar();
export const imgHeight = createVar();
export const styledImage = style({
  width: '100%',
  height: imgHeight,
  padding: imgPadding,
});
