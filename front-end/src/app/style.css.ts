import { vars } from '@/globalTheme.css';
import { createVar, style, keyframes } from '@vanilla-extract/css';

export const mainWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  // alignItems: 'center',
  width: '100vw',
  overflow: 'hidden',
  position: 'relative',
});

export const solganSection = style({
  display: 'flex',
  flexDirection: 'column',
  height: '90vh',
  width: '100%',
  justifyContent: 'space-between',
  backgroundColor: `${vars.colors.service.MAIN_COLOR_100}`,
});

export const solganWrapper = style({
  display: 'flex',
  flexDirection: 'row',
  // alignItems: 'center',
  marginTop: '8%',
  justifyContent: 'center',
  width: '100%',
});
export const solganSubWrapper = style({
  display: 'flex',
  flexDirection: 'row',
  // alignItems: 'center',
  // marginTop: '8%',
  // marginBottom: '8%',
  justifyContent: 'center',
  backgroundColor: `${vars.colors.service.HOVER_BACKGROUND}`,
  width: '100%',
});

export const assembleWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  // alignItems: 'center',
  // height: '1230px',
  rowGap: '50vh',
  justifyContent: 'space-between',
  // alignItems: 'center',
  width: '100%',
  // backgroundColor: `${vars.colors.service.HOVER_BACKGROUND}`,
  padding: '15% 8vw',
  position: 'relative',
});

export const assembleSub = style({
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const rotate = keyframes({
  // '0%': { transform: 'rotate(0deg)' },
  '50%': { transform: 'translateY(-30px)' },
  '100%': { transform: 'translateY(0px)' },
});
export const arrow = style({
  alignItems: 'center',
  justifyContent: 'center',
  display: 'flex',
  width: '100%',
  animationName: rotate,
  animationDuration: '2s',
  animationIterationCount: 'infinite',
});
/////////BIll//////////////
export const billWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  rowGap: '3vh',
  justifyContent: 'space-between',
  backgroundColor: `${vars.colors.service.HOVER_BACKGROUND}`,
  // alignItems: 'center',
  width: '100%',
  padding: '15% 8vw',
  position: 'relative',
});

//////////////////BTN TEMP/////////////
export const btn = style({
  width: '15vw',
  height: '7vh',
  backgroundColor: `${vars.colors.service.MAIN_COLOR_100}`,
  alignItems: 'center',
  justifyContent: 'center',
  display: 'flex',
  cursor: 'pointer',
  fontWeight: 500,
  fontSize: 16,
  color: `${vars.colors.service.MAIN_WHITE}`,
  borderRadius: 8,
  boxShadow: `inset 1.33px 1.49px 2.82px -0.35px rgba(0, 0, 0, 0.15),
  inset -2.00px -2.23px 2.82px -0.35px rgba(0, 0, 0, 0.3),
  4.00px 4.47px 2.12px -1.06px rgba(0, 0, 0, 0.6)
  `,
});

export const testclay = style({
  backgroundColor: `${vars.colors.service.MAIN_COLOR_60}`,
  borderRadius: 26,
  boxShadow: `inset 1.33px 1.49px 2.82px -0.35px rgba(0, 0, 0, 0.15),
  inset -2.00px -2.23px 2.82px -0.35px rgba(0, 0, 0, 0.3),
  4.00px 4.47px 2.12px -1.06px rgba(0, 0, 0, 0.6)`,
});
export const testclay2 = style({
  backgroundColor: `${vars.colors.service.MAIN_COLOR_60}`,
  borderRadius: 26,

  boxShadow: `inset 3.06px 2.58px 5.64px -0.70px rgba(0, 0, 0, 0.15),
  inset -4.59px -3.87px 5.64px -0.70px rgba(0, 0, 0, 0.3),
  9.18px 7.73px 4.23px -2.11px rgba(0, 0, 0, 0.6)`,
});

/////////////////////////////

export const shadow1 = style({
  height: '100%',
  backgroundColor: `${vars.colors.service.MAIN_WHITE}`,
  borderRadius: 26,
  boxShadow: `0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)`,
});

export const shadowhover = style({
  width: '40%',
  height: 'fit-content',

  padding: '32px',
  backgroundColor: `${vars.colors.service.MAIN_WHITE}`,
  borderRadius: 26,
  // box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  boxShadow: `0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)`,
  transition: `all 0.3s cubic-bezier(.25,.8,.25,1)`,
  selectors: {
    '&:hover': {
      boxShadow: `0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)`,
    },
  },
});

export const shadowhover2 = style({
  // width: '40%',
  height: '100%',

  // padding: '32px',
  backgroundColor: `${vars.colors.service.MAIN_WHITE}`,
  borderRadius: 26,
  // box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  boxShadow: `0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)`,
  transition: `all 0.3s cubic-bezier(.25,.8,.25,1)`,
  selectors: {
    '&:hover': {
      boxShadow: `0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)`,
    },
  },
});

////////////////////////////////////////FONT STYLE/////////////////

export const solganFont = style({
  fontSize: 60,
  fontWeight: 700,
  textAlign: 'center',
});

export const solganSubFont = style({
  fontSize: 28,
  fontWeight: 700,
  textAlign: 'center',
  marginTop: '12%',
  marginBottom: '12%',
  lineHeight: 1.5,
});

export const assembleMainFont = style({
  fontSize: 36,
  fontWeight: 700,
  textAlign: 'left',
});

export const assembleFont = style({
  fontSize: 26,
  fontWeight: 500,
  textAlign: 'left',
});

export const billFont = style({
  fontSize: 36,
  fontWeight: 400,
  textAlign: 'center',
});
export const billBoldFont = style({
  fontSize: 36,
  fontWeight: 800,
  textAlign: 'center',
});
export const billSubFont = style({
  fontSize: 30,
  fontWeight: 400,
  textAlign: 'center',
});
/////

export const test = style({
  display: 'flex',
  height: 300,
  backgroundColor: `${vars.colors.service.MAIN_COLOR_100}`,
  justifyContent: 'center',
  alignItems: 'center',
});
