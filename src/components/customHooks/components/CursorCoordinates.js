import React from 'react';
import useMousePosition from '../hooks/useMousePosition'

const CursorCoordinates = () => {
  const position = useMousePosition();

  return (
      <span>
        x: {position.x} / y: {position.x}
      </span>
  );
}

export default CursorCoordinates;
