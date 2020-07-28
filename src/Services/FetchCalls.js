export const getRickAndMortyList = (currentPage) => {
  return fetch(`https://rickandmortyapi.com/api/character/?page=${currentPage}`)
    .then(res => res.json());
};

export const getRickAndMortyCharacter = (id) => {
  return fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then(res => res.json());
};
