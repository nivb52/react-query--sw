import React from 'react';
import { useQuery } from 'react-query';
import {  rippleLoader, renderFetchError, renderMsgError } 
from "./ui/LoadAndError.jsx";

const fetchPlanets = async () => {
  const res = await fetch('http://swapi.dev/api/planets');
  return res.json();
};

const Planets = () => {
  const { data, error , status } = useQuery('planets', fetchPlanets);
  console.log('====================================');
  console.log(data);
  console.log('====================================');
  return (
    <>
      <h2>Planets</h2>
      <div style={{display:"flex", justifyContent:"center" }}>

  { status === 'loading' &&  (rippleLoader() )}
  { status === 'error' &&  (renderFetchError() )}
  { data && typeof data === 'Object' && data.hasOwnProerty('results') 
    && !data.resualts.length &&  renderMsgError('Not Found','warning') }

    </div>
    
        <pre> {data && data.results && JSON.stringify(data.results, null, 2) } </pre>
    </>
  );
};

export default Planets;
