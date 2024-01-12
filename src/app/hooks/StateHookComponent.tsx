'use client';
import React, { useState } from 'react';

const StateHookComponent = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <button className='button' onClick={handleClick}>
      You pressed me {count} times!
    </button>
  );
};

export { StateHookComponent };
