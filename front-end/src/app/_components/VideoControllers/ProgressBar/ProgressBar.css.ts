import { vars } from '@/globalTheme.css';
import { createVar, style } from '@vanilla-extract/css';

export const toggleVisible = createVar();
export const progressBarTrack = style({
  position: 'absolute',
  top: '0px',
  left: '0px',
  width: '100%',
  height: '4px',
  opacity: toggleVisible,
  backgroundColor: vars.colors.party.INDEPENDENT_GROUP[80],

  selectors: {
    [`&:hover`]: {
      height: '6px',
    },
  },
});

export const curTimePercent = createVar();
export const progressBarFilledColor = style({
  position: 'absolute',
  top: '0px',
  left: '0px',
  width: curTimePercent,
  height: '100%',
  opacity: toggleVisible,
  backgroundColor: vars.colors.service.MAIN_COLOR_100,
  transition: '0.3s',
});

export const translateX = createVar();
export const scrubButton = style({
  visibility: 'hidden',
  position: 'absolute',
  bottom: '-4px',
  left: `calc(${translateX} - 8px)`,
  width: '16px',
  height: '16px',
  //   transform: `translateX(${translateX})`,
  backgroundColor: vars.colors.service.MAIN_COLOR_100,
  borderRadius: '50%',

  selectors: {
    [`${progressBarTrack}:hover > &`]: {
      visibility: 'visible',
    },
  },
});
