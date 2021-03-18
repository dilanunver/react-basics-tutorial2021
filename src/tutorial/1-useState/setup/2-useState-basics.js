import React, { useState } from 'react';

const UseStateBasics = () => {
  const [message, setMessage] = useState('hello');
  const [count, setCount] = useState(0);


  const change = () => {
    if (message === 'hello') {
      setMessage('this is changed!');
    } else {
      setMessage('hello')
    }
  }
  const increase = () => {
    setCount(count + 1)
  }
  const decrease = () => {
    setCount(count - 1)
  }
  const makeItZero = () => {
    setCount(0)
  }
  return (
    <div>
      <h2>{message}</h2>
      <h3>{count}</h3>
      <button className="btn" onClick={() => decrease()}>Decrease</button>
      <button className="btn" onClick={() => change()}>Change</button>
      <button className="btn" onClick={() => increase()}>Increase</button>
      <button className="btn" onClick={() => makeItZero()}>Make it Zero</button>
    </div>
  )
};

export default UseStateBasics;
