'use client';
import React, { useState } from 'react';

const Header: React.FC = () => {
  const [favoritecolor, setFavoritecolor] = useState('red');

  return <h1>My Favorite Color is {favoritecolor}</h1>;
};

export { Header };
