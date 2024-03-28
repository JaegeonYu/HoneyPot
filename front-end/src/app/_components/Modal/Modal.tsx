import React, { useState } from 'react';
import * as S from './Modal.css';
import * as T from '@/types';
import * as Icon from '@/_assets/icon';
import { assignInlineVars } from '@vanilla-extract/dynamic';

export default function Modal({ width, height, isOpen, isOpenHandler, children }: T.ModalProps) {
  const [isMiniplayerMode, setIsMiniplayerMode] = useState(true);
  return (
    <>
      {isOpen && (
        <>
          {!isMiniplayerMode && <div className={S.overlay} onClick={isOpenHandler} />}
          <div
            className={S.wrapper}
            style={assignInlineVars({
              [S.width]: isMiniplayerMode ? '400px' : width,
              [S.height]: isMiniplayerMode ? '290px' : height,
              [S.bottom]: isMiniplayerMode ? '0' : '-30%',
              [S.right]: isMiniplayerMode ? '0' : '-30.5%',
              [S.transform]: isMiniplayerMode ? 'translate(-4%, -4%)' : 'translate(-50%, -45%)',
            })}
          >
            <div className={S.container} style={assignInlineVars({ [S.padding]: isMiniplayerMode ? '32px' : '48px' })}>
              {isMiniplayerMode ? (
                <div className={S.extendIcon} onClick={() => setIsMiniplayerMode(prev => !prev)}>
                  <Icon.Extend />
                </div>
              ) : (
                <div className={S.arrowIcon} onClick={() => setIsMiniplayerMode(prev => !prev)}>
                  <Icon.MiniPlayer />
                </div>
              )}
              <div className={S.closeIcon} onClick={isOpenHandler}>
                <Icon.Close />
              </div>
              {children}
            </div>
          </div>
        </>
      )}
    </>
  );
}
