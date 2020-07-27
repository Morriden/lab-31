import React, { useEffect, useState } from 'react';
import { getRickAndMortyCharacter } from '../../Services/Services';
import Detailpage from '../../components/Detailpage/Detailpage';
import { useParams } from 'react-router-dom';

const DetailsPageContainer = () => {
  const [name, setName] = useState([]);
  const [status, setStatus] = useState([]);
  const [species, setSpecies] = useState([]);
  const [image, setImage] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    getRickAndMortyCharacter(id)
      .then(({ name, status, species, image }) => {
        setName(name);
        setStatus(status);
        setSpecies(species);
        setImage(image);
      });
  }, []);

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
