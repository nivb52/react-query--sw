import React from 'react';
import { useQuery } from 'react-query';

const fetchPlanets = async () => {
  const res = await fetch('http://swapi.dev/api/planets');
  return res.json();
};

const Planets = () => {
  const { data, status } = useQuery('planets', fetchPlanets);
  console.log(data);

  return (
    <>
      <h2>Planets</h2>
    </>
  );
};

export default Planets;