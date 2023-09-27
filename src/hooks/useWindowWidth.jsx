import { useLayoutEffect, useState } from 'react';

export function useWindowWidth() {
  const [size, setSize] = useState(window.innerWidth);
  useLayoutEffect(() => {
    function updateSize() {
      setSize(window.innerWidth);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}
