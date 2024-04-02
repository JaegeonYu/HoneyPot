import React, { useRef, useState } from 'react';
import * as S from './DetailModal.css';
import * as T from '@/types';
import * as API from '@/apis';
import * as Icon from '@/_assets/icon';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { assignInlineVars } from '@vanilla-extract/dynamic';

interface DetailModalProps extends T.Candidate {
  viewHandler: () => void;
}

export default function DetailModal({
  hgname,
  jdName,
  sdName,
  age,
  birthday,
  candidateImgUrl,
  career1,
  career2,
  edu,
  wiwName,
  sggName,
  giho,
  viewHandler,
}: DetailModalProps) {
  const searchParams = useSearchParams();
  const pdfWindowRef = useRef<HTMLDivElement>(null);
  const pdfsContainerRef = useRef<HTMLDivElement>(null);
  const [currentIdx, setCurrentIdx] = useState(0);

  const { data: candianteDetailResponse, isFetched: candianteDetailFetched } = useQuery({
    queryKey: [{ candianteDetail: `detail-${Number(searchParams.get('detail'))}` }],
    queryFn: () => API.cantidate.getCandidateDetail({ id: Number(searchParams.get('detail')) }),
    retry: false,
  });

  const handleCarouselIdx = (dir: 'L' | 'R') => {
    if (pdfWindowRef.current && pdfsContainerRef.current) {
      const movingSize = pdfWindowRef.current.offsetWidth;
      const limitSize = pdfsContainerRef.current.offsetWidth;

      if (dir === 'L' && movingSize * (currentIdx - 1) >= 0) {
        setCurrentIdx(prev => prev - 1);
      } else if (dir === 'R' && movingSize * (currentIdx + 1) < limitSize) {
        setCurrentIdx(prev => prev + 1);
      }
    }
  };
  console.log(`currentIdx :`, currentIdx);

  return (
    <>
      <div className={S.overlay} onClick={viewHandler} />
      <div className={S.wrapper}>
        <section className={S.pdfSection}>
          <h4 className={S.headingTitle}>후보자 공약 자료</h4>
          {candianteDetailResponse ? (
            <>
              <div className={S.pledgePdfWindow} ref={pdfWindowRef}>
                <div
                  className={S.pledgePdfContainer}
                  ref={pdfsContainerRef}
                  style={assignInlineVars({
                    [S.translateX]: `translateX(-${
                      pdfWindowRef.current?.offsetWidth && pdfWindowRef.current?.offsetWidth * currentIdx
                    }px)`,
                  })}
                >
                  {candianteDetailResponse?.data.imageList.map((img: string, i: number) => (
                    <Image
                      className={S.pledgePdfItem}
                      alt={`${hgname} 공약집`}
                      width={100}
                      height={100}
                      key={i}
                      src={`data:image/png;base64,${img}`}
                    />
                  ))}
                </div>
              </div>
              <Icon.ArrowBlack
                className={S.toLeftIcon}
                onClick={() => handleCarouselIdx('L')}
                onTouchStart={() => handleCarouselIdx('L')}
              />
              <Icon.ArrowBlack
                className={S.toRightIcon}
                onClick={() => handleCarouselIdx('R')}
                onTouchStart={() => handleCarouselIdx('R')}
              />
            </>
          ) : (
            <section className={S.skeletonCarousel} />
          )}
        </section>
      </div>
    </>
  );
}
