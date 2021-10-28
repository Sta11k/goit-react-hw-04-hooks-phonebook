import './App.css';
// import { Component } from 'react';
import Form from './components/Forms/Form';
import TodoList from './components/Todolist/Todolist';
import Filter from './components/Filter/Filter';
// import { v4 as uuid } from 'uuid';
import { useEffect, useState } from 'react';

function App() {
  const localStoragecontactsOll = 'contactsOll';
  const [contactsOll, setContactsOll] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const tartegContsact = JSON.parse(
      localStorage.getItem(localStoragecontactsOll),
    );

    if (tartegContsact) {
      setContactsOll(tartegContsact);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(localStoragecontactsOll, JSON.stringify(contactsOll));
  }, [contactsOll]);

  const hendlerSubmitForm = addContact => {
    setContactsOll([...contactsOll, addContact]);
    // const contactId = uuid();
    // const contact = {
    //   id: contactId,
    //   name,
    //   number,
    //   association,
  };
  const handleFilter = event => setFilter(event.target.value);
  const deleteContact = id => {
    const filtercontactsOll = contactsOll.filter(contact => contact.id !== id);
    setFilter(filtercontactsOll);
  };

  return (
    <div className="App">
      <Form OnSubmit={hendlerSubmitForm} contactsOll={contactsOll} />

      <Filter filterContactsOll={filter} handleFilter={handleFilter} />

      {/* <TodoList contactsOll={visibleContacts} onDeleteContact={deleteContact} /> */}
      <TodoList
        contactsOll={contactsOll}
        filterContactsOll={filter}
        onDeleteContact={deleteContact}
      />
    </div>
  );
}

export default App;
