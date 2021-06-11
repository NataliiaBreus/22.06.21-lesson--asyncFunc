import { useState, useEffect } from 'react';

export function useMouse () {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleMouseMove = event => {
    setX(event.clientX);
    setY(event.clientY);
  };

  return { x, y };
}
