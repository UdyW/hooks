'use client';

import React, { useEffect, useRef, useState } from 'react';

const Welcome: React.FC = () => {
  const ref = useRef(null);

  useEffect(() => {
    console.log('Effect start');
    return () => console.log('clean up function');
  }, []);
  return <div ref={ref}>Welcome</div>;
};

const SimpleUseEffectComponent: React.FC = () => {
  const [show, setShow] = useState<boolean>(true);

  const handleClick = () => {
    !show ? setShow(true) : setShow(false);
  };
  return (
    <>
      <button onClick={handleClick}>{show ? 'hide' : 'show'}</button>
      {show && <Welcome />}
    </>
  );
};

export { SimpleUseEffectComponent };
