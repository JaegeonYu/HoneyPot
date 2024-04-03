import { motion } from 'framer-motion';
import React from 'react';

export default function Slogan() {
  const contents = '국회의 약속부터 실천까지 한 꿀통에 담다';
  const text = contents.split(' ');

  return (
    <div>
      {text.map((el, i) => (
        <motion.span
          key={`${el}-${i}`} // 각 요소의 고유성을 보장하기 위해 키에 문자열을 추가합니다.
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.25,
            delay: i / 10,
          }}
          style={{ display: 'inline', fontSize: 60, fontWeight: 700, textAlign: 'center' }}
        >
          {el}{' '}
        </motion.span>
      ))}
    </div>
  );
}
