'use client';
import { useRef, useState } from 'react';

const SimpleRefHook: React.FC = () => {
  let refCount = useRef(0);
  const [stateCount, setStateCount] = useState<number>(0);

  const handleClick = () => {
    refCount.current++;
    console.log(refCount.current);
  };

  const handleReRender = () => {
    setStateCount(refCount.current);
  };

  return (
    <>
      <button onClick={handleClick}>Click me!</button>
      <br></br>
      <button onClick={handleReRender}>Re-render</button>
      <p>
        ref count is {refCount.current} and state count is {stateCount}
      </p>
    </>
  );
};

export { SimpleRefHook };
