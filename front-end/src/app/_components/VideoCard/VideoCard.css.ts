import { vars } from '@/globalTheme.css';
import { createVar, style } from '@vanilla-extract/css';

export const wrapper = style({
  minWidth: 276,
  width: '100%',
  aspectRatio: '16 / 13',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  borderRadius: '16px',
  overflow: 'hidden',
});

export const resouceContentWrapper = style({
  width: '100%',
  height: '70%',
});

export const toggleVisible = createVar();
export const styledThumbnail = style({
  width: '100%',
  maxHeight: '70%',
  borderRadius: '16px',
  opacity: toggleVisible,
  transition: '0.3s',
});

export const styledVideo = style({
  width: '100%',
  borderRadius: '16px',
  backgroundColor: vars.colors.service.MAIN_BLACK,
  opacity: toggleVisible,
  transition: '0.3s',
});

export const textContentWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  width: '100%',
  height: '30%',
  padding: '16px 12px',
});

export const styledTitle = style({
  color: vars.colors.service.MAIN_BLACK,
  fontSize: '16px',
  fontWeight: '700',
});

export const textAlign = createVar();
export const styledMetadata = style({
  display: 'inline-block',
  width: '50%',
  textAlign: textAlign,
  color: vars.colors.service.SUB_BLACK,
  fontSize: '14px',
});

export const durationContainer = style({
  position: 'absolute',
  top: '12px',
  right: '12px',
  borderRadius: 4,
  width: 'fit-content',
  fontSize: '10px',
  color: vars.colors.service.MAIN_WHITE,
  backgroundColor: vars.colors.service.SUB_BLACK,
  opacity: toggleVisible,
  padding: '2px 8px',
});
