import React from 'react';
import s from './Filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({ filterTextSearch, handleFilter }) => {
  return (
    <label className={s.label}>
      Find contacts by name
      <input
        className={s.input}
        type="text"
        value={filterTextSearch}
        onChange={handleFilter}
      />
    </label>
  );
};

Filter.propTypes = {
  filterTextSearch: PropTypes.string.isRequired,
  handleFilter: PropTypes.func.isRequired,
};

export default Filter;
