import { style } from '@vanilla-extract/css';
import { vars } from '@/globalTheme.css';

export const listScrollWrapper = style({
  width: '80%',
  height: '76px',
  overflowX: 'scroll',
  overflowY: 'hidden',
});

export const listContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
  gap: 16,
  width: 'fit-content',
  height: '100%',
});

export const categoryCard = style({
  width: 'fit-content',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '10px 16px',
  selectors: {
    '&:hover': {
      borderBottom: '1px solid #222222',
    },
  },
});

export const styledSvg = style({
  fill: vars.colors.service.SUB_BLACK,
  width: '30px',
  height: '34px',
  selectors: {
    [`${categoryCard}:hover &`]: {
      fill: vars.colors.service.MAIN_BLACK,
    },
  },
});

export const name = style({
  width: 'fit-content',
  whiteSpace: 'nowrap',
  color: vars.colors.service.SUB_BLACK,
  fontSize: '10px',
  selectors: {
    [`${categoryCard}:hover &`]: {
      color: vars.colors.service.MAIN_BLACK,
    },
  },
});
