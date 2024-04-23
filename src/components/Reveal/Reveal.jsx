import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export const Reveal = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  return (
    <div ref={ref} className={inView ? 'reveal' : 'reveal hidden'}>
      {children}
    </div>
  );
}