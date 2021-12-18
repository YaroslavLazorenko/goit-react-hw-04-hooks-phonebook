import { PropTypes } from 'prop-types';
import s from './Filter.module.css';

const Filter = ({ filter, changeFiler }) => {
  const handleChange = ({ target }) => {
    const { value } = target;

    changeFiler(value);
  };

  return (
    <>
      <p className={s.title}>Find contacts by name</p>
      <input
        className={s.inputField}
        type="text"
        name="filter"
        placeholder="Enter name"
        value={filter}
        onChange={handleChange}
      ></input>
    </>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  changeFiler: PropTypes.func.isRequired,
};

export default Filter;
