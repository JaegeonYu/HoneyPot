import { createGlobalTheme, createGlobalThemeContract, globalStyle } from '@vanilla-extract/css';

export const vars = createGlobalThemeContract({
  colors: {
    service: {
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
        MAIN: 'people-power-party-main',
        SUB: 'people-power-party-sub',
        LIGHT: 'people-power-party-light',
      },
      DEMOCRATIC_PARTY: {
        MAIN: 'democratic-party-main',
        SUB: 'democratic-party-sub',
        LIGHT: 'democratic-party-light',
      },
      GREEN_JUSTICE_PARTY: {
        MAIN: 'green-justice-party-main',
        SUB: 'green-justice-party-sub',
        LIGHT: 'green-justice-party-light',
      },
      REFORM_PARTY: {
        MAIN: 'reform-party-main',
        SUB: 'reform-party-sub',
        LIGHT: 'reform-party-light',
      },
      NEW_FUTURE_PARTY: {
        MAIN: 'new-future-party-main',
        SUB: 'new-future-party-sub',
        LIGHT: 'new-future-party-light',
      },
      LIBERTY_UNIFICATION_PARTY: {
        MAIN: 'liberty-unification-party-main',
        SUB: 'liberty-unification-party-sub',
        LIGHT: 'liberty-unification-party-light',
      },
      PROGRESSIVE_PARTY: {
        MAIN: 'progressive-party-main',
        SUB: 'progressive-party-sub',
        LIGHT: 'progressive-party-light',
      },
      DEMOCRATIC_UNION: {
        MAIN: 'democratic-union-main',
        SUB: 'democratic-union-sub',
        LIGHT: 'democratic-union-light',
      },
      NEW_PROGRESSIVE_UNION: {
        MAIN: 'new-progressive-union-main',
        SUB: 'new-progressive-union-sub',
        LIGHT: 'new-progressive-union-light',
      },
      KOREA_INNOVATION_PARTY: {
        MAIN: 'korea-innovation-party-main',
        SUB: 'korea-innovation-party-sub',
        LIGHT: 'korea-innovation-party-light',
      },
      INDEPENDENT_GROUP: {
        MAIN: 'independent-group-main',
        SUB: 'independent-group-main',
        LIGHT: 'independent-group-main',
      },
    },
  },
});

createGlobalTheme(':root', vars, {
  colors: {
    service: {
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
        MAIN: 'rgba(230, 30, 43, 1)',
        SUB: 'rgba(230, 30, 43, 0.6)',
        LIGHT: 'rgba(230, 30, 43, 0.3)',
      },

      DEMOCRATIC_PARTY: {
        MAIN: 'rgba(21, 36, 132, 1)',
        SUB: 'rgba(21, 36, 132, 0.6)',
        LIGHT: 'rgba(21, 36, 132, 0.3)',
      },

      GREEN_JUSTICE_PARTY: {
        MAIN: 'rgba(0, 124, 54, 1)',
        SUB: 'rgba(0, 124, 54, 0.6)',
        LIGHT: 'rgba(0, 124, 54, 0.3)',
      },
      REFORM_PARTY: {
        MAIN: 'rgba(255, 121, 32, 1)',
        SUB: 'rgba(255, 121, 32, 0.6)',
        LIGHT: 'rgba(255, 121, 32, 0.3)',
      },

      NEW_FUTURE_PARTY: {
        MAIN: 'rgba(69, 186, 189, 1)',
        SUB: 'rgba(69, 186, 189, 0.6)',
        LIGHT: 'rgba(69, 186, 189, 0.3)',
      },

      LIBERTY_UNIFICATION_PARTY: {
        MAIN: 'rgba(9, 88, 167, 1)',
        SUB: 'rgba(9, 88, 167, 0.6)',
        LIGHT: 'rgba(9, 88, 167, 0.3)',
      },

      PROGRESSIVE_PARTY: {
        MAIN: 'rgba(214, 0, 28, 1)',
        SUB: 'rgba(214, 0, 28, 0.6)',
        LIGHT: 'rgba(214, 0, 28, 0.3)',
      },

      DEMOCRATIC_UNION: {
        MAIN: 'rgba(21, 36, 132, 1)',
        SUB: 'rgba(21, 36, 132, 0.6)',
        LIGHT: 'rgba(21, 36, 132, 0.3)',
      },

      NEW_PROGRESSIVE_UNION: {
        MAIN: 'rgba(0, 210, 195, 1)',
        SUB: 'rgba(0, 210, 195, 0.6)',
        LIGHT: 'rgba(0, 210, 195, 0.3)',
      },

      KOREA_INNOVATION_PARTY: {
        MAIN: 'rgba(0, 115, 207, 1)',
        SUB: 'rgba(0, 115, 207, 0.6)',
        LIGHT: 'rgba(0, 115, 207, 0.3)',
      },

      INDEPENDENT_GROUP: {
        MAIN: 'rgba(113, 113, 113, 1)',
        SUB: 'rgba(113, 113, 113, 0.6)',
        LIGHT: 'rgba(113, 113, 113, 0.3)',
      },
    },
  },
});

globalStyle('*', {
  boxSizing: 'border-box',
  fontFamily: '--noto-sans-kr',
  fontWeight: 500,
});

globalStyle('body', {
  width: '100vw',
  border: '1px solid black',
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
