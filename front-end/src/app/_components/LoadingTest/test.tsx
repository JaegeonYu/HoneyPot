import { motion, useAnimation, useAnimate } from 'framer-motion';
import { useEffect, useRef } from 'react';
import * as S from './styles.css';

interface Keyframe {
  x: number | string;
  width: number | string;
}

export default function Test() {
  //   const controls = useAnimation();
  const [scope, animate] = useAnimate();

  useEffect(() => {
    // const containerWidth = document.getElementById('container')?.offsetWidth ?? 0;

    const animateLoader = async () => {
      await animate(
        [
          [scope.current, { x: 0, width: '100%' }],
          [scope.current, { x: 140, width: '0%' }, { delay: 0.6 }],
        ],
        {
          duration: 2,
          repeat: Infinity,
          repeatDelay: 0.8,
        },
      );
    };
    animateLoader();
  }, []);

  return (
    <div className={S.wrapper} id="container">
      <div className={S.container}>
        <motion.div ref={scope} className={S.loader} />
        <h1 className={S.text}>
          <i>highlight</i>
        </h1>
      </div>
    </div>
  );
}
