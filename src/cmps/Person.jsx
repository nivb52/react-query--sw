import React from 'react';


const Person = ({person}) => {
  return (
    <div className="card">
        <h3>{person.name}</h3>
        <p>Gender - {person.gender}</p>
        <p>Height - {person.height} </p>
        <p>Mass - {person.mass} </p>
        {person.eye_color && <p>Eye color - {person.eye_color} </p> }
    </div>
  );
};

export default Person;
