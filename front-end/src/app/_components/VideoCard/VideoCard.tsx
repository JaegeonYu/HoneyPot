import React, { useEffect, useRef, useState } from 'react';
import * as S from './VideoCard.css';
import * as T from '@/types';
import Image from 'next/image';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import { useDateFormat } from '@/_customhooks';

export default function VideoCard({ videoName, creatAt, hits, videoUrl, imageUrl, keywords }: T.VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const thumbnailRef = useRef<HTMLImageElement>(null);
  const updateDate = useDateFormat({ date: creatAt, isFullYear: false });

  const [isHover, setIsHover] = useState(false);
  const [windowDefined, setWindowDefined] = useState(false);

  useEffect(() => {
    if (typeof window !== undefined) setWindowDefined(true);
  }, []);

  const handleThumbnailMouseOver = (toggle: boolean) => {
    if (videoRef.current && toggle) {
      videoRef.current.play();
    } else if (videoRef.current && !toggle) {
      videoRef.current.pause();
    }
    setIsHover(toggle);
  };

  return (
    <li className={S.wrapper}>
      <div
        className={windowDefined ? S.resouceContentWrapper : S.skeletonResouce}
        suppressHydrationWarning
        onMouseOver={() => handleThumbnailMouseOver(true)}
        onMouseLeave={() => handleThumbnailMouseOver(false)}
      >
        {windowDefined && (
          <>
            <Image
              ref={thumbnailRef}
              fill
              sizes="100%"
              src={imageUrl}
              alt={imageUrl}
              className={S.styledThumbnail}
              style={assignInlineVars({ [S.toggleVisible]: isHover ? '0' : '0.99' })}
            />
            <video
              ref={videoRef}
              muted={true}
              // controls={isHover}
              autoPlay={isHover}
              className={S.styledVideo}
              style={assignInlineVars({ [S.toggleVisible]: isHover ? '0.99' : '0' })}
            >
              <source src={videoUrl} type="video/mp4" />
            </video>
          </>
        )}
      </div>
      <article className={S.textContentWrapper}>
        <p
          className={windowDefined ? S.styledTitle : S.skeletonArticle}
          style={assignInlineVars({ [S.height]: '24px' })}
        >
          {windowDefined && videoName}
        </p>
        <div
          className={windowDefined ? S.keywordsWrapper : S.skeletonArticle}
          style={assignInlineVars({ [S.height]: '12px' })}
        >
          {windowDefined &&
            keywords.map((keyword, i) => (
              <p className={S.keywordItem} key={`${videoName}-keyword-${i}`}>
                #{keyword}
              </p>
            ))}
        </div>
        <p
          className={windowDefined ? S.styledMetadata : S.skeletonArticle}
          style={assignInlineVars({ [S.height]: '20px' })}
        >
          {windowDefined && `${updateDate} • ${hits} 조회`}
        </p>
      </article>
      {/* <div className={S.durationContainer} style={assignInlineVars({ [S.toggleVisible]: isHover ? '0' : '0.99' })}>
        {duration}
      </div> */}
    </li>
  );
}
