'use client';
import React, { forwardRef, useRef } from 'react';

// eslint-disable-next-line react/display-name
const MyInput = forwardRef((props, ref) => {
  return <input {...props} ref={ref} />;
});

const PassRefParent: React.FC = () => {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };
  return (
    <>
      <MyInput ref={inputRef} />
      <button onClick={handleFocus}>focus it</button>
    </>
  );
};

export { PassRefParent };
