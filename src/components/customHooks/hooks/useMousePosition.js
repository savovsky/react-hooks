import { useState, useEffect } from 'react';

const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0});

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({
        x: e.pageX,
        y: e.pageY
      })
    };
    
    console.log('%c(useMousePosition) Add EventListener', 'color: blue');
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      console.log('%c(useMousePosition) Remove EventListener', 'color: green');
      document.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return position;
}

export { useMousePosition as default }
