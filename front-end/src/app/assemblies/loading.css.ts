import { vars } from '@/globalTheme.css';
import { createVar, style } from '@vanilla-extract/css';

export const widthProps = createVar();
export const heightProps = createVar();
export const borderRadius = createVar();
export const loadingWrapper = style({
  width: widthProps,
  height: heightProps,
  maxWidth: '660px',
  borderRadius: borderRadius,
  backgroundColor: vars.colors.service.SUB_WHITE,
});
