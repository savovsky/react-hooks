import React, { useState, useEffect } from 'react';


const UseEffectHook1 = () => {
  const [count, setCount] = useState(4);
  const [text, setText] = useState('');

  // runs on component init after rendering
  // runs after each update (state or props change)
  // runs once for component Lifecycle
  useEffect(() => {
    console.log('%cuseEffect invoked', 'color: white; background: blue; padding: 5px');
    document.title = count;
  });

  return (
    <>
      <strong>UseEffectHook1</strong>
      <div>{text || 'Count'}: {count}</div>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(0)}>reset</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <input value={text} onChange={(e) => setText(e.target.value)} />
    </>
  );
}

export default UseEffectHook1;
