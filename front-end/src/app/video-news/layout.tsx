'use client';

import React, { useState } from 'react';
import * as S from './layout.css';
import * as Comp from '@/components';

export default function VideoNewsLayout({ children }: { children: React.ReactNode }) {
  const [value, setValue] = useState('');
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <>
      <section className={S.wrapper}>
        <div className={S.keywordWindow}>
          <div className={S.keywordList}>
            {DUMMY_KEYWORDS.map((keyword, i) => (
              <Comp.FillterButton
                key={`keyword-${i}`}
                isSelected={i === 1}
                onClick={() => console.log(`keyword :`, keyword)}
              >
                {keyword}
              </Comp.FillterButton>
            ))}
          </div>
        </div>
        <form className={S.inputWrapper}>
          <Comp.SearchInput
            value={value}
            inputId="video-news-input"
            placeholder={'제목 또는 키워드로 검색해보세요!'}
            onChange={handleOnChange}
            onSubmit={() => console.log(`SUBMIT :`)}
          />
        </form>
      </section>
      {children}
      <Comp.Modal width="120px" height="120px" isOpen={true} isOpenHandler={() => console.log(`HANDLER :`)}>
        MODAL TEST
      </Comp.Modal>
    </>
  );
}

const DUMMY_KEYWORDS = [
  '윤석열 대통령',
  '한동훈 비대위원장',
  '황상무 대통령 수석',
  '국민의 미래',
  '더불어민주연합',
  '조국 혁신당',
  '박영진 의원',
  '강북 공천',
  '한민수 후보',
];
