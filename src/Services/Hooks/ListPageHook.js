import { useState, useEffect } from 'react';
import { getRickAndMortyList } from '../FetchCalls';

export const useListPageHook = () => {
  const [lists, setList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  
  const handleNextClick = () => {
    getRickAndMortyList(currentPage + 1)
      .then(({ results }) => {
        setList(results);
        setCurrentPage(currentPage + 1);
      });
  };
  
  const handlePreviousClick = () => {
    getRickAndMortyList(currentPage - 1)
      .then(({ results }) => {
        setList(results);
        setCurrentPage(currentPage - 1);
      });
  };

  useEffect(() => {
    getRickAndMortyList(currentPage)
      .then(({ results }) => {
        setList(results);
      });
  }, [currentPage]);

  return {
    lists,
    handleNextClick,
    handlePreviousClick
  };
};
