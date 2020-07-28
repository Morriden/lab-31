import React from 'react';
import Listpage from '../../components/Listpage/Listpage';
import { useListPageHook } from '../../Services/Hooks/ListPageHook';

const Data = () => {
  // const [lists, setList] = useState([]);
  
  // useEffect(() => {
  //   getRickAndMortyList()
  //     .then(({ results }) => {
  //       setList(results);
  //     });
  // }, []);

  const { lists } = useListPageHook();

  return (
    <Listpage 
      lists={lists}
    />
  );
};

export default Data;
