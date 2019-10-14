import React from 'react';
import UseStateHook1 from './components/UseStateHook1';
import UseStateHook2 from './components/UseStateHook2';
import UseStateHook3 from './components/UseStateHook3';
import UseStateHook4 from './components/UseStateHook4';
import UseStateHook5 from './components/UseStateHook5';

const App = () => {
  return (
    <>
      <UseStateHook1 />
      <UseStateHook2 count={5}/>
      <UseStateHook3 />
      <UseStateHook4 count={5}/>
      <UseStateHook5 />
    </>
  );
}

export default App;
