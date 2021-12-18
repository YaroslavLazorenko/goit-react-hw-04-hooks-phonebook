import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';
import { save, load } from './api/storageAPI';
import './App.css';

class App extends Component {
  state = { contacts: [], filter: '' };

  deleteContact = id => {
    const contactsAfterDelete = this.state.contacts.reduce((acc, contact) => {
      return contact.id !== id ? [...acc, contact] : acc;
    }, []);
    this.setState({ contacts: contactsAfterDelete });
    save('contacts', contactsAfterDelete);
  };

  isContactAlreadySaved = name => {
    return this.state.contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());
  };

  updateContacts = (name, number) => {
    if (this.isContactAlreadySaved(name)) {
      return alert(`${name} is already in contacts.`);
    }

    const newContact = { id: nanoid(), name, number };
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, newContact],
      };
    });
    save('contacts', [...this.state.contacts, newContact]);
  };

  updateFilter = value => {
    this.setState({ filter: value });
  };

  componentDidMount() {
    const contacts = load('contacts');
    if (contacts) this.setState({ contacts });
  }

  render() {
    const { contacts, filter } = this.state;

    return (
      <div className="App">
        <h1 className="phonebookTitle">Phonebook</h1>
        <ContactForm addContact={this.updateContacts} />

        <h2 className="contactsTitle">Contacts</h2>
        <Filter filter={filter} changeFiler={this.updateFilter} />
        {contacts.length !== 0 && (
          <ContactList contacts={contacts} filter={filter} deleteContact={this.deleteContact} />
        )}
      </div>
    );
  }
}

export default App;
