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
  position: 'relative',
});

export const toggleVisible = createVar();
export const styledThumbnail = style({
  width: '100%',
  maxHeight: '100%',
  borderRadius: '16px',
  opacity: toggleVisible,
  transition: '0.3s',
});

export const borderRadius = createVar();
export const styledVideo = style({
  width: '100%',
  borderRadius: borderRadius,
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
  padding: '12px 0px',
});

export const styledTitle = style({
  width: '100%',
  height: 'fit-content',
  color: vars.colors.service.MAIN_BLACK,
  fontSize: '16px',
  fontWeight: '700',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  padding: '0px 12px',
});

export const keywordsWrapper = style({
  display: 'flex',
  gap: '6px',
  width: '100%',
  height: 'fit-content',
  padding: '0px 12px',
});

export const keywordItem = style({
  fontSize: '12px',
  color: vars.colors.service.SUB_BLACK,
  lineHeight: '12px',
});

export const styledMetadata = style({
  display: 'inline-block',
  width: '50%',
  height: '20px',
  color: vars.colors.service.SUB_BLACK,
  fontSize: '14px',
  padding: '0px 12px',
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

export const skeletonResouceContentWrapper = style({
  width: '100%',
  height: '70%',
  backgroundColor: vars.colors.service.SUB_WHITE,
  borderRadius: '16px',
});

export const skeletonResouce = style({
  width: '100%',
  height: '70%',
  maxHeight: '70%',
  backgroundColor: vars.colors.service.SUB_WHITE,
  borderRadius: '16px',
});

export const height = createVar();
export const skeletonArticle = style({
  width: '100%',
  height: height,
  backgroundColor: vars.colors.service.SUB_WHITE,
});
