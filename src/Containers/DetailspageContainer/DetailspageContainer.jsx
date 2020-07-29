import React from 'react';
import Detailpage from '../../components/Detailpage/Detailpage';
import { useDetailPageHook } from '../../Services/Hooks/DetailsPageHook';
import { useParams } from 'react-router-dom';

const DetailsPageContainer = () => {

  const { id } = useParams();

  const {
    name,
    status,
    species,
    image
  } = useDetailPageHook(id);

  return (
    <Detailpage 
      name={name}
      status={status}
      species={species}
      image={image}
    />
  );
};

export default DetailsPageContainer;
