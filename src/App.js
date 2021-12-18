import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';
import { save, load } from './services/storage-api';
import './App.css';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const contacts = load('contacts');
    if (contacts) setContacts(contacts);
  }, []);

  const deleteContact = id => {
    const contactsAfterDelete = contacts.reduce((acc, contact) => {
      return contact.id !== id ? [...acc, contact] : acc;
    }, []);

    setContacts(contactsAfterDelete);
    save('contacts', contactsAfterDelete);
  };

  const isContactAlreadySaved = name => {
    return contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());
  };

  const updateContacts = (name, number) => {
    if (isContactAlreadySaved(name)) {
      return alert(`${name} is already in contacts.`);
    }

    const newContact = { id: nanoid(), name, number };
    setContacts(prevContacts => [...prevContacts, newContact]);
    save('contacts', [...contacts, newContact]);
  };

  return (
    <div className="App">
      <h1 className="phonebookTitle">Phonebook</h1>
      <ContactForm addContact={updateContacts} />

      <h2 className="contactsTitle">Contacts</h2>
      <Filter filter={filter} changeFiler={setFilter} />
      {contacts.length !== 0 && (
        <ContactList contacts={contacts} filter={filter} deleteContact={deleteContact} />
      )}
    </div>
  );
};

export default App;
