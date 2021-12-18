import { PropTypes } from 'prop-types';
import s from './ContactItem.module.css';

const ContactItem = ({ contact, deleteContact }) => {
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
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  deleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
