import { useState, useEffect } from 'react';
import { getRickAndMortyList } from '../FetchCalls';

export const useListPageHook = () => {
  const [lists, setList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPages, setMaxPages] = useState(0);

  const handleClick = ({ target }) => {
    if(target.name === 'next') setCurrentPage(currentPage => currentPage + 1);
    if(target.name === 'previous') setCurrentPage(currentPage => currentPage - 1);
  };

  useEffect(() => {
    getRickAndMortyList(currentPage)
      .then(({ results, info }) => {
        setList(results);
        setMaxPages(info.pages);
      });
  }, [currentPage]);

  return {
    lists,
    currentPage,
    maxPages,
    handleClick
  };
};
