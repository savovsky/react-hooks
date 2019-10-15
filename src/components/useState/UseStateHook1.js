import React, { useState } from 'react';


const UseStateHook1 = () => {
  const [count, setCount] = useState(0);

  return (
    <> {/* React Fragment since v16.2.0 */}
      <strong>UseStateHook1</strong>
      <div>Count: {count}</div>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(0)}>reset</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <hr></hr>
    </>
  );
}

export default UseStateHook1;