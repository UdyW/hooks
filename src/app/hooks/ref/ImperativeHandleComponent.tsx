'use client';
import React, { forwardRef, useImperativeHandle, useRef } from 'react';

// eslint-disable-next-line react/display-name
const CustInput = forwardRef((props, ref) => {
  const inputRef = useRef(null);

  useImperativeHandle(
    ref,
    () => {
      return {
        focus() {
          inputRef.current.focus();
        },
        scrollIntoView() {
          inputRef.current.scrollIntoView();
        },
      };
    },
    []
  );

  return <input {...props} ref={inputRef} />;
});

const ImperativeHandleHandle: React.FC = () => {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };
  return (
    <>
      <CustInput ref={inputRef} />
      <button onClick={handleFocus}>Focus</button>
    </>
  );
};

export { ImperativeHandleHandle };
