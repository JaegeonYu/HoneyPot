import { createGlobalTheme, createGlobalThemeContract, globalStyle } from '@vanilla-extract/css';

export const vars = createGlobalThemeContract({
  colors: {
    PEOPLE_POWER_PARTY: {
      MAIN: '',
      SUB: '',
      LIGHT: '',
    },

    DEMOCRATIC_PARTY: {
      MAIN: '',
      SUB: '',
      LIGHT: '',
    },

    GREEN_JUSTICE_PARTY: {
      MAIN: '',
      SUB: '',
      LIGHT: '',
    },
    REFORM_PARTY: {
      MAIN: '',
      SUB: '',
      LIGHT: '',
    },

    NEW_FUTURE_PARTY: {
      MAIN: '',
      SUB: '',
      LIGHT: '',
    },

    LIBERTY_UNIFICATION_PARTY: {
      MAIN: '',
      SUB: '',
      LIGHT: '',
    },

    PROGRESSIVE_PARTY: {
      MAIN: '',
      SUB: '',
      LIGHT: '',
    },

    DEMOCRATIC_UNION: {
      MAIN: '',
      SUB: '',
      LIGHT: '',
    },

    NEW_PROGRESSIVE_UNION: {
      MAIN: '',
      SUB: '',
      LIGHT: '',
    },

    KOREA_INNOVATION_PARTY: {
      MAIN: '',
      SUB: '',
      LIGHT: '',
    },

    INDEPENDENT_GROUP: {
      MAIN: '',
      SUB: '',
      LIGHT: '',
    },
  },
});

createGlobalTheme(':root', vars, {
  colors: {
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
      LIGHT: 'rgba(0, 124, 54, 0.3,',
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
});

globalStyle('*', {
  boxSizing: 'border-box',
});

globalStyle('a', {
  textDecoration: 'none',
  color: 'inherit',
});

globalStyle('p', {
  margin: 0,
});
