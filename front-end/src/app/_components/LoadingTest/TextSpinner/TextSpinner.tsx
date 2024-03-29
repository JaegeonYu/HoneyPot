import { motion, useAnimation, useAnimate, SequenceOptions } from 'framer-motion';
import { useEffect, useRef } from 'react';
import * as S from './TextSpinner.css';
import { vars } from '@/globalTheme.css';

export default function TextSpinnerLoader() {
  const text = '여의도 꿀통이 내용을 요약중입니다.';
  const characters = text.split('');

  const radius = 80;
  const fontSize = '18px';
  const letterSpacing = 12.5;

  const [scope, animate] = useAnimate();

  useEffect(() => {
    const animateLoader = async () => {
      const letterAnimation: any[] = [];
      characters.forEach((_, i) => {
        letterAnimation.push([`.letter-${i}`, { opacity: 0 }, { duration: 0.3, at: i === 0 ? '+0.8' : '-0.28' }]);
      });
      characters.forEach((_, i) => {
        letterAnimation.push([`.letter-${i}`, { opacity: 1 }, { duration: 0.3, at: i === 0 ? '+0.8' : '-0.28' }]);
      });
      animate(letterAnimation, {
        ease: 'linear', // Corrected
        repeat: Infinity, // Corrected
      } as SequenceOptions); // Corrected
      animate(
        scope.current,
        { rotate: 360 },
        { duration: 4, ease: 'linear', repeat: Infinity } as SequenceOptions, // Corrected
      );
    };
    animateLoader();
  }, []);

  return (
    <motion.div ref={scope} className={S.circle} style={{ width: radius * 2 }}>
      <p aria-label={text} />
      <p aria-hidden="true" className="text">
        {characters.map((ch, i) => (
          <motion.span
            key={i}
            className={`letter letter-${i}`}
            style={{
              transformOrigin: `0 ${radius}px`,
              transform: `rotate(${i * letterSpacing}deg)`,
              fontSize,
              position: 'absolute',
              top: 0,
              left: '50%',
              color: `${vars.colors.service.MAIN_COLOR_100}`,
            }}
          >
            {ch}
          </motion.span>
        ))}
      </p>
    </motion.div>
  );
}
