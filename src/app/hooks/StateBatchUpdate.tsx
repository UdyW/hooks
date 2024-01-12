'use client';
import React, { useState } from 'react';

const StateBatchUpdate = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  };

  const handleClickwithUpdater = () => {
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    setCount((count) => count + 1);
  };
  return (
    <>
      <button className='button' onClick={handleClick}>
        Count {count}! React does not re-render untill all handlers are done!
        this is called <b>Batch Status Update</b>
      </button>
      <br />
      <button className='button' onClick={handleClickwithUpdater}>
        Count {count}! Now update status with <b>updater function </b>. It Works
      </button>
    </>
  );
};

export { StateBatchUpdate };
