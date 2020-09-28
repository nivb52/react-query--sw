import React from 'react';
import Navbar from './cmps/Navbar';
import Persons from './cmps/Persons';
import Planets from './cmps/Planets';
import { ReactQueryDevtools } from 'react-query-devtools';

function App() {
  const [page, setPage] = React.useState();
  return (
    <>
    <div className="app">
      <h1> Star Wars </h1>
      <Navbar setPage={setPage} />
      <div className="content">
        {page === 'Persons' ? <Persons /> : <Planets />}
      </div>
    </div>
    {/* <ReactQueryDevtools initialIsOpen={false} /> */}
  </>
  );
}

export default App;
