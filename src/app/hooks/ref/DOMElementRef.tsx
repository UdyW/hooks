'use client';
import React, { useRef } from 'react';

const DOMElementRef: React.FC = () => {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <input type='text' ref={inputRef} />
      <button onClick={handleFocus}>focus it</button>
    </>
  );
};

export { DOMElementRef };
