import React, { useEffect, useState } from 'react';

import './App.css';

import Form from './components/Forms/Form';
import TodoList from './components/Todolist/Todolist';
import Filter from './components/Filter/Filter';
// import { v4 as uuid } from 'uuid';

const localStorageKey = 'contacts';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const currentTartegContsacts = JSON.parse(
      localStorage.getItem(localStorageKey),
    );

    if (currentTartegContsacts) {
      setContacts(currentTartegContsacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(contacts));
  }, [contacts]);

  const hendlerSubmitForm = addContact =>
    setContacts([...contacts, addContact]);

  const handleFilter = e => setFilter(e.target.value);

  const handleDeleteContact = id => {
    const filtercontacts = contacts.filter(contact => contact.id !== id);
    setContacts(filtercontacts);
  };
  // console.log(handleFilter);

  return (
    <div className="App">
      <Form hendlerSubmitForm={hendlerSubmitForm} contacts={contacts} />

      <Filter filterTextSearch={filter} handleFilter={handleFilter} />

      <TodoList
        contacts={contacts}
        filterTextSearch={filter}
        handleDeleteContact={handleDeleteContact}
      />
    </div>
  );
};

export default App;
