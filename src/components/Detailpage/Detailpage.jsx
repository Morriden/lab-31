import React from 'react';
import PropTypes from 'prop-types';

const Detailpage = ({ name, status, species, image }) => (
  <p>{name}</p>,
  <p>{status}</p>,
  <p>{species}</p>,
  <img src={image} />
);

Detailpage.propTypes = {
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default Detailpage;
