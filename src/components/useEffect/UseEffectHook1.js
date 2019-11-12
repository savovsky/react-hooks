import React, { useState, useEffect } from 'react';

// Receiving props from outside
const UseEffectHook1 = (props) => {
  const [count, setCount] = useState(props.count);
  const [text, setText] = useState('');

  // runs on component init after rendering
  // runs after each update (state or props change)
  // runs once for component Lifecycle
  useEffect(() => {
    console.log('%cuseEffect invoked', 'color: white; background: blue; padding: 5px');
    document.title = count
  });

  return (
    <>
      <strong>UseEffectHook1</strong>
      <div>{text || 'Count'}: {count}</div>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(props.count)}>reset</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <input value={text} onChange={(e) => setText(e.target.value)}/>
      <hr></hr>
    </>
  );
}

export default UseEffectHook1;
