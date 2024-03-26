import { vars } from '@/globalTheme.css';
import { style } from '@vanilla-extract/css';

export const iconWrapper = style({
  position: 'absolute',
  top: 0,
  right: 0,
});

export const tooltip = style({
  position: 'absolute',
  bottom: '22px',
  right: '0px',
  visibility: 'hidden',

  width: 'fit-content',
  height: 'fit-content',
  padding: '8px',
  boxShadow: '0 2px 12px 0 rgba(0,0,0,0.16)',
  fontSize: '12px',
  backgroundColor: vars.colors.service.MAIN_WHITE,
  borderRadius: '6px',
  zIndex: 9,

  selectors: {
    [`${iconWrapper}:hover &`]: {
      visibility: 'visible',
    },
  },
});
