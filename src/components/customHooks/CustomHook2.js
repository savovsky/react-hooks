import React, { useState } from 'react';
import CursorCoordinates from './components/CursorCoordinates';
import Note from './components/Note';

const CustomHook2 = () => {
  const [notes, setNotes] = useState([]);
  const [title, setTilte] = useState('');

  const addNote = (e) => {
    e.preventDefault();
    setNotes([
      ...notes,
      { title }
    ]);
    setTilte('');
  };

  const removeNote = (title) => {
    setNotes(notes.filter((note) => note.title !== title));
  };

  return (
    <>
      <strong>Cursor Coordinates: </strong>
      <CursorCoordinates />
      <div>Notes:</div>
      {notes.map((note) => <Note key={note.title} note={note} removeNote={removeNote} />)}
      <form onSubmit={addNote}>
        <input value={title} onChange={(e) => setTilte(e.target.value)}/>
        <button>add Note</button>
      </form>
    </>
  );
}

export default CustomHook2;
