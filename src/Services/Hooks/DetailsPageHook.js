import { useState, useEffect } from 'react';
import { getRickAndMortyCharacter } from '../FetchCalls';

export const useDetailPageHook = (id) => {
  const [name, setName] = useState([]);
  const [status, setStatus] = useState([]);
  const [species, setSpecies] = useState([]);
  const [image, setImage] = useState([]);

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
