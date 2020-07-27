import React from 'react';
import PropTypes from 'prop-types';

const Listpage = ({ lists }) => {
  const listElements = lists.map(list => (
    <li key = {list}>
      {list}
    </li>
  ));

  return (
    <ul>
      {listElements}
    </ul>
  );

};
Listpage.propTypes = {
  lists: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Listpage;
