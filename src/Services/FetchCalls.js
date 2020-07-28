export const getRickAndMortyList = () => {
  return fetch('https://rickandmortyapi.com/api/character/')
    .then(res => res.json());
};

export const getRickAndMortyCharacter = (id) => {
  return fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then(res => res.json());
};
