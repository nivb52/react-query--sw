import React from 'react';


const Person = ({person}) => {
  return (
    <div className="card">
        <h3>{Person.name}</h3>
        <p>Population - {Person.population}</p>
        <p>Terrain - {Person.terrain} </p>
    </div>
  );
};

export default Person;
