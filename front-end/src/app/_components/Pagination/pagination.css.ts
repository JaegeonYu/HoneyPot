import { style } from '@vanilla-extract/css';
import { vars } from '@/globalTheme.css';

export const paginationContainer = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '20px',
});

export const paginationButton = style({
  padding: '5px 10px',
  margin: '0 2px',
  border: '1px solid #ccc',
  borderRadius: '3px',
  background: '#fff',
  cursor: 'pointer',
  outline: 'none',
  ':disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
});

export const paginationActiveButton = style([
  paginationButton,
  {
    backgroundColor: `${vars.colors.service.HOVER_BACKGROUND}`,
    fontWeight: 'bold',
  },
]);

export const paginationFirstLastButton = style([
  paginationButton,
  {
    margin: '0px -5px',
  },
]);

export const paginationPreviousNextButton = style([
  paginationButton,
  {
    margin: '0px 8px',
  },
]);
