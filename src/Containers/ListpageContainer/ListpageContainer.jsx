import React from 'react';
import Listpage from '../../components/Listpage/Listpage';
import { useListPageHook } from '../../Services/Hooks/ListPageHook';

const Data = () => {

  const { lists, maxPages, currentPage, handleClick } = useListPageHook();

  return (
    <>
    {/* add bracket for current page on with cool stuff */}
      {currentPage > 1 && <button name='previous' onClick={handleClick}>Previous Page</button>}
      {currentPage < maxPages && <button name='next' onClick={handleClick}>Next Page</button>}
      <Listpage 
        lists={lists}
      />
    </>
  );
};

export default Data;
