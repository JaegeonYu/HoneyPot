import React from 'react';
import * as S from './Category.css';
import * as T from '@/types';
import {
  Category0,
  Category1,
  Category10,
  Category11,
  Category12,
  Category13,
  Category14,
  Category15,
  Category16,
  Category17,
  Category2,
  Category3,
  Category4,
  Category5,
  Category6,
  Category7,
  Category8,
  Category9,
} from '@/_assets/category';
import { assignInlineVars } from '@vanilla-extract/dynamic';

export default function Category({ categoryId, color, width, height }: T.CategoryProps) {
  const { defaultColor, hoverColor } = color;
  const svgList = [
    <Category0
      key={`category-${0}`}
      className={S.styledSvg}
      style={assignInlineVars({ [S.defaultColor]: defaultColor, [S.hoverColor]: hoverColor })}
    />,
    <Category1
      key={`category-${1}`}
      className={S.styledSvg}
      style={assignInlineVars({ [S.defaultColor]: defaultColor, [S.hoverColor]: hoverColor })}
    />,
    <Category2
      key={`category-${2}`}
      className={S.styledSvg}
      style={assignInlineVars({ [S.defaultColor]: defaultColor, [S.hoverColor]: hoverColor })}
    />,
    <Category3
      key={`category-${3}`}
      className={S.styledSvg}
      style={assignInlineVars({ [S.defaultColor]: defaultColor, [S.hoverColor]: hoverColor })}
    />,
    <Category4
      key={`category-${4}`}
      className={S.styledSvg}
      style={assignInlineVars({ [S.defaultColor]: defaultColor, [S.hoverColor]: hoverColor })}
    />,
    <Category5
      key={`category-${5}`}
      className={S.styledSvg}
      style={assignInlineVars({ [S.defaultColor]: defaultColor, [S.hoverColor]: hoverColor })}
    />,
    <Category6
      key={`category-${6}`}
      className={S.styledSvg}
      style={assignInlineVars({ [S.defaultColor]: defaultColor, [S.hoverColor]: hoverColor })}
    />,
    <Category7
      key={`category-${7}`}
      className={S.styledSvg}
      style={assignInlineVars({ [S.defaultColor]: defaultColor, [S.hoverColor]: hoverColor })}
    />,
    <Category8
      key={`category-${8}`}
      className={S.styledSvg}
      style={assignInlineVars({ [S.defaultColor]: defaultColor, [S.hoverColor]: hoverColor })}
    />,
    <Category9
      key={`category-${9}`}
      className={S.styledSvg}
      style={assignInlineVars({ [S.defaultColor]: defaultColor, [S.hoverColor]: hoverColor })}
    />,
    <Category10
      key={`category-${10}`}
      className={S.styledSvg}
      style={assignInlineVars({ [S.defaultColor]: defaultColor, [S.hoverColor]: hoverColor })}
    />,
    <Category11
      key={`category-${11}`}
      className={S.styledSvg}
      style={assignInlineVars({ [S.defaultColor]: defaultColor, [S.hoverColor]: hoverColor })}
    />,
    <Category12
      key={`category-${12}`}
      className={S.styledSvg}
      style={assignInlineVars({ [S.defaultColor]: defaultColor, [S.hoverColor]: hoverColor })}
    />,
    <Category13
      key={`category-${13}`}
      className={S.styledSvg}
      style={assignInlineVars({ [S.defaultColor]: defaultColor, [S.hoverColor]: hoverColor })}
    />,
    <Category14
      key={`category-${14}`}
      className={S.styledSvg}
      style={assignInlineVars({ [S.defaultColor]: defaultColor, [S.hoverColor]: hoverColor })}
    />,
    <Category15
      key={`category-${15}`}
      className={S.styledSvg}
      style={assignInlineVars({ [S.defaultColor]: defaultColor, [S.hoverColor]: hoverColor })}
    />,
    <Category16
      key={`category-${16}`}
      className={S.styledSvg}
      style={assignInlineVars({ [S.defaultColor]: defaultColor, [S.hoverColor]: hoverColor })}
    />,
    <Category17
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
