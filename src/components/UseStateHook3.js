import React, { useState } from 'react';

// Two State props - Two useState()
const UseStateHook3 = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('Score');

  return (
    <>
      <strong>UseStateHook3</strong>
      <div>{text || 'Count'}: {count}</div>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(0)}>reset</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <input value={text} onChange={(e) => setText(e.target.value)}/>
      <hr></hr>
    </>
  );
}

export default UseStateHook3;