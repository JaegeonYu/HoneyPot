import React, { useEffect, useRef, useState } from 'react';
import * as S from './DetailModal.css';
import * as T from '@/types';
import * as API from '@/apis';
import * as Comp from '@/components';
import * as Icon from '@/_assets/icon';
import { useSearchParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import { useDateFormat } from '@/_customhooks';

export default function DetailModal({
  viewHandler,
  creatAt,
  hits,
  id,
  imageUrl,
  keywords,
  videoName,
  videoSummary,
  videoUrl,
  videoTime,
}: T.DetailModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const playButtonRef = useRef<HTMLButtonElement>(null);
  const fullProgressRef = useRef<HTMLDivElement>(null);

  const searchParams = useSearchParams();
  const formatDate = useDateFormat({ date: creatAt, isFullYear: false });
  const [currentVideo, setCurrentVideo] = useState({ time: 0, progress: 0 });
  const [throttle, setThrottle] = useState(false);
  const [canPlay, setCanPlay] = useState(false);

  const { data: videoDetailResponse, isFetched: videoDetailFetched } = useQuery({
    queryKey: [{ videoDetail: `detail-${Number(searchParams.get('detail'))}` }],
    queryFn: () => API.video.getVideoDetail({ id: Number(searchParams.get('detail')) }),
    retry: false,
  });

  useEffect(() => {
    if (canPlay && videoRef.current) {
      const playPromise = videoRef.current.play();
      playPromise.then().catch(err => console.log(err));
    }
  }, [canPlay]);

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
      }, 1);
    }
  };

  const handleScrubPosition = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (fullProgressRef.current && videoRef.current) {
      const scrubTime = (e.nativeEvent.offsetX / fullProgressRef.current.offsetWidth) * videoRef.current.duration;
      videoRef.current.currentTime = scrubTime;
    }
  };

  const handlePlayButton = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        const playPromise = videoRef.current.play();
        playPromise.then().catch(err => console.log(err));
      } else {
        videoRef.current.pause();
      }
      playButtonRef.current?.focus();
    }
  };

  const handleVolume = ({ rangeValue }: { rangeValue: number }) => {
    if (videoRef.current) {
      videoRef.current.volume = rangeValue;
    }
  };

  const calcVideoCurTimeAndFullTime = () => {
    const [fullHour, fullMinute, fullSec] = videoTime.split(':');
    let curMin = String(Math.floor(currentVideo.time / 60));
    let curSec = String(Math.floor(currentVideo.time % 60));

    if (curMin.length === 1) curMin = '0' + curMin;

    if (curSec.length === 1) curSec = '0' + curSec;

    return `${curMin}:${curSec} / ${fullMinute}:${fullSec}`;
  };

  return (
    <Comp.FlexableModal width="80vw" height="80vh" isOpen={true} isOpenHandler={viewHandler}>
      <section className={S.wrapper} onScroll={e => e.stopPropagation()}>
        <div className={S.container}>
          <div className={S.videoContainer}>
            <video
              className={S.video}
              src={videoUrl}
              ref={videoRef}
              onClick={handlePlayButton}
              onCanPlay={() => setCanPlay(true)}
              onTimeUpdate={calcCurrentTimePercent}
            />
            <div className={S.videoControllersWrapper}>
              <div className={S.controllersContainer}>
                <Comp.Controller.ProgressBar
                  isHover={true}
                  ref={fullProgressRef}
                  currentTime={currentVideo.progress}
                  position="top"
                  onScrubPostionHandler={handleScrubPosition}
                />
                <Comp.Controller.PlayButton onClick={handlePlayButton} ref={playButtonRef}>
                  {videoRef.current?.paused ? <Icon.Play /> : <Icon.Pause />}
                </Comp.Controller.PlayButton>
                <Comp.Controller.Volume onVolumeHandle={handleVolume} />
              </div>
              <div className={S.videoTimeWrapper}>
                <p className={S.videoTime}>{calcVideoCurTimeAndFullTime()}</p>
              </div>
            </div>
          </div>
          <article className={S.articlesWrapper}>
            <div className={S.articleTopSection}>
              <div className={S.textsColumWrapper}>
                <h3 className={S.title}>{videoName}</h3>
                <div className={S.keywordsWrapper}>
                  {keywords.map((keyword, i) => (
                    <span className={S.keywordItem} key={`keyword-${keyword.id}`}>
                      #{keyword.keyword}
                    </span>
                  ))}
                </div>
              </div>
              <div className={S.textsColumWrapper} style={assignInlineVars({ [S.justifyContent]: 'space-between' })}>
                <p className={S.metaDataItem}>{formatDate}</p>
                <p className={S.metaDataItem}>{`${hits}회`}</p>
              </div>
            </div>
            <div className={S.summaryContainer}>
              <h4 className={S.title}>영상 한줄 요약</h4>
              <p>{videoSummary}</p>
            </div>
          </article>
        </div>
      </section>
    </Comp.FlexableModal>
  );
}
