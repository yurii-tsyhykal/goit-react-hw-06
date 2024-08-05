import { useEffect, useState } from 'react';
import './App.css';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';

const initialList = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];
const keyLS = 'Contacts';

function App() {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem(keyLS)) ?? initialList
  );
  const [search, setSearch] = useState('');

  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );
  const addContact = newContact => {
    setContacts(prevContacts => [...prevContacts, newContact]);
  };
  const deleteContact = idContact => {
    setContacts(prevContacts => {
      return prevContacts.filter(contact => contact.id !== idContact);
    });
  };
 useEffect(() => {
   localStorage.setItem(keyLS, JSON.stringify(contacts));
 }, [contacts]);
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox setSearch={setSearch} search={search} />
      <ContactList contacts={filterContacts} deleteContact={deleteContact} />
    </div>
  );
}

export default App;
