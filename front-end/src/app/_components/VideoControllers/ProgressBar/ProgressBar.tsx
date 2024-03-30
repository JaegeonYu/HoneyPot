import React, { useState } from 'react';
import * as S from './ProgressBar.css';
import { assignInlineVars } from '@vanilla-extract/dynamic';

function ProgressBar(
  {
    isHover,
    currentTime,
    onScrubPostionHandler,
  }: {
    isHover: boolean;
    currentTime: number;
    onScrubPostionHandler: (e: React.MouseEvent<HTMLDivElement>) => void;
  },
  ref: React.ForwardedRef<HTMLDivElement>,
) {
  const [isMouseDown, setIsMouseDown] = useState(false);

  return (
    <div
      className={S.progressBarTrack}
      style={assignInlineVars({ [S.toggleVisible]: isHover ? '0.99' : '0' })}
      ref={ref}
      onMouseDown={() => setIsMouseDown(true)}
      onMouseUp={() => setIsMouseDown(false)}
      onClick={onScrubPostionHandler}
      onMouseMove={isMouseDown ? onScrubPostionHandler : undefined}
    >
      <div className={S.progressBarFilledColor} style={assignInlineVars({ [S.curTimePercent]: `${currentTime}%` })} />
      <div className={S.scrubButton} style={assignInlineVars({ [S.translateX]: `${currentTime}%` })} id="target" />
    </div>
  );
}

export default React.forwardRef(ProgressBar);
