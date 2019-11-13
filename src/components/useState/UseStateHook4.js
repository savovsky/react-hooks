import React, { useState } from 'react';

// Example - broken
// State Update Function replace the state object each time we call it.
const UseStateHook4 = (props) => {
  // const [count, setCount] = useState(0);
  // const [text, setText] = useState('Score');
  const [state, setState] = useState({ // one state object
    count: props.count,
    text: ''
  });

  return (
    <>
      <strong>UseStateHook4</strong>
      <div>{state.text || 'Count'}: {state.count}</div>
      <button onClick={() => setState({ count: state.count + 1 })}>+1</button>
      <button onClick={() => setState({ count: state.count })}>reset</button>
      <button onClick={() => setState({ count: state.count + 1 })}>-1</button>
      <input value={state.text} onChange={(e) => setState({
        // ...state, // on every 'setState' - will sove the problem but this is not the way!
        text: e.target.value
      })} />
    </>
  );
}

export default UseStateHook4;
