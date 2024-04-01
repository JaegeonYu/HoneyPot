import React from 'react';
import * as S from './PlayButton.css';

function PlayButton(
  { children, onClick }: { children: React.ReactNode; onClick: ([...args]: any) => void },
  ref: React.ForwardedRef<HTMLButtonElement>,
) {
  return (
    <button className={S.wrapper} onClick={onClick} ref={ref}>
      {children}
    </button>
  );
}

export default React.forwardRef(PlayButton);
