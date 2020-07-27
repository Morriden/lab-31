import React, { useEffect, useState } from 'react';
import { getRickAndMortyList } from '../../Services/Services';
import Listpage from '../../components/Listpage/Listpage';

const Data = () => {
  const [lists, setList] = useState([]);
  
  useEffect(() => {
    getRickAndMortyList()
      .then(({ results }) => {
        setList(results);
      });
  }, []);

  return (
    <Listpage 
      lists={lists}
    />
  );
};

export default Data;
