import React, { useState } from 'react';
import * as S from './Volume.css';
import * as Icon from '@/_assets/icon';
import { assignInlineVars } from '@vanilla-extract/dynamic';

function Volume({ onVolumeHandle }: { onVolumeHandle: ({ rangeValue }: { rangeValue: number }) => void }) {
  const [rangeValue, setRangeValue] = useState(100);

  const handleVolume = ({ value }: { value: string | number }) => {
    setRangeValue(Number(value));
    onVolumeHandle({ rangeValue: Number(value) / 100 });
  };

  return (
    <button className={S.wrapper}>
      {rangeValue === 0 ? (
        <div className={S.iconWrapper} onClick={() => handleVolume({ value: 100 })}>
          <Icon.VolumeMute />
        </div>
      ) : (
        <div className={S.iconWrapper} onClick={() => handleVolume({ value: 0 })}>
          <Icon.VolumeFull />
        </div>
      )}
      <div className={S.sliderContainer}>
        <div className={S.sliderRail} />
        <div className={S.sliderFillTrack} style={assignInlineVars({ [S.width]: `${rangeValue}px` })} />
        <input
          className={S.slider}
          type="range"
          min={0}
          max={100}
          value={rangeValue}
          onChange={e => handleVolume({ value: e.target.value })}
        />
      </div>
    </button>
  );
}

export default Volume;
