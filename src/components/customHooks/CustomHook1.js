import React, { useState } from 'react';

const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0});

  console.log('%c(useMousePosition) Add EventListener', 'color: purple');
  document.addEventListener('mousemove', (e) => {
    setPosition({
      x: e.pageX,
      y: e.pageY
    })
  });

  return position;
}

// WARNIG - every state change in the custom Hook useMousePosition,
// will trigger new render of CustomHook1 Component and
// each render will call useMousePosition() and 
// each custom Hook useMousePosition call will add a new EventListener...
// your browser is going to crash...

const CustomHook1 = () => {
  const position = useMousePosition();

  return (
    <>
      <div>{position.x}, {position.y}</div>
    </>
  );
}

export default CustomHook1;
