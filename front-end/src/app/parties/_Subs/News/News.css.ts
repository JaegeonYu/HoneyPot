import { style } from '@vanilla-extract/css';
import { vars } from '@/globalTheme.css';

export const item = style({
  display: 'flex',
  justifyContent: 'space-between',
  gap: '12px',
});

export const itemContent = style({
  width: 'calc(100% - 12px - 86px)',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  cursor: 'pointer',
  fontWeight: 500,
  color: `${vars.colors.service.MAIN_BLACK}`,
});

export const itemDate = style({
  width: '86px',
  fontSize: '12px',
  lineHeight: '24px',
  fontWeight: 400,
  color: `${vars.colors.service.SUB_BLACK}`,
});
