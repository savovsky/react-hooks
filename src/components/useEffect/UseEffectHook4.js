import React, { useState, useEffect } from 'react';

// You can use 'useEffect' multiple times.
// You can invoke 'useEffect' function just once on component init.
const UseEffectHook4 = (props) => {
  const [count, setCount] = useState(props.count);
  const [text, setText] = useState('');

  console.log('%c Component', 'color: brown');

  useEffect(() => {
    console.log('%c useEffectOne invoked', 'color: purple');
  });

  useEffect(() => {
    console.log('%c useEffectTwo run once , []', 'color: orange');
  }, []);

  useEffect(() => {
    console.log('%c useEffectThree invoked , [count]', 'color: blue');
  }, [count]);

  useEffect(() => {
    console.log('%c useEffectFour invoked , [text]', 'color: green');
  }, [text]);

  useEffect(() => {
    console.log('%c useEffectFour invoked , [count, text]', 'color: red');
  }, [count, text]);

 

  return (
    <>
      <strong>UseEffectHook4</strong>
      <div>{text || 'Count'}: {count}</div>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(props.count)}>reset</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <input value={text} onChange={(e) => setText(e.target.value)}/>
    </>
  );
}

export default UseEffectHook4;
