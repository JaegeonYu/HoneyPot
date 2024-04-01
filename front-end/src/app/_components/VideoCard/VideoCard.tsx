import React, { useEffect, useRef, useState } from 'react';
import * as S from './VideoCard.css';
import * as T from '@/types';
import * as Comp from '@/components';
import Image from 'next/image';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import { useDateFormat } from '@/_customhooks';

export default function VideoCard({
  videoName,
  creatAt,
  hits,
  videoUrl,
  imageUrl,
  keywords,
  id,
  videoTime,
  onClick,
}: T.VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const thumbnailRef = useRef<HTMLImageElement>(null);
  const fullProgressRef = useRef<HTMLDivElement>(null);

  const updateDate = useDateFormat({ date: creatAt, isFullYear: false });

  const [isHover, setIsHover] = useState(false);
  const [isLoad, setIsLoad] = useState({ window: false, video: false, img: false });
  const [currentVideo, setCurrentVideo] = useState({ time: 0, progress: 0 });
  const [throttle, setThrottle] = useState(false);

  useEffect(() => {
    if (typeof window !== undefined) setIsLoad(prev => ({ ...prev, window: true }));
  }, []);

  const handleThumbnailMouseOver = (toggle: boolean) => {
    if (isLoad.img && videoRef.current && toggle) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.then(res => res).catch(err => console.log(`err :`, err));
      }
    } else if (videoRef.current && !toggle) {
      videoRef.current.pause();
    }
    setIsHover(toggle);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener('canplay', e => {
        setIsLoad(prev => ({ ...prev, video: true }));
      });
    }
    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener('canplay', e => {
          setIsLoad(prev => ({ ...prev, video: true }));
        });
      }
    };
  }, [isLoad.img, isLoad.window]);

  const calcCurrentTimePercent = () => {
    if (throttle) return;
    if (!throttle) {
      setThrottle(true);
      setTimeout(() => {
        if (videoRef.current) {
          const time = videoRef.current?.currentTime;
          const progress = (videoRef.current?.currentTime / videoRef.current?.duration) * 100;

          setCurrentVideo(prev => ({ ...prev, time, progress }));
          setThrottle(false);
        }
      }, 10);
    }
  };

  const handleScrubPosition = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (fullProgressRef.current && videoRef.current) {
      const scrubTime = (e.nativeEvent.offsetX / fullProgressRef.current.offsetWidth) * videoRef.current.duration;
      videoRef.current.currentTime = scrubTime;
    }
  };

  return (
    <li className={S.wrapper} onClick={onClick}>
      <div
        className={isLoad.img ? S.resouceContentWrapper : S.skeletonResouceContentWrapper}
        onMouseOver={() => handleThumbnailMouseOver(true)}
        onMouseLeave={() => handleThumbnailMouseOver(false)}
      >
        {isLoad.window && (
          <>
            <Image
              ref={thumbnailRef}
              fill
              sizes="100%"
              loading="eager"
              src={imageUrl}
              alt={videoName}
              className={isLoad.img ? S.styledThumbnail : S.skeletonResouce}
              style={assignInlineVars({ [S.toggleVisible]: isHover ? '0' : '0.99' })}
              onLoad={() => setIsLoad(prev => ({ ...prev, img: true }))}
            />
            <video
              ref={videoRef}
              muted={true}
              src={videoUrl}
              className={isLoad.video ? S.styledVideo : S.skeletonResouce}
              style={assignInlineVars({
                [S.toggleVisible]: isHover ? '0.99' : '0',
                [S.borderRadius]: isHover ? '16px 16px 0px 0px' : '16px',
              })}
              onTimeUpdate={calcCurrentTimePercent}
            />
            <Comp.Controller.ProgressBar
              isHover={isHover}
              position="bottom"
              currentTime={currentVideo.progress}
              onScrubPostionHandler={handleScrubPosition}
              ref={fullProgressRef}
            />
          </>
        )}
      </div>
      <article className={S.textContentWrapper}>
        <div>
          <h3
            className={isLoad.img ? S.styledTitle : S.skeletonArticle}
            style={assignInlineVars({ [S.height]: '24px' })}
          >
            {isLoad.img && videoName}
          </h3>
          <div
            className={isLoad.img ? S.keywordsWrapper : S.skeletonArticle}
            style={assignInlineVars({ [S.height]: '12px' })}
          >
            {isLoad.img &&
              keywords.map((keyword, i) => (
                <p className={S.keywordItem} key={`${videoName}-keyword-${keyword.id}`}>
                  #{keyword.keyword}
                </p>
              ))}
          </div>
        </div>
        <p
          className={isLoad.img ? S.styledMetadata : S.skeletonArticle}
          style={assignInlineVars({ [S.height]: '20px' })}
        >
          {isLoad.img && `${updateDate} • ${hits} 조회`}
        </p>
      </article>
      <div className={S.durationContainer} style={assignInlineVars({ [S.toggleVisible]: isHover ? '0' : '0.99' })}>
        {videoTime}
      </div>
    </li>
  );
}
