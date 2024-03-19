import { vars } from '@/globalTheme.css';
import { createVar, style } from '@vanilla-extract/css';

export const backgroundColorProps = createVar();
export const containerRootStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '8px 4px',
  width: 'fit-content',
  height: 20,
  backgroundColor: backgroundColorProps,
  borderRadius: 4,
  color: vars.colors.service.MAIN_WHITE,
  fontWeight: 700,
  fontSize: 10,
  cursor: 'default',
});

export const positionAbsoluteStyle = style([
  containerRootStyle,
  {
    position: 'absolute',
    top: 12,
    right: 12,
  },
]);

export const positionRelativeStyle = style([
  containerRootStyle,
  {
    position: 'relative',
  },
]);
