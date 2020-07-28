import React from 'react';
import Detailpage from '../../components/Detailpage/Detailpage';
import { useDetailPageHook } from '../../Services/Hooks/DetailsPageHook';

// const DetailsPageContainer = () => {
//   const [name, setName] = useState([]);
//   const [status, setStatus] = useState([]);
//   const [species, setSpecies] = useState([]);
//   const [image, setImage] = useState([]);
//   const { id } = useParams();
//   useEffect(() => {
//     getRickAndMortyCharacter(id)
//       .then(({ name, status, species, image }) => {
//         setName(name);
//         setStatus(status);
//         setSpecies(species);
//         setImage(image);
//       });
//   }, []);

const DetailsPageContainer = () => {

  const {
    name,
    status,
    species,
    image
  } = useDetailPageHook();

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
