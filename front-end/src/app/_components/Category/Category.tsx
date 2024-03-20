import React from 'react';
import * as S from './Category.css';
import * as T from '@/types';
import * as A from '@/_assets/category';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import { CATEGORY_LIST } from '@/_constants';
import { vars } from '@/globalTheme.css';

/**
 * @param categoryId
 * 가져올 카테고리 아이콘의 index를 넣으면 됨. [type: number | string]
 *
 * @param dynamicColorMode
 * default 또는 hover, focus 시 색상을 변경할 것인가? [type: boolean]
 *
 * @param iconWidth
 * 너비를 설정할 수 있음. 필수적으로 뒤에 px을 붙여야 함. [type: string]
 * (ex. 20px)
 *
 * @param iconHeight
 * 높이를 설정할 수 있음. 필수적으로 뒤에 px을 붙여야 함. [type: string]
 * (ex. 24px)
 *
 * @param fontSize
 *
 * @description
 */

export default function Category({ categoryId, dynamicColorMode, iconWidth, iconHeight, fontSize }: T.CategoryProps) {
  const svgList = [
    <A.Category0
      key={`category-${0}`}
      className={S.styledSvg}
      style={assignInlineVars({
        [S.defaultColor]: dynamicColorMode ? vars.colors.service.SUB_BLACK : vars.colors.service.MAIN_BLACK,
        [S.hoverColor]: dynamicColorMode ? vars.colors.service.MAIN_BLACK : vars.colors.service.MAIN_BLACK,
        [S.focusColor]: dynamicColorMode ? vars.colors.service.MAIN_BLACK : vars.colors.service.MAIN_BLACK,
        [S.widthProps]: iconWidth,
        [S.heightProps]: iconHeight,
      })}
    />,
    <A.Category1
      key={`category-${1}`}
      className={S.styledSvg}
      style={assignInlineVars({
        [S.defaultColor]: dynamicColorMode ? vars.colors.service.SUB_BLACK : vars.colors.service.MAIN_BLACK,
        [S.hoverColor]: dynamicColorMode ? vars.colors.service.MAIN_BLACK : vars.colors.service.MAIN_BLACK,
        [S.focusColor]: dynamicColorMode ? vars.colors.service.MAIN_BLACK : vars.colors.service.MAIN_BLACK,
        [S.widthProps]: iconWidth,
        [S.heightProps]: iconHeight,
      })}
    />,
    <A.Category2
      key={`category-${2}`}
      className={S.styledSvg}
      style={assignInlineVars({
        [S.defaultColor]: dynamicColorMode ? vars.colors.service.SUB_BLACK : vars.colors.service.MAIN_BLACK,
        [S.hoverColor]: dynamicColorMode ? vars.colors.service.MAIN_BLACK : vars.colors.service.MAIN_BLACK,
        [S.focusColor]: dynamicColorMode ? vars.colors.service.MAIN_BLACK : vars.colors.service.MAIN_BLACK,
        [S.widthProps]: iconWidth,
        [S.heightProps]: iconHeight,
      })}
    />,
    <A.Category3
      key={`category-${3}`}
      className={S.styledSvg}
      style={assignInlineVars({
        [S.defaultColor]: dynamicColorMode ? vars.colors.service.SUB_BLACK : vars.colors.service.MAIN_BLACK,
        [S.hoverColor]: dynamicColorMode ? vars.colors.service.MAIN_BLACK : vars.colors.service.MAIN_BLACK,
        [S.focusColor]: dynamicColorMode ? vars.colors.service.MAIN_BLACK : vars.colors.service.MAIN_BLACK,
        [S.widthProps]: iconWidth,
        [S.heightProps]: iconHeight,
      })}
    />,
    <A.Category4
      key={`category-${4}`}
      className={S.styledSvg}
      style={assignInlineVars({
        [S.defaultColor]: dynamicColorMode ? vars.colors.service.SUB_BLACK : vars.colors.service.MAIN_BLACK,
        [S.hoverColor]: dynamicColorMode ? vars.colors.service.MAIN_BLACK : vars.colors.service.MAIN_BLACK,
        [S.focusColor]: dynamicColorMode ? vars.colors.service.MAIN_BLACK : vars.colors.service.MAIN_BLACK,
        [S.widthProps]: iconWidth,
        [S.heightProps]: iconHeight,
      })}
    />,
    <A.Category5
      key={`category-${5}`}
      className={S.styledSvg}
      style={assignInlineVars({
        [S.defaultColor]: dynamicColorMode ? vars.colors.service.SUB_BLACK : vars.colors.service.MAIN_BLACK,
        [S.hoverColor]: dynamicColorMode ? vars.colors.service.MAIN_BLACK : vars.colors.service.MAIN_BLACK,
        [S.focusColor]: dynamicColorMode ? vars.colors.service.MAIN_BLACK : vars.colors.service.MAIN_BLACK,
        [S.widthProps]: iconWidth,
        [S.heightProps]: iconHeight,
      })}
    />,
    <A.Category6
      key={`category-${6}`}
      className={S.styledSvg}
      style={assignInlineVars({
        [S.defaultColor]: dynamicColorMode ? vars.colors.service.SUB_BLACK : vars.colors.service.MAIN_BLACK,
        [S.hoverColor]: dynamicColorMode ? vars.colors.service.MAIN_BLACK : vars.colors.service.MAIN_BLACK,
        [S.focusColor]: dynamicColorMode ? vars.colors.service.MAIN_BLACK : vars.colors.service.MAIN_BLACK,
        [S.widthProps]: iconWidth,
        [S.heightProps]: iconHeight,
      })}
    />,
    <A.Category7
      key={`category-${7}`}
      className={S.styledSvg}
      style={assignInlineVars({
        [S.defaultColor]: dynamicColorMode ? vars.colors.service.SUB_BLACK : vars.colors.service.MAIN_BLACK,
        [S.hoverColor]: dynamicColorMode ? vars.colors.service.MAIN_BLACK : vars.colors.service.MAIN_BLACK,
        [S.focusColor]: dynamicColorMode ? vars.colors.service.MAIN_BLACK : vars.colors.service.MAIN_BLACK,
        [S.widthProps]: iconWidth,
        [S.heightProps]: iconHeight,
      })}
    />,
    <A.Category8
      key={`category-${8}`}
      className={S.styledSvg}
      style={assignInlineVars({
        [S.defaultColor]: dynamicColorMode ? vars.colors.service.SUB_BLACK : vars.colors.service.MAIN_BLACK,
        [S.hoverColor]: dynamicColorMode ? vars.colors.service.MAIN_BLACK : vars.colors.service.MAIN_BLACK,
        [S.focusColor]: dynamicColorMode ? vars.colors.service.MAIN_BLACK : vars.colors.service.MAIN_BLACK,
        [S.widthProps]: iconWidth,
        [S.heightProps]: iconHeight,
      })}
    />,
    <A.Category9
      key={`category-${9}`}
      className={S.styledSvg}
      style={assignInlineVars({
        [S.defaultColor]: dynamicColorMode ? vars.colors.service.SUB_BLACK : vars.colors.service.MAIN_BLACK,
        [S.hoverColor]: dynamicColorMode ? vars.colors.service.MAIN_BLACK : vars.colors.service.MAIN_BLACK,
        [S.focusColor]: dynamicColorMode ? vars.colors.service.MAIN_BLACK : vars.colors.service.MAIN_BLACK,
        [S.widthProps]: iconWidth,
        [S.heightProps]: iconHeight,
      })}
    />,
    <A.Category10
      key={`category-${10}`}
      className={S.styledSvg}
      style={assignInlineVars({
        [S.defaultColor]: dynamicColorMode ? vars.colors.service.SUB_BLACK : vars.colors.service.MAIN_BLACK,
        [S.hoverColor]: dynamicColorMode ? vars.colors.service.MAIN_BLACK : vars.colors.service.MAIN_BLACK,
        [S.focusColor]: dynamicColorMode ? vars.colors.service.MAIN_BLACK : vars.colors.service.MAIN_BLACK,
        [S.widthProps]: iconWidth,
        [S.heightProps]: iconHeight,
      })}
    />,
    <A.Category11
      key={`category-${11}`}
      className={S.styledSvg}
      style={assignInlineVars({
        [S.defaultColor]: dynamicColorMode ? vars.colors.service.SUB_BLACK : vars.colors.service.MAIN_BLACK,
        [S.hoverColor]: dynamicColorMode ? vars.colors.service.MAIN_BLACK : vars.colors.service.MAIN_BLACK,
        [S.focusColor]: dynamicColorMode ? vars.colors.service.MAIN_BLACK : vars.colors.service.MAIN_BLACK,
        [S.widthProps]: iconWidth,
        [S.heightProps]: iconHeight,
      })}
    />,
    <A.Category12
      key={`category-${12}`}
      className={S.styledSvg}
      style={assignInlineVars({
        [S.defaultColor]: dynamicColorMode ? vars.colors.service.SUB_BLACK : vars.colors.service.MAIN_BLACK,
        [S.hoverColor]: dynamicColorMode ? vars.colors.service.MAIN_BLACK : vars.colors.service.MAIN_BLACK,
        [S.focusColor]: dynamicColorMode ? vars.colors.service.MAIN_BLACK : vars.colors.service.MAIN_BLACK,
        [S.widthProps]: iconWidth,
        [S.heightProps]: iconHeight,
      })}
    />,
    <A.Category13
      key={`category-${13}`}
      className={S.styledSvg}
      style={assignInlineVars({
        [S.defaultColor]: dynamicColorMode ? vars.colors.service.SUB_BLACK : vars.colors.service.MAIN_BLACK,
        [S.hoverColor]: dynamicColorMode ? vars.colors.service.MAIN_BLACK : vars.colors.service.MAIN_BLACK,
        [S.focusColor]: dynamicColorMode ? vars.colors.service.MAIN_BLACK : vars.colors.service.MAIN_BLACK,
        [S.widthProps]: iconWidth,
        [S.heightProps]: iconHeight,
      })}
    />,
    <A.Category14
      key={`category-${14}`}
      className={S.styledSvg}
      style={assignInlineVars({
        [S.defaultColor]: dynamicColorMode ? vars.colors.service.SUB_BLACK : vars.colors.service.MAIN_BLACK,
        [S.hoverColor]: dynamicColorMode ? vars.colors.service.MAIN_BLACK : vars.colors.service.MAIN_BLACK,
        [S.focusColor]: dynamicColorMode ? vars.colors.service.MAIN_BLACK : vars.colors.service.MAIN_BLACK,
        [S.widthProps]: iconWidth,
        [S.heightProps]: iconHeight,
      })}
    />,
    <A.Category15
      key={`category-${15}`}
      className={S.styledSvg}
      style={assignInlineVars({
        [S.defaultColor]: dynamicColorMode ? vars.colors.service.SUB_BLACK : vars.colors.service.MAIN_BLACK,
        [S.hoverColor]: dynamicColorMode ? vars.colors.service.MAIN_BLACK : vars.colors.service.MAIN_BLACK,
        [S.focusColor]: dynamicColorMode ? vars.colors.service.MAIN_BLACK : vars.colors.service.MAIN_BLACK,
        [S.widthProps]: iconWidth,
        [S.heightProps]: iconHeight,
      })}
    />,
    <A.Category16
      key={`category-${16}`}
      className={S.styledSvg}
      style={assignInlineVars({
        [S.defaultColor]: dynamicColorMode ? vars.colors.service.SUB_BLACK : vars.colors.service.MAIN_BLACK,
        [S.hoverColor]: dynamicColorMode ? vars.colors.service.MAIN_BLACK : vars.colors.service.MAIN_BLACK,
        [S.focusColor]: dynamicColorMode ? vars.colors.service.MAIN_BLACK : vars.colors.service.MAIN_BLACK,
        [S.widthProps]: iconWidth,
        [S.heightProps]: iconHeight,
      })}
    />,
    <A.Category17
      key={`category-${17}`}
      className={S.styledSvg}
      style={assignInlineVars({
        [S.defaultColor]: dynamicColorMode ? vars.colors.service.SUB_BLACK : vars.colors.service.MAIN_BLACK,
        [S.hoverColor]: dynamicColorMode ? vars.colors.service.MAIN_BLACK : vars.colors.service.MAIN_BLACK,
        [S.focusColor]: dynamicColorMode ? vars.colors.service.MAIN_BLACK : vars.colors.service.MAIN_BLACK,
        [S.widthProps]: iconWidth,
        [S.heightProps]: iconHeight,
      })}
    />,
  ];
  return (
    <>
      {CATEGORY_LIST.map((category, i: number) => {
        if (categoryId === i)
          return (
            <button
              key={`category-list-${i}`}
              className={S.svgWrapper}
              style={assignInlineVars({ [S.cursor]: dynamicColorMode ? 'pointer' : 'default' })}
            >
              {svgList[i]}
              <span
                className={S.categoryName}
                style={assignInlineVars({
                  [S.defaultColor]: dynamicColorMode ? vars.colors.service.SUB_BLACK : vars.colors.service.MAIN_BLACK,
                  [S.hoverColor]: dynamicColorMode ? vars.colors.service.MAIN_BLACK : vars.colors.service.MAIN_BLACK,
                  [S.focusColor]: dynamicColorMode ? vars.colors.service.MAIN_BLACK : vars.colors.service.MAIN_BLACK,
                  [S.hoverBorder]: dynamicColorMode ? vars.colors.service.SUB_BLACK : vars.colors.service.MAIN_WHITE,
                  [S.focusBorder]: dynamicColorMode ? vars.colors.service.MAIN_BLACK : vars.colors.service.MAIN_WHITE,
                  [S.fontSize]: fontSize,
                })}
              >
                {category.name}
              </span>
            </button>
          );
      })}
    </>
  );
}
