import React from 'react';
import { useQuery } from 'react-query';
mport {  rippleLoader, renderFetchError, renderMsgError } from "./ui/LoadAndError";

const fetchPlanets = async () => {
  const res = await fetch('http://swapi.dev/api/planets');
  return res.json();
};

const Planets = () => {
  const { data, loading, error , status } = useQuery('planets', fetchPlanets);
  console.log(status);

  
  if (loading) return rippleLoader();
  if (error) return renderFetchError();
  if (!data) return renderMsgError('Not Found','warning') ;

  return (
    <>
      <h2>Planets</h2>
    
    </>
  );
};

export default Planets;
