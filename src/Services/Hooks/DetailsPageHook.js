import { useState, useEffect } from 'react';
import { getRickAndMortyCharacter } from '../FetchCalls';
import { useParams } from 'react-router-dom';

export const useDetailPageHook = () => {
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

  return {
    name,
    status,
    species,
    image
  };
};
