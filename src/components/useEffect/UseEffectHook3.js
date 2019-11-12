import React, { useState, useEffect } from 'react';

// Conditionaly fire the useEffect
const UseEffectHook3 = (props) => {
  const [count, setCount] = useState(props.count);
  const [text, setText] = useState('');

  useEffect(() => {
    console.log('%c useEffect invoked', 'color: blue');
    document.title = count
  }, [count]); 
  // }, [text]);
  // }, []);
  // React expect to Be Honest About Dependencies
  // If deps contain every value used by the effect, React knows when to re-run it.
  // https://overreacted.io/a-complete-guide-to-useeffect/

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
