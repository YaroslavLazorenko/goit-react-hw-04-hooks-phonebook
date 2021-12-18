import { PropTypes } from 'prop-types';
import ContactItem from '../ContactItem';
import s from './ContactList.module.css';

const ContactList = ({ contacts, filter, deleteContact }) => {
  return (
    <ul className={s.list}>
      {contacts
        .filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
        .map(contact => {
          return <ContactItem contact={contact} key={contact.name} deleteContact={deleteContact} />;
        })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
};

export default ContactList;
