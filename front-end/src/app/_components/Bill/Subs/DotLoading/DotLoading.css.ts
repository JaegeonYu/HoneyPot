import { style, keyframes } from '@vanilla-extract/css';
import { vars } from '@/globalTheme.css';
// Define keyframes
const dotPulseKeyframes1 = keyframes({
  '0%': { boxShadow: '9969px 0 0 -20px' },
  '30%': { boxShadow: '9969px 0 0 2px' },
  '60%, 100%': { boxShadow: '9969px 0 0 -20px' },
});

const dotPulseKeyframes2 = keyframes({
  '0%': { boxShadow: '9984px 0 0 -20px' },
  '30%': { boxShadow: '9984px 0 0 2px' },
  '60%, 100%': { boxShadow: '9984px 0 0 -20px' },
});

const dotPulseKeyframes3 = keyframes({
  '0%': { boxShadow: '9999px 0 0 -20px' },
  '30%': { boxShadow: '9999px 0 0 2px' },
  '60%, 100%': { boxShadow: '9999px 0 0 -20px' },
});

const dotPulseKeyframes4 = keyframes({
  '0%': { boxShadow: '10014px 0 0 -20px' },
  '30%': { boxShadow: '10014px 0 0 2px' },
  '60%, 100%': { boxShadow: '10014px 0 0 -20px' },
});
const dotPulseKeyframes5 = keyframes({
  '0%': { boxShadow: '10029px 0 0 -20px' },
  '30%': { boxShadow: '10029px 0 0 2px' },
  '60%, 100%': { boxShadow: '10029px 0 0 -20px' },
});
// ROot
export const dotPulse = style({
  position: 'relative',
  left: '-9999px',
  width: '18px',
  height: '18px',
  borderRadius: '20px',
  backgroundColor: `${vars.colors.service.MAIN_COLOR_100}`,
  color: `${vars.colors.service.MAIN_COLOR_100}`,
  boxShadow: '9999px 0 0 -20px',
});

// Define styles
export const dotPulse1 = style([
  dotPulse,
  {
    animation: `${dotPulseKeyframes1} 2.5s infinite linear`,
    animationDelay: '0s',
  },
]);

export const dotPulse2 = style([
  dotPulse,
  {
    animation: `${dotPulseKeyframes2} 2.5s infinite linear`,
    animationDelay: '0.2s',
  },
]);

export const dotPulse3 = style([
  dotPulse,
  {
    animation: `${dotPulseKeyframes3} 2.5s infinite linear`,
    animationDelay: '0.4s',
  },
]);
export const dotPulse4 = style([
  dotPulse,
  {
    animation: `${dotPulseKeyframes4} 2.5s infinite linear`,
    animationDelay: '0.6s',
  },
]);
export const dotPulse5 = style([
  dotPulse,
  {
    animation: `${dotPulseKeyframes5} 2.5s infinite linear`,
    animationDelay: '0.8s',
  },
]);

export const stage = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  padding: '32px 0',
  margin: '0 -5%',
  overflow: 'hidden',
});

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
});
