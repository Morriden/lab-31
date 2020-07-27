import React from 'react';
import PropTypes from 'prop-types';

const Detailpage = ({ name, status, species, image }) => (
  <section>
    <div>{name}</div>,
    <div>{status}</div>,
    <div>{species}</div>,
    <img src={image} />
  </section>
);

Detailpage.propTypes = {
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default Detailpage;
