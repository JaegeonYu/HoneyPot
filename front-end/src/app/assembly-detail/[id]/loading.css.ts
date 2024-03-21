import { vars } from '@/globalTheme.css';
import { createVar, style } from '@vanilla-extract/css';

export const widthProps = createVar();
export const heightProps = createVar();
export const loadingWrapper = style({
  width: widthProps,
  height: heightProps,
  backgroundColor: vars.colors.service.SUB_WHITE,
  borderRadius: '12px',
});
