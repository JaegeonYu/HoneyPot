import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import * as S from './texttest.css';
import * as T from '@/types';

const contentsArray = [
  "개원 첫날 국회에서 가장 처음 한 일이 '기도' 라는 것을 알고 계셨나요?",

  '세계에서 의원 평균연령이 높은 나라가 55.5세로 대한민국이라는 사실을 알고계신가요?',

  '국회 지하1층엔 종교시설이 잘되어있어, 같은 종교를 가진 사람들이 여야를 떠나 함께 기도합니다.',
  '역대 국회 최고령 의원의 나이는 만87세라는 사실을 알고 계셨나요?',
  '21대 국회의원 중 10명 중 3명은 전과 기록을 가지고 있습니다.',
  '21대 국회의원 중 회의일수 83일 중 42일을 무단으로 결석한 의원이 있습니다.',

  '최다선 국회의원 기록은 9선입니다.',
  '대한민국 최단기 국회의원 임기는 3일 입니다.',
];

const getRandomContent = () => {
  const randomIndex = Math.floor(Math.random() * contentsArray.length);
  return contentsArray[randomIndex];
};

export default function TextTest({ contents }: T.TextAnimateProps) {
  const [text, setText] = useState<string[]>([]);
  //   const text = contents.split(' ');
  useEffect(() => {
    const interval = setInterval(() => {
      const randomContent = getRandomContent();
      setText(randomContent.split(' '));
    }, 1800);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <div className={S.text}>
      {text.map((el, i) => (
        <motion.span
          key={`${el}-${i}`} // 각 요소의 고유성을 보장하기 위해 키에 문자열을 추가합니다.
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.25,
            delay: i / 10,
          }}
          className={S.text}
        >
          {el}{' '}
        </motion.span>
      ))}
    </div>
  );
}
