import React, { useState } from 'react';


const UseStateHook1 = () => {
  const [count, setCount] = useState(5);

  return (
    <> {/* React Fragment since v16.2.0 */}
      <strong>UseStateHook1</strong>
      <div>Count: {count || 'none'}</div>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(0)}>reset</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
    </>
  );
}

export default UseStateHook1;
