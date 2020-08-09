import React from 'react';
import Navbar from './cmps/Navbar';
import People from './cmps/People';
import Planets from './cmps/Planets';

function App() {
  const [page, setPage] = React.useState();

  return (
    <div className="app">
      <h1> Star Wars </h1>
      <Navbar setPage={setPage} />
      <div className="content">
        {page === 'People' ? <People /> : <Planets />}
      </div>
    </div>
  );
}

export default App;
