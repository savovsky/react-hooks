import React, { useState } from 'react';

// Receiving props from outside
const UseStateHook2 = (props) => {
  const [count, setCount] = useState(props.count);

  return (
    <>
      <strong>UseStateHook2</strong>
      <div>Count: {count}</div>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(props.count)}>reset</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <hr></hr>
    </>
  );
}

UseStateHook2.defaultProps = {
  count: 0
}

export default UseStateHook2;