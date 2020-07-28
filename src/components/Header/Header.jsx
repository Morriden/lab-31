import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <Link to={'/'}>
        <h1>Back To Main Page</h1>
      </Link>
    </header>
  );
};

export default Header;
