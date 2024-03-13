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
 * default 또는 hover 시 색상을 설정해줄 수 있음. [type: { defaultColor: string; hoverColor: string }]
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
  const { defaultColor, hoverColor } = color;
  const svgList = [
    <A.Category0
      key={`category-${0}`}
      className={S.styledSvg}
      style={assignInlineVars({ [S.defaultColor]: defaultColor, [S.hoverColor]: hoverColor })}
    />,
    <A.Category1
      key={`category-${1}`}
      className={S.styledSvg}
      style={assignInlineVars({ [S.defaultColor]: defaultColor, [S.hoverColor]: hoverColor })}
    />,
    <A.Category2
      key={`category-${2}`}
      className={S.styledSvg}
      style={assignInlineVars({ [S.defaultColor]: defaultColor, [S.hoverColor]: hoverColor })}
    />,
    <A.Category3
      key={`category-${3}`}
      className={S.styledSvg}
      style={assignInlineVars({ [S.defaultColor]: defaultColor, [S.hoverColor]: hoverColor })}
    />,
    <A.Category4
      key={`category-${4}`}
      className={S.styledSvg}
      style={assignInlineVars({ [S.defaultColor]: defaultColor, [S.hoverColor]: hoverColor })}
    />,
    <A.Category5
      key={`category-${5}`}
      className={S.styledSvg}
      style={assignInlineVars({ [S.defaultColor]: defaultColor, [S.hoverColor]: hoverColor })}
    />,
    <A.Category6
      key={`category-${6}`}
      className={S.styledSvg}
      style={assignInlineVars({ [S.defaultColor]: defaultColor, [S.hoverColor]: hoverColor })}
    />,
    <A.Category7
      key={`category-${7}`}
      className={S.styledSvg}
      style={assignInlineVars({ [S.defaultColor]: defaultColor, [S.hoverColor]: hoverColor })}
    />,
    <A.Category8
      key={`category-${8}`}
      className={S.styledSvg}
      style={assignInlineVars({ [S.defaultColor]: defaultColor, [S.hoverColor]: hoverColor })}
    />,
    <A.Category9
      key={`category-${9}`}
      className={S.styledSvg}
      style={assignInlineVars({ [S.defaultColor]: defaultColor, [S.hoverColor]: hoverColor })}
    />,
    <A.Category10
      key={`category-${10}`}
      className={S.styledSvg}
      style={assignInlineVars({ [S.defaultColor]: defaultColor, [S.hoverColor]: hoverColor })}
    />,
    <A.Category11
      key={`category-${11}`}
      className={S.styledSvg}
      style={assignInlineVars({ [S.defaultColor]: defaultColor, [S.hoverColor]: hoverColor })}
    />,
    <A.Category12
      key={`category-${12}`}
      className={S.styledSvg}
      style={assignInlineVars({ [S.defaultColor]: defaultColor, [S.hoverColor]: hoverColor })}
    />,
    <A.Category13
      key={`category-${13}`}
      className={S.styledSvg}
      style={assignInlineVars({ [S.defaultColor]: defaultColor, [S.hoverColor]: hoverColor })}
    />,
    <A.Category14
      key={`category-${14}`}
      className={S.styledSvg}
      style={assignInlineVars({ [S.defaultColor]: defaultColor, [S.hoverColor]: hoverColor })}
    />,
    <A.Category15
      key={`category-${15}`}
      className={S.styledSvg}
      style={assignInlineVars({ [S.defaultColor]: defaultColor, [S.hoverColor]: hoverColor })}
    />,
    <A.Category16
      key={`category-${16}`}
      className={S.styledSvg}
      style={assignInlineVars({ [S.defaultColor]: defaultColor, [S.hoverColor]: hoverColor })}
    />,
    <A.Category17
      key={`category-${17}`}
      className={S.styledSvg}
      style={assignInlineVars({ [S.defaultColor]: defaultColor, [S.hoverColor]: hoverColor })}
    />,
  ];
  return (
    <div className={S.svgWrapper} style={assignInlineVars({ [S.widthProps]: width, [S.heightProps]: height })}>
      {svgList.map((category, i: number) => categoryId === i && category)}
    </div>
  );
}
