import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  const [value2, setValue2] = useState(0);

  useEffect(() => {
    console.log('call useEffect');
    if (value2 > 1) {
      document.title = `New Messages(${value2}) `
    }
  }, [value2]);

  useEffect(() => {
    console.log('hello')
  })

  console.log('render component')
  return (
    <>
      <h2>{value} {value2}</h2>
      <button className="btn" onClick={() => setValue(value + 1)}>click me</button>
      <button className="btn" onClick={() => setValue2(value2 + 1)}>click me</button>
    </>
  );

};

export default UseEffectBasics;
