import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Listpage = ({ lists }) => {
  const listElements = lists.map(list => (
    <li key={list.id}>
      <div>
        {list.name}
      </div>
      <img src={list.image} />
      <Link to={`/character/${list.id}`}>
        <button>More Details</button>
      </Link>
    </li>
  ));

  return (
    <ul>
      {listElements}
    </ul>
  );
};

Listpage.propTypes = {
  lists: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Listpage;
