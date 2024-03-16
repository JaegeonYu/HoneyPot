import React, { useRef, useState } from 'react';
import * as S from './VideoCard.css';
import * as T from '@/types';
import Image from 'next/image';
import { assignInlineVars } from '@vanilla-extract/dynamic';

export default function VideoCard({ title, duration, uploadTime, views, videoUrl, thumbnailUrl }: T.VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const thumbnailRef = useRef<HTMLImageElement>(null);
  const [isHover, setIsHover] = useState(false);

  const handleThumbnailMouseOver = (toggle: boolean) => {
    if (videoRef.current && toggle) {
      videoRef.current.play();
    } else if (videoRef.current && !toggle) {
      videoRef.current.pause();
    }
    setIsHover(toggle);
  };

  return (
    <li
      className={S.wrapper}
      onMouseOver={() => handleThumbnailMouseOver(true)}
      onMouseLeave={() => handleThumbnailMouseOver(false)}
    >
      <div className={S.resouceContentWrapper}>
        <Image
          ref={thumbnailRef}
          fill
          sizes="100%"
          src={'/DUMMY_kim-tae-ho-profile.png'}
          alt={thumbnailUrl}
          className={S.styledThumbnail}
          style={assignInlineVars({ [S.toggleVisible]: isHover ? '0' : '0.99' })}
        />
        <video
          ref={videoRef}
          muted={true}
          controls={isHover}
          autoPlay={isHover}
          className={S.styledVideo}
          style={assignInlineVars({ [S.toggleVisible]: isHover ? '0.99' : '0' })}
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
      </div>
      <div className={S.textContentWrapper}>
        <p className={S.styledTitle}>{title}</p>
        <div>
          <span className={S.styledMetadata} style={assignInlineVars({ [S.textAlign]: 'left' })}>
            {uploadTime}
          </span>
          <span className={S.styledMetadata} style={assignInlineVars({ [S.textAlign]: 'right' })}>
            {views} 조회
          </span>
        </div>
      </div>
      <div className={S.durationContainer} style={assignInlineVars({ [S.toggleVisible]: isHover ? '0' : '0.99' })}>
        {duration}
      </div>
    </li>
  );
}
