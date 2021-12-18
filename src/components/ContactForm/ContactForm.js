import { Component } from 'react';
import { PropTypes } from 'prop-types';
import s from './ContactForm.module.css';

const INITIAL_FORM_STATE = { name: '', number: '' };

class ContactForm extends Component {
  static propTypes = { addContact: PropTypes.func.isRequired };

  state = { name: '', number: '' };

  resetForm = () => {
    this.setState(INITIAL_FORM_STATE);
  };

  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.addContact(this.state.name, this.state.number);
    this.resetForm();
  };

  render() {
    const { name, number } = this.state;

    return (
      <form className={s.form} action="#" onSubmit={this.handleSubmit}>
        <label className={s.label} htmlFor="name">
          Name:
        </label>
        <input
          className={s.inputField}
          id="name"
          type="text"
          name="name"
          placeholder="Enter name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={this.handleChange}
        />
        <label className={s.label} htmlFor="number">
          Number:
        </label>
        <input
          className={s.inputField}
          id="number"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          placeholder="Enter phone"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={this.handleChange}
        />

        <button className={s.button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
