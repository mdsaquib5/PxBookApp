import { useState, useEffect } from 'react';

export const useCountUp = (end, duration = 2000, startAnimating = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startAnimating) return;

    let startTime = null;
    let animationFrame;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      }
    };

    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, startAnimating]);

  return count;
};