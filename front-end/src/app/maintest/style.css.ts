import { vars } from '@/globalTheme.css';
import { createVar, style, keyframes } from '@vanilla-extract/css';

export const mainWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  // alignItems: 'center',
  width: '110%',
  overflow: 'hidden',
  position: 'relative',
});

export const solganSection = style({
  display: 'flex',
  flexDirection: 'column',
  height: '80vh',
  width: '100%',
  justifyContent: 'space-between',
  backgroundColor: `${vars.colors.service.MAIN_COLOR_20}`,
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
  rowGap: '23vh',
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
  backgroundColor: `${vars.colors.service.MAIN_COLOR_60}`,
  alignItems: 'center',
  justifyContent: 'center',
  display: 'flex',
  cursor: 'pointer',
  fontWeight: 500,
  fontSize: 16,
  color: `${vars.colors.service.MAIN_WHITE}`,
  borderRadius: 8,
  boxShadow: `inset 3.00px 3.22px 6.22px -0.78px rgba(0, 0, 0, 0.15),
  inset -4.50px -4.83px 6.22px -0.78px rgba(0, 0, 0, 0.3),
  9.01px 9.65px 4.66px -2.33px rgba(0, 0, 0, 0.6)`,
});

// export const testclay = style({
//   borderRadius: 3,
//   boxShadow: `inset 3.00px 3.22px 6.22px -0.78px rgba(0, 0, 0, 0.15),
//   inset -4.50px -4.83px 6.22px -0.78px rgba(0, 0, 0, 0.3),
//   9.01px 9.65px 4.66px -2.33px rgba(0, 0, 0, 0.6)`,
// });
/////////////////////////////

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
  fontWeight: 500,
  textAlign: 'center',
});
export const billBoldFont = style({
  fontSize: 36,
  fontWeight: 900,
  textAlign: 'center',
});
export const billSubFont = style({
  fontSize: 30,
  fontWeight: 400,
  textAlign: 'center',
});
