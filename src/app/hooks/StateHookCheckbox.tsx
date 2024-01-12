'use client';
import React, { useState } from 'react';

const StateHookCheckbox = () => {
  const [checked, setChecked] = useState(true);

  const handleClick = (e: boolean) => {
    setChecked(e);
  };
  return (
    <>
      <input
        type='checkbox'
        checked={checked}
        onChange={(e) => handleClick(e.target.checked)}
      ></input>
      <p>You {checked ? 'liked' : 'did not like'} React!</p>
    </>
  );
};

export { StateHookCheckbox };
