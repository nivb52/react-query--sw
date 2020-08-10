import React from 'react';

const Navbar = ({ setPage }) => {
  return (
    <div className="navbar">
      <button onClick={() => setPage('People')}>People</button>
      <button onClick={() => setPage('Planets')}>Planets</button>
    </div>
  );
};

export default Navbar;
