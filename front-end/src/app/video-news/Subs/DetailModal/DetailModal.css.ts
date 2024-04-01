import { vars } from '@/globalTheme.css';
import { createVar, style } from '@vanilla-extract/css';

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
  overflowX: 'hidden',
  overflowY: 'auto',
});

export const container = style({
  height: 'fit-content',
  // TODO : 일정구간 이후에 height 100% 반응형 추가
});

export const videoContainer = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxHeight: '600px',
  position: 'relative',
});

export const video = style({
  width: '100%',
  aspectRatio: '2 / 1',
  maxHeight: '600px',
  backgroundColor: vars.colors.service.MAIN_BLACK,
});

export const videoControllersWrapper = style({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  height: '42px',
  position: 'absolute',
  bottom: '0px',
  left: '0px',
  padding: '0px 12px',
});

export const controllersContainer = style({
  display: 'flex',
  width: 'fit-content',
});

export const videoTimeWrapper = style({
  display: 'flex',
  alignItems: 'center',
});

export const videoTime = style({
  color: vars.colors.service.MAIN_WHITE,
});

export const articlesWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  width: '100%',
  height: '30%',
  padding: '12px 12px 12px 12px',
});

export const articleTopSection = style({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  height: '42px',
});

export const justifyContent = createVar();
export const textsColumWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: justifyContent,
});

export const title = style({
  fontWeight: 700,
});

export const keywordsWrapper = style({
  display: 'flex',
  gap: '6px',
  width: '100%',
  height: 'fit-content',
});

export const keywordItem = style({
  fontSize: '14px',
  lineHeight: '14px',
  color: vars.colors.service.SUB_BLACK,
});

export const metaDataItem = style({
  fontSize: '16px',
  lineHeight: '16px',
  textAlign: 'right',
  color: vars.colors.service.SUB_BLACK,
});

export const summaryContainer = style({
  width: '100%',
  height: 'calc(100% - 42px - 12px)',
  minHeight: 'fit-content',
  padding: '12px',
  borderRadius: '12px',
  backgroundColor: vars.colors.service.HOVER_BACKGROUND,
});
