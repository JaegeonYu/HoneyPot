import { motion, useAnimation, AnimationControls } from 'framer-motion';
import { useEffect, useRef } from 'react';
import './styles.css';

export default function HighlightLoader() {
  const scope = useRef<HTMLDivElement>(null);
  const animate = useAnimation();

  useEffect(() => {
    const containerWidth = document.querySelector<HTMLDivElement>('.container')?.offsetWidth;
    const animateLoader = async () => {
      if (scope.current && containerWidth) {
        await animate.start(
          [
            { target: scope.current, x: 0, width: '100%' },
            { target: scope.current, x: containerWidth, width: '0%' },
          ],
          {
            duration: 2,
            repeat: Infinity,
            repeatDelay: 0.8,
          },
        );
      }
    };
    animateLoader();
  }, []);

  return (
    <div className="container">
      <motion.div ref={scope} className="loader" />
      <h1 className="text">
        <i>highlight</i>
      </h1>
    </div>
  );
}
