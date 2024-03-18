import React from 'react';
import * as S from './Category.css';
import * as T from '@/types';
import * as A from '@/_assets/category';
import { assignInlineVars } from '@vanilla-extract/dynamic';

/**
 * @param categoryId
 * 가져올 카테고리 아이콘의 index를 넣으면 됨. [type: number | string]
 *
 * @param color
 * default 또는 hover, focus 시 색상을 설정해줄 수 있음. [type: { default: string; hover: string; focus: string }]
 *
 * @param width
 * 너비를 설정할 수 있음. 필수적으로 뒤에 px을 붙여야 함. [type: string]
 * (ex. 20px)
 *
 * @param height
 * 높이를 설정할 수 있음. 필수적으로 뒤에 px을 붙여야 함. [type: string]
 * (ex. 24px)
 *
 * @description
 */

export default function Category({ categoryId, color, width, height }: T.CategoryProps) {
  const svgList = [
    <A.Category0
      key={`category-${0}`}
      className={S.styledSvg}
      style={assignInlineVars({
        [S.defaultColor]: color.default,
        [S.hoverColor]: color.hover,
        [S.focusColor]: color.focus,
      })}
    />,
    <A.Category1
      key={`category-${1}`}
      className={S.styledSvg}
      style={assignInlineVars({
        [S.defaultColor]: color.default,
        [S.hoverColor]: color.hover,
        [S.focusColor]: color.focus,
      })}
    />,
    <A.Category2
      key={`category-${2}`}
      className={S.styledSvg}
      style={assignInlineVars({
        [S.defaultColor]: color.default,
        [S.hoverColor]: color.hover,
        [S.focusColor]: color.focus,
      })}
    />,
    <A.Category3
      key={`category-${3}`}
      className={S.styledSvg}
      style={assignInlineVars({
        [S.defaultColor]: color.default,
        [S.hoverColor]: color.hover,
        [S.focusColor]: color.focus,
      })}
    />,
    <A.Category4
      key={`category-${4}`}
      className={S.styledSvg}
      style={assignInlineVars({
        [S.defaultColor]: color.default,
        [S.hoverColor]: color.hover,
        [S.focusColor]: color.focus,
      })}
    />,
    <A.Category5
      key={`category-${5}`}
      className={S.styledSvg}
      style={assignInlineVars({
        [S.defaultColor]: color.default,
        [S.hoverColor]: color.hover,
        [S.focusColor]: color.focus,
      })}
    />,
    <A.Category6
      key={`category-${6}`}
      className={S.styledSvg}
      style={assignInlineVars({
        [S.defaultColor]: color.default,
        [S.hoverColor]: color.hover,
        [S.focusColor]: color.focus,
      })}
    />,
    <A.Category7
      key={`category-${7}`}
      className={S.styledSvg}
      style={assignInlineVars({
        [S.defaultColor]: color.default,
        [S.hoverColor]: color.hover,
        [S.focusColor]: color.focus,
      })}
    />,
    <A.Category8
      key={`category-${8}`}
      className={S.styledSvg}
      style={assignInlineVars({
        [S.defaultColor]: color.default,
        [S.hoverColor]: color.hover,
        [S.focusColor]: color.focus,
      })}
    />,
    <A.Category9
      key={`category-${9}`}
      className={S.styledSvg}
      style={assignInlineVars({
        [S.defaultColor]: color.default,
        [S.hoverColor]: color.hover,
        [S.focusColor]: color.focus,
      })}
    />,
    <A.Category10
      key={`category-${10}`}
      className={S.styledSvg}
      style={assignInlineVars({
        [S.defaultColor]: color.default,
        [S.hoverColor]: color.hover,
        [S.focusColor]: color.focus,
      })}
    />,
    <A.Category11
      key={`category-${11}`}
      className={S.styledSvg}
      style={assignInlineVars({
        [S.defaultColor]: color.default,
        [S.hoverColor]: color.hover,
        [S.focusColor]: color.focus,
      })}
    />,
    <A.Category12
      key={`category-${12}`}
      className={S.styledSvg}
      style={assignInlineVars({
        [S.defaultColor]: color.default,
        [S.hoverColor]: color.hover,
        [S.focusColor]: color.focus,
      })}
    />,
    <A.Category13
      key={`category-${13}`}
      className={S.styledSvg}
      style={assignInlineVars({
        [S.defaultColor]: color.default,
        [S.hoverColor]: color.hover,
        [S.focusColor]: color.focus,
      })}
    />,
    <A.Category14
      key={`category-${14}`}
      className={S.styledSvg}
      style={assignInlineVars({
        [S.defaultColor]: color.default,
        [S.hoverColor]: color.hover,
        [S.focusColor]: color.focus,
      })}
    />,
    <A.Category15
      key={`category-${15}`}
      className={S.styledSvg}
      style={assignInlineVars({
        [S.defaultColor]: color.default,
        [S.hoverColor]: color.hover,
        [S.focusColor]: color.focus,
      })}
    />,
    <A.Category16
      key={`category-${16}`}
      className={S.styledSvg}
      style={assignInlineVars({
        [S.defaultColor]: color.default,
        [S.hoverColor]: color.hover,
        [S.focusColor]: color.focus,
      })}
    />,
    <A.Category17
      key={`category-${17}`}
      className={S.styledSvg}
      style={assignInlineVars({
        [S.defaultColor]: color.default,
        [S.hoverColor]: color.hover,
        [S.focusColor]: color.focus,
      })}
    />,
  ];
  return (
    <button className={S.svgWrapper} style={assignInlineVars({ [S.widthProps]: width, [S.heightProps]: height })}>
      {svgList.map((category, i: number) => categoryId === i && category)}
    </button>
  );
}
