import { vars } from '@/globalTheme.css';
import { createVar, style } from '@vanilla-extract/css';

export const wrapper = style({
  display: 'flex',
  alignItems: 'center',
  width: 'fit-content',
  height: '100%',
});

export const iconWrapper = style({
  width: '40px',
  paddingTop: '6px',
  height: 'fit-content',
});

export const sliderContainer = style({
  width: '100px',
  height: '24px',
  position: 'relative',
});

export const sliderRail = style({
  position: 'absolute',
  top: 'calc(50% - 2px)',
  left: '0px',
  width: '100%',
  height: '4px',
  borderRadius: '2px',
  backgroundColor: vars.colors.party.INDEPENDENT_GROUP[80],
});

export const width = createVar();
export const sliderFillTrack = style({
  width: width,
  height: '4px',
  borderRadius: '2px',
  backgroundColor: vars.colors.service.MAIN_COLOR_100,
  position: 'absolute',
  top: 'calc(50% - 2px)',
});

export const slider = style({
  WebkitAppearance: 'none',
  position: 'absolute',
  top: 'calc(50% - 6px)',
  left: '0px',
  width: '100%',
  height: '12px',
  background: 'transparent',
  margin: 0,

  selectors: {
    [`&::-webkit-slider-thumb`]: {
      WebkitAppearance: 'none',
      background: 'blue',
      width: '12px',
      height: '12px',
      borderRadius: '6px',
      cursor: 'pointer',
      backgroundColor: vars.colors.service.MAIN_COLOR_100,
    },

    [`&:active`]: {
      cursor: 'grabbing',
    },

    [`&:focus`]: {
      outline: 'none',
    },
  },
});
