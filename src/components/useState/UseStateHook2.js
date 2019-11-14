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
      <button onClick={() => setCount(0)}>clear</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
    </>
  );
}

UseStateHook2.defaultProps = {
  count: 7
}

export default UseStateHook2;
