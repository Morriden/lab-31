import { useState, useEffect } from 'react';
import { getRickAndMortyList } from '../FetchCalls';

export const useListPageHook = () => {
  const [lists, setList] = useState([]);
  
  useEffect(() => {
    getRickAndMortyList()
      .then(({ results }) => {
        setList(results);
      });
  }, []);

  return {
    lists
  };
};
