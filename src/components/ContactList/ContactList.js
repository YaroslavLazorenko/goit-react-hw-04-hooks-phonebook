import { Component } from 'react';
import { PropTypes } from 'prop-types';
import ContactItem from '../ContactItem';
import s from './ContactList.module.css';

class ContactList extends Component {
  static propTypes = {
    contacts: PropTypes.array.isRequired,
    filter: PropTypes.string.isRequired,
  };

  render() {
    const { contacts, filter, deleteContact } = this.props;

    return (
      <ul className={s.list}>
        {contacts
          .filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
          .map(contact => {
            return (
              <ContactItem contact={contact} key={contact.name} deleteContact={deleteContact} />
            );
          })}
      </ul>
    );
  }
}

export default ContactList;
