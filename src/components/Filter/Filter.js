import s from './Filter.module.css';
import PropTypes from 'prop-types';

function Filter({ filterContactsOll, handleFilter }) {
  return (
    <label className={s.label}>
      Find contacts by name
      <input
        className={s.input}
        type="text"
        value={filterContactsOll}
        onChange={handleFilter}
      />
    </label>
  );
}

Filter.propTypes = {
  filterContactsOll: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
