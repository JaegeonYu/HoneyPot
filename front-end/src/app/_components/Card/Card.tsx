import React from 'react';
import * as S from './Card.css';
import * as T from '@/types';
import Image from 'next/image';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import Badge from '../Badge/Badge';

/**
 * @param children
 * Card 하단에 들어갈 텍스트 컨텐츠 [type: React.ReactNode]
 *
 * @param imgUrl
 * Card 상단에 들어갈 이미지 경로 [type: string]
 *
 * @param aspectRatio
 * Card의 크기 비율을 설정할 수 있음 [type: string]
 * (ex. 정당 리스트 페이지: 1 / 1, 의원 리스트 페이지: 4 / 5)
 *
 * @description
 * 정당 카드로 즉, aspectRatio를 '1 / 1'로 설정할 경우 하단에 사용 가능한 height는 30%
 * 의원 카드로 즉, aspectRatio를 '4 / 5'로 설정할 경우 하단에 사용 가능한 height는 20%
 */
export default function Card({ ratio, imgUrl, children }: T.CardProps) {
  return (
    <div className={S.wrapper} style={assignInlineVars({ [S.aspectRatioProps]: ratio })}>
      <Image
        className={S.styledImage}
        style={assignInlineVars({ [S.imgHeight]: ratio === '4/5' || ratio === '4 / 5' ? '80%' : '70%' })}
        // src={imgUrl}
        src={'/DUMMY_kim-tae-ho-profile.png'}
        width={100}
        height={100}
        alt={imgUrl}
      />
      <Badge isPositionAbsolute={true} color={'red'}>
        {'???????'}
      </Badge>
      {children}
    </div>
  );
}
