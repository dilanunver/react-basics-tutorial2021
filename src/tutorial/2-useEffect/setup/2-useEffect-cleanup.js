import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);
  console.log(size)
  useEffect(() => {
    window.addEventListener('resize', () => {
      setSize(window.innerWidth);
    })

    return window.removeEventListener('resize', () => console.log(2));
  }, [])
  return (
    <>
      <h1>window</h1>
      <h2>{size} PX </h2>
    </>
  );
};

export default UseEffectCleanup;
