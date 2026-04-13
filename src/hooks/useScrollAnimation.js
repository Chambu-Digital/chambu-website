import { useEffect, useRef } from 'react';

export function useScrollAnimation(threshold = 0.15) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate all .fade-up children
            const fadeEls = entry.target.querySelectorAll('.fade-up');
            fadeEls.forEach((el) => el.classList.add('visible'));
            // Also animate the container itself if it has fade-up
            if (entry.target.classList.contains('fade-up')) {
              entry.target.classList.add('visible');
            }
          }
        });
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
