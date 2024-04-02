'use client';

import React, { useCallback, useState } from 'react';
import * as S from './page.css';
import * as Comp from '@/components';
import * as API from '@/_apis/video';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';

export default function UserInteractionSection() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [value, setValue] = useState('');
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const { data: categoryList, isFetched: categoryListFetched } = useQuery({
    queryKey: [{ videoNews: `category-list` }],
    queryFn: () => API.getVideoCategoryList().then(res => [{ id: 0, categoryName: '전체보기' }, ...res.data]),
  });

  const handleQueryString = useCallback(
    ({ category, word }: { category: number; word: string }) => {
      const params = new URLSearchParams(searchParams.toString());

      params.set('category', String(category));
      params.set('word', word);

      router.push(`${pathname}?${params.toString()}`);
    },
    [searchParams],
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleQueryString({ category: Number(searchParams.get('category')), word: value });
  };

  return (
    <section className={S.wrapper}>
      <div className={S.keywordWindow}>
        <div className={S.keywordList}>
          {categoryList?.map((res, i) => (
            <Comp.FillterButton
              key={`category-${res.id}`}
              isSelected={Number(searchParams.get('category')) === i}
              onClick={() => handleQueryString({ category: res.id, word: searchParams.get('word') || '' })}
            >
              {res.categoryName}
            </Comp.FillterButton>
          ))}
        </div>
      </div>
      <form className={S.inputWrapper} onSubmit={handleSubmit}>
        <span className={S.givenInfomation}>
          영상 출처 :
          <a className={S.givenInfomationLink} href="https://www.youtube.com/@NATV_korea" target="_black">
            NATV,
          </a>
          <a className={S.givenInfomationLink} href="https://www.natv.go.kr/natv/info/natvCopyright.do" target="_black">
            국회방송
          </a>
        </span>
        <Comp.SearchInput
          value={value}
          inputId="video-news-input"
          placeholder={'제목 또는 키워드로 검색해보세요!'}
          onChange={handleOnChange}
          onSubmit={handleSubmit}
        />
      </form>
    </section>
  );
}
