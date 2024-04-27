import { useInView } from 'react-intersection-observer';

export const Reveal = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0,
  });
  const className = inView ? 'reveal' : 'reveal hidden';
  
  return (
    <div ref={ref} className={className} aria-hidden={!inView}>
      {children}
    </div>
  );
}
