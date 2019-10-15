import React from 'react';
import useMousePosition from '../hooks/useMousePosition'

const Note = ({ note, removeNote }) => {
  const position = useMousePosition();

  return (
    <>
      <div style={{
          backgroundColor: `rgb(${position.x}, 150, ${position.y})`,
          height: 50
      }}>
        {note.title}
        <button onClick={() => removeNote(note.title)}>delete</button>
      </div>
    </>
  );
}

export default Note;
