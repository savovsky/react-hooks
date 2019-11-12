import React, { useState, useEffect } from 'react';

// Synchronize notes data with localStorage
const UseEffectHook2 = () => {
  const notesData = JSON.parse(localStorage.getItem('notes'))
  const [notes, setNotes] = useState(notesData || []);
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

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  });

  return (
    <>
      <strong>UseEffectHook2</strong>
      <div>Notes:</div>
      {notes.map((note) => (
          <div key={note.title}>
            {note.title}
            <button onClick={() => removeNote(note.title)}>delete</button>
          </div>
      ))}
      <form onSubmit={addNote}>
        <input value={title} onChange={(e) => setTilte(e.target.value)}/>
        <button>add Note</button>
      </form>
      <hr></hr>
    </>
  );
}

export default UseEffectHook2;
