import { createGlobalTheme, createGlobalThemeContract, globalStyle } from '@vanilla-extract/css';

export const vars = createGlobalThemeContract({
  fontFamily: {
    ibmPlexSansKr: 'ibm-plex-sans-kr',
  },
  colors: {
    service: {
      MAIN_COLOR_100: 'main-color-100',
      MAIN_COLOR_80: 'main-color-80',
      MAIN_COLOR_60: 'main-color-60',
      MAIN_COLOR_40: 'main-color-40',
      MAIN_COLOR_20: 'main-color-20',

      MAIN_BLACK: 'main-black',
      SUB_BLACK: 'sub-black',
      STROKE_OR_BLUR: 'stroke-or-blur',
      HOVER_STROKE: 'hover-stroke',
      HOVER_BACKGROUND: 'hover-background',
      MAIN_WHITE: 'main-white',
      SUB_WHITE: 'sub-white',
      MAIN_GOLD: 'main-gold',
    },
    party: {
      PEOPLE_POWER_PARTY: {
        100: 'people-power-party-100',
        80: 'people-power-party-80',
        60: 'people-power-party-60',
        40: 'people-power-party-40',
        20: 'people-power-party-20',
      },
      PEOPLE_FUTURE_PARTY: {
        100: 'people-future-party-100',
        80: 'people-future-party-80',
        60: 'people-future-party-60',
        40: 'people-future-party-40',
        20: 'people-future-party-20',
      },
      DEMOCRATIC_PARTY: {
        100: 'democratic-party-100',
        80: 'democratic-party-80',
        60: 'democratic-party-60',
        40: 'democratic-party-40',
        20: 'democratic-party-20',
      },
      GREEN_JUSTICE_PARTY: {
        100: 'green-justice-party-100',
        80: 'green-justice-party-80',
        60: 'green-justice-party-60',
        40: 'green-justice-party-40',
        20: 'green-justice-party-20',
      },
      REFORM_PARTY: {
        100: 'reform-party-100',
        80: 'reform-party-80',
        60: 'reform-party-60',
        40: 'reform-party-40',
        20: 'reform-party-20',
      },
      NEW_FUTURE_PARTY: {
        100: 'new-future-party-100',
        80: 'new-future-party-80',
        60: 'new-future-party-60',
        40: 'new-future-party-40',
        20: 'new-future-party-20',
      },
      LIBERTY_UNIFICATION_PARTY: {
        100: 'liberty-unification-party-100',
        80: 'liberty-unification-party-80',
        60: 'liberty-unification-party-60',
        40: 'liberty-unification-party-40',
        20: 'liberty-unification-party-20',
      },
      PROGRESSIVE_PARTY: {
        100: 'progressive-party-100',
        80: 'progressive-party-80',
        60: 'progressive-party-60',
        40: 'progressive-party-40',
        20: 'progressive-party-20',
      },
      DEMOCRATIC_UNION: {
        100: 'democratic-union-100',
        80: 'democratic-union-80',
        60: 'democratic-union-60',
        40: 'democratic-union-40',
        20: 'democratic-union-20',
      },
      NEW_PROGRESSIVE_UNION: {
        100: 'new-progressive-union-100',
        80: 'new-progressive-union-80',
        60: 'new-progressive-union-60',
        40: 'new-progressive-union-40',
        20: 'new-progressive-union-20',
      },
      KOREA_INNOVATION_PARTY: {
        100: 'korea-innovation-party-100',
        80: 'korea-innovation-party-80',
        60: 'korea-innovation-party-60',
        40: 'korea-innovation-party-40',
        20: 'korea-innovation-party-20',
      },
      INDEPENDENT_GROUP: {
        100: 'independent-group-100',
        80: 'independent-group-80',
        60: 'independent-group-60',
        40: 'independent-group-40',
        20: 'independent-group-20',
      },
    },
  },
});

createGlobalTheme(':root', vars, {
  fontFamily: {
    ibmPlexSansKr: `var(--ibm-plex-sans-kr)`,
  },
  colors: {
    service: {
      MAIN_COLOR_100: 'rgba(243, 185, 26, 1)',
      MAIN_COLOR_80: 'rgba(243, 185, 26, 0.8)',
      MAIN_COLOR_60: 'rgba(243, 185, 26, 0.6)',
      MAIN_COLOR_40: 'rgba(243, 185, 26, 0.4)',
      MAIN_COLOR_20: 'rgba(243, 185, 26, 0.2)',

      MAIN_BLACK: '#222222',
      SUB_BLACK: '#717171',
      STROKE_OR_BLUR: '#DDDDDD',
      HOVER_STROKE: '#EBEBEB',
      HOVER_BACKGROUND: '#F7F7F7',
      MAIN_WHITE: '#FFFFFF',
      SUB_WHITE: '#F7F7F7',
      MAIN_GOLD: '#FFD067',
    },
    party: {
      PEOPLE_POWER_PARTY: {
        100: 'rgba(230, 30, 43, 1)',
        80: 'rgba(230, 30, 43, 0.55)',
        60: 'rgba(230, 30, 43, 0.25)',
        40: 'rgba(230, 30, 43, 0.05)',
        20: 'rgba(211, 211, 211, 1)',
      },
      PEOPLE_FUTURE_PARTY: {
        100: 'rgba(230, 30, 43, 1)',
        80: 'rgba(230, 30, 43, 0.55)',
        60: 'rgba(230, 30, 43, 0.25)',
        40: 'rgba(230, 30, 43, 0.05)',
        20: 'rgba(211, 211, 211, 1)',
      },
      DEMOCRATIC_PARTY: {
        100: 'rgba(21, 36, 132, 1)',
        80: 'rgba(21, 36, 132, 0.55)',
        60: 'rgba(21, 36, 132, 0.25)',
        40: 'rgba(21, 36, 132, 0.05)',
        20: 'rgba(211, 211, 211, 1)',
      },
      GREEN_JUSTICE_PARTY: {
        100: 'rgba(0, 124, 54, 1)',
        80: 'rgba(0, 124, 54, 0.55)',
        60: 'rgba(0, 124, 54, 0.25)',
        40: 'rgba(0, 124, 54, 0.05)',
        20: 'rgba(211, 211, 211, 1)',
      },
      REFORM_PARTY: {
        100: 'rgba(255, 121, 32, 1)',
        80: 'rgba(255, 121, 32, 0.55)',
        60: 'rgba(255, 121, 32, 0.25)',
        40: 'rgba(255, 121, 32, 0.05)',
        20: 'rgba(211, 211, 211, 1)',
      },

      NEW_FUTURE_PARTY: {
        100: 'rgba(69, 186, 189, 1)',
        80: 'rgba(69, 186, 189, 0.55)',
        60: 'rgba(69, 186, 189, 0.25)',
        40: 'rgba(69, 186, 189, 0.05)',
        20: 'rgba(211, 211, 211, 1)',
      },
      LIBERTY_UNIFICATION_PARTY: {
        100: 'rgba(9, 88, 167, 1)',
        80: 'rgba(9, 88, 167, 0.55)',
        60: 'rgba(9, 88, 167, 0.25)',
        40: 'rgba(9, 88, 167, 0.05)',
        20: 'rgba(211, 211, 211, 1)',
      },
      PROGRESSIVE_PARTY: {
        100: 'rgba(214, 0, 28, 1)',
        80: 'rgba(214, 0, 28, 0.55)',
        60: 'rgba(214, 0, 28, 0.25)',
        40: 'rgba(214, 0, 28, 0.05)',
        20: 'rgba(211, 211, 211, 1)',
      },
      DEMOCRATIC_UNION: {
        100: 'rgba(21, 36, 132, 1)',
        80: 'rgba(21, 36, 132, 0.55)',
        60: 'rgba(21, 36, 132, 0.25)',
        40: 'rgba(21, 36, 132, 0.05)',
        20: 'rgba(211, 211, 211, 1)',
      },
      NEW_PROGRESSIVE_UNION: {
        100: 'rgba(0, 210, 195, 1)',
        80: 'rgba(0, 210, 195, 0.55)',
        60: 'rgba(0, 210, 195, 0.25)',
        40: 'rgba(0, 210, 195, 0.05)',
        20: 'rgba(211, 211, 211, 1)',
      },
      KOREA_INNOVATION_PARTY: {
        100: 'rgba(0, 115, 207, 1)',
        80: 'rgba(0, 115, 207, 0.55)',
        60: 'rgba(0, 115, 207, 0.25)',
        40: 'rgba(0, 115, 207, 0.05)',
        20: 'rgba(211, 211, 211, 1)',
      },
      INDEPENDENT_GROUP: {
        100: 'rgba(113, 113, 113, 1)',
        80: 'rgba(113, 113, 113, 0.55)',
        60: 'rgba(113, 113, 113, 0.25)',
        40: 'rgba(113, 113, 113, 0.05)',
        20: 'rgba(211, 211, 211, 1)',
      },
    },
  },
});

globalStyle('*', {
  boxSizing: 'border-box',
  fontFamily: 'var(--ibm-plex-sans-kr)',
  fontWeight: 400,
  color: vars.colors.service.MAIN_BLACK,
});

globalStyle('body', {
  width: '100vw',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  margin: 0,
  overflowY: 'scroll',
  overflowX: 'hidden',
});

globalStyle('a', {
  textDecoration: 'none',
  color: 'inherit',
});

globalStyle('p', {
  margin: 0,
});

globalStyle('ul', {
  listStyleType: 'none',
  margin: 0,
  padding: 0,
});

globalStyle('button', {
  backgroundColor: 'inherit',
  outline: 'none',
  border: 'none',
  padding: 0,
});

globalStyle('h1, h2, h3, h4', {
  margin: 0,
});

globalStyle('button:focus', {
  backgroundColor: 'inherit',
  outline: 'none',
  border: 'none',
});

globalStyle('input:focus', {
  outline: 'none',
});

globalStyle('path', {
  width: '100%',
  height: '100%',
});

globalStyle('::-webkit-scrollbar', {
  width: '10px',
  backgroundColor: vars.colors.service.MAIN_COLOR_20,
});

globalStyle('body::-webkit-scrollbar-thumb', {
  backgroundColor: vars.colors.service.MAIN_COLOR_100,
  borderRadius: '12px',
});
