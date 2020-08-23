import React from 'react';
import { useQuery } from 'react-query';

import {  rippleLoader, renderFetchError, renderMsgError } 
from "./ui/LoadAndError.jsx";
import Planet from "./Planet";

const fetchPlanets = async () => {
  const res = await fetch('http://swapi.dev/api/planets');
  return res.json();
};

const Planets = () => {
  const { data, error , status } = useQuery('planets', fetchPlanets);
  return (
    <>
      <h2>Planets</h2>
      <div style={{display:"flex", justifyContent:"center" }}>

  { status === 'loading' &&  (rippleLoader() )}
  { status === 'error' &&  (renderFetchError() )}
  { data && typeof data === 'object' && data.hasOwnProperty('results') 
    && !data.results.length &&  renderMsgError('Not Found','warning') }

    </div>
        {data && data.results && 
         data.results.map ( planet =>  <Planet planet = {planet} key={planet.name}/>
         )
         } 
    </>
  );
};

export default Planets;
