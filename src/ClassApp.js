import './App.css';
import { Component } from 'react';
import Form from './components/Forms/Form';
import TodoList from './components/Todolist/Todolist';
import Filter from './components/Filter/Filter';
import { v4 as uuid } from 'uuid';

class App extends Component {
  state = {
    contactsOll: [],

    filter: '',
  };

  hendlerSubmitForm = ({ name, number, association }) => {
    const contactId = uuid();
    const contact = {
      id: contactId,
      name,
      number,
      association,
    };
    console.log('contact ', contact.name);
    this.state.contactsOll.some(el => el.name === contact.name)
      ? alert(`${contact.name} is already in contactsOll`)
      : this.setState(prevState => {
          return { contactsOll: [contact, ...prevState.contactsOll] };
        });
  };

  deleteContact = contactId => {
    this.setState(({ contactsOll }) => ({
      contactsOll: contactsOll.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contactsOll, filter } = this.state;
    const optimizedFilter = filter.toLowerCase();

    return contactsOll.filter(contact =>
      contact.name.toLowerCase().includes(optimizedFilter),
    );
  };

  componentDidMount() {
    const contactsOll = localStorage.getItem('contactsOll');
    const parsedcontactsOll = JSON.parse(contactsOll);
    if (parsedcontactsOll) {
      this.setState({ contactsOll: parsedcontactsOll });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contactsOll !== prevState.contactsOll) {
      localStorage.setItem(
        'contactsOll',
        JSON.stringify(this.state.contactsOll),
      );
    }
  }

  render() {
    const { contactsOll, filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
    // console.log(this.state.contactsOll);

    return (
      <div className="App">
        <Form OnSubmit={this.hendlerSubmitForm} />
        {contactsOll.length > 1 && (
          <Filter value={filter} onChange={this.changeFilter} />
        )}

        <TodoList
          contactsOll={visibleContacts}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
