import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import * as S from './texttest.css';
import * as T from '@/types';

const contentsArray = [
  '유재건이 오늘 커피를 샀다는 사실 알고 계셨나요?',
  '강건은 사실 티원 팬이 아니였습니다.',
  '2024년 김성제의 하품횟수는 233,564번입니다.',
  '누네띠네의 성분 중에는 니코틴이 포함되어 있습니다.',
  '김가빈의 22대 총선 출마선언 알고 계셨나요?',
  '권준구와 강건은 사실 형제입니다.',
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
    }, 1500);

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

////////////////////////////////////////////////////////////////////
// export default function TextTest({ contents }: T.TextAnimateProps) {
//   const text = contents.split(' ');

//   return (
//     <div className={S.text}>
//       {text.map((el, i) => (
//         <motion.span
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{
//             duration: 0.25,
//             delay: i / 10,
//           }}
//           key={i}
//         >
//           {el}{' '}
//         </motion.span>
//       ))}
//     </div>
//   );
// }
