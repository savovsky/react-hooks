import React, { useState } from 'react';

// Complex State with useState
// State is an 'array' (collection of anything).
const UseStateHook5 = () => {
  const [notes, setNotes] = useState([]);
  const [title, setTilte] = useState('');

  const addNote = (e) => {
    e.preventDefault();
    setNotes([
      ...notes,
      { title } // title: title
    ]);
    setTilte('');
  };

  const removeNote = (title) => {
    setNotes(notes.filter((note) => note.title !== title));
  };

  return (
    <>
      <strong>UseStateHook5</strong>
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

export default UseStateHook5;
