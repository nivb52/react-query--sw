import React from 'react';

const Navbar = ({ setPage }) => {
  return (
    <>
      <button onClick={() => setPage('People')}>People</button>
      <button onClick={() => setPage('Planets')}>Planets</button>
    </>
  );
};

export default Navbar;
