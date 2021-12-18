import { Component } from 'react';
import { PropTypes } from 'prop-types';
import s from './ContactItem.module.css';

class ContactItem extends Component {
  static propTypes = {
    contact: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
    deleteContact: PropTypes.func.isRequired,
  };

  render() {
    const { contact, deleteContact } = this.props;

    return (
      <li className={s.contactItem}>
        <span className={s.contactText}>
          {contact.name}: {contact.number}
        </span>
        <button className={s.button} onClick={() => deleteContact(contact.id)}>
          Delete
        </button>
      </li>
    );
  }
}

export default ContactItem;
