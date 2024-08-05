import './App.css';
import { useState } from 'react';

function App() {

  let [counter, setCounter] = useState(0);

  // let counter = 5;

  // const addValue = () => {
  //   if(counter < 10){
  //     setCounter(counter+1);
  //   }
  // }


  const addValue = () => {
    setCounter(prevCounter => {prevCounter + 1});
    setCounter(counter+1);
    setCounter(counter+1);
    setCounter(counter+1);
    setCounter(counter+1);
    setCounter(counter+1);
  }


  const removeValue = () => {
    if(counter > 0){
      setCounter(counter-1);
    }
  }
  return (
    <>
      <h1> Hello </h1>
      <h1> Counter Value: {counter}</h1>

      <button
      onClick={addValue}>Add Value</button>
      <button onClick={removeValue}>Remove</button>
    </>
  )
}

export default App
