import { Component } from 'react';
import { PropTypes } from 'prop-types';
import s from './Filter.module.css';

class Filter extends Component {
  static propTypes = {
    filter: PropTypes.string.isRequired,
    changeFiler: PropTypes.func.isRequired,
  };

  handleChange = ({ target }) => {
    const { value } = target;

    this.props.changeFiler(value);
  };

  render() {
    const { filter } = this.props;

    return (
      <>
        <p className={s.title}>Find contacts by name</p>
        <input
          className={s.inputField}
          type="text"
          name="filter"
          placeholder="Enter name"
          value={filter}
          onChange={this.handleChange}
        ></input>
      </>
    );
  }
}

export default Filter;
