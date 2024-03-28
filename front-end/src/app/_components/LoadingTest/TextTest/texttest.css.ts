import { style } from '@vanilla-extract/css';
import { vars } from '@/globalTheme.css';
export const text = style({
  textAlign: 'center',
  fontSize: '30px',
  fontWeight: 1000,
  letterSpacing: '-1px',
  lineHeight: 1.2,
  margin: '100px 0 40px',
  color: `${vars.colors.service.MAIN_WHITE}`,
});
