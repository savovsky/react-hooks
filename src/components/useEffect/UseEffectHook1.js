import React, { useState, useEffect } from 'react';

// Receiving props from outside
const UseEffectHook1 = (props) => {
  const [count, setCount] = useState(props.count);
  const [text, setText] = useState('');

  useEffect(() => {
    console.log('%c useEffect invoked', 'color: blue');
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