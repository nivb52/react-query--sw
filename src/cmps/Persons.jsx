import React from 'react';
import { useQuery } from 'react-query';

import {  rippleLoader, renderFetchError, renderMsgError } 
from "./ui/LoadAndError.jsx";
import Person from "./Person";

const fetchPersons = async () => {
  const res = await fetch('http://swapi.dev/api/people');
  return res.json();
};

const Persons = () => {
  const { data, error , status } = useQuery('persons', fetchPersons);
  return (
    <>
      <h2>Persons</h2>
      <div style={{display:"flex", justifyContent:"center" }}>

  { status === 'loading' &&  (rippleLoader() )}
  { status === 'error' &&  (renderFetchError() )}
  { data && typeof data === 'object' && data.hasOwnProperty('results') 
    && !data.results.length &&  renderMsgError('Not Found','warning') }

    </div>
        {data && data.results && 
         data.results.map ( person =>  <Person person = {person} key={Person.name}/>
         )
         } 
    </>
  );
};

export default Persons;
