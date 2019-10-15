import React, { useState, useEffect } from 'react';

// Can use 'useEffect' multiple times
// Can invoke 'useEffect' function just once on component init.
const UseEffectHook4 = (props) => {
  const [count, setCount] = useState(props.count);
  const [text, setText] = useState('');

  useEffect(() => {
    console.log('%c useEffectOne run once', 'color: orange');
  }, []);

  useEffect(() => {
    console.log('%c useEffectTwo invoked', 'color: blue');
  }, [count]);

  useEffect(() => {
    console.log('%c useEffectThree invoked', 'color: purple');
  });

  return (
    <>
      <strong>UseEffectHook4</strong>
      <div>{text || 'Count'}: {count}</div>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(props.count)}>reset</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <input value={text} onChange={(e) => setText(e.target.value)}/>
      <hr></hr>
    </>
  );
}

export default UseEffectHook4;


// Presentation slide
// import React, { useState, useEffect } from 'react';

// const Example = () => {
//   const [count, setCount] = useState(0);
//   const [text, setText] = useState('');

//   useEffect(() => {
//     // Run only once on component init and Do some work...
//   }, []);

//   useEffect(() => {
//     // Do some work... only if 'count' is changed
//   }, [count]);

//   return (
//     <>
//       <div>{text || 'Count'}: {count}</div>
//       <button onClick={() => setCount(count + 1)}>+1</button>
//       <input value={text} onChange={(e) => setText(e.target.value)}/>
//     </>
//   );
// }
