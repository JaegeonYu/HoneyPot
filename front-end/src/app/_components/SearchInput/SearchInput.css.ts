import { vars } from '@/globalTheme.css';
import { style } from '@vanilla-extract/css';

export const styledLabel = style({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  height: '40px',
  maxWidth: '660px',
  border: `1px solid ${vars.colors.service.STROKE_OR_BLUR}`,
  borderRadius: '6px',
  overflow: 'hidden',
});

export const styleInput = style({
  outline: 'none',
  border: 'none',
  width: 'calc(100% - 32px)',
  padding: '8px',
  paddingLeft: '12px',
  height: '100%',
});

export const submitButton = style({
  width: '38px',
  height: '38px',
  backgroundColor: vars.colors.service.MAIN_COLOR_100,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});
