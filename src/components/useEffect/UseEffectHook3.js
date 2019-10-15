import React, { useState, useEffect } from 'react';

// Conditionaly fire the useEffect
const UseEffectHook3 = (props) => {
  const [count, setCount] = useState(props.count);
  const [text, setText] = useState('');

  useEffect(() => {
    console.log('%c useEffect invoked', 'color: blue');
    document.title = count
  }, [count]);

  return (
    <>
      <strong>UseEffectHook3</strong>
      <div>{text || 'Count'}: {count}</div>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(props.count)}>reset</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <input value={text} onChange={(e) => setText(e.target.value)}/>
      <hr></hr>
    </>
  );
}

export default UseEffectHook3;


// Presentation slide
// import React, { useState, useEffect } from 'react';

// const Example = () => {
//   const [count, setCount] = useState(0);
//   const [text, setText] = useState('');

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
