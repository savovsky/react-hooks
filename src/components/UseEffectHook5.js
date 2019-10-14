import React, { useState, useEffect } from 'react';

// Cleaning up Effects
const UseEffectHook5 = () => {
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
  }, [notes]);

  return (
    <>
      <strong>UseEffectHook5</strong>
      <div>Notes:</div>
      {notes.map((note) => <Note key={note.title} note={note} removeNote={removeNote} />)}
      <form onSubmit={addNote}>
        <input value={title} onChange={(e) => setTilte(e.target.value)}/>
        <button>add Note</button>
      </form>
      <hr></hr>
    </>
  );
}

// This component will be 'mount' and 'ummount'.
const Note = ({ note, removeNote }) => {
// Destructuring the props object.

  // useEffect is invoked on every props change
  useEffect(() => {
    console.log('useEffectOne invoked!');
  });

  // useEffect is invoked only once
  useEffect(() => {
    console.log('useEffectTwo invoked!');
  }, []);

  // useEffect is invoked only once
  useEffect(() => {
    console.log('useEffectThree invoked!');

    return () => {
      console.log('Cleaning up useEffectThree');
    }

  }, []);

  return (
    <div>
      {note.title}
      <button onClick={() => removeNote(note.title)}>delete</button>
    </div>
  );
}

export default UseEffectHook5;

// Presentation slide
// import React, { useState, useEffect } from 'react';

// const Example = (props) => {

//   // useEffect is invoked only once on component init.
//   useEffect(() => {
//     console.log('useEffect invoked!');

//     return () => {
//       console.log('Cleaning up useEffect');
//       // Do some work...
//     }
//   }, []);

//   return (
//     <div>
//       {props.title}
//     </div>
//   );
// };

