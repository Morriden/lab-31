import React from 'react';
import Listpage from '../../components/Listpage/Listpage';
import { useListPageHook } from '../../Services/Hooks/ListPageHook';

const Data = () => {

  const { lists, handleNextClick, handlePreviousClick } = useListPageHook();

  return (
    <>
      <button onClick={handlePreviousClick}>Previous Page</button>
      <button onClick={handleNextClick}>Next Page</button>
      <Listpage 
        lists={lists}
      />
    </>
  );
};

export default Data;
