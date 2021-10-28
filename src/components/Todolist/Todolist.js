import s from './Todolist.module.css';
import PropTypes from 'prop-types';
// import { Form } from '../Forms/Form';
// import { App } from '../../App';
import React from 'react';

const Todolist = ({ contacts, handleDeleteContact, filterTextSearch }) => {
  console.log('LIST', contacts); // const filterContacts = contactsOll.filter({ name })=> name.toLowerCase().includes(filterContactsOll.toLowerCase());
  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filterTextSearch.toLowerCase()),
  );

  return (
    <ul className={s.contacts__list}>
      {filteredContacts.map(({ id, name, number, association }) => {
        return (
          <li key={id} className={s.item}>
            {' '}
            <p className={s.name__contact}>
              Association: {association} | <span> name: {name} | </span>
              <span>number: {number} |</span>
            </p>
            <button
              className={s.btn}
              type="button"
              onClick={() => handleDeleteContact(id)}
            >
              {' '}
              DELETE contact
            </button>
          </li>
        );
      })}
    </ul>
  );
};

Todolist.propTypes = {
  filterTextSearch: PropTypes.string.isRequired,
  contacts: PropTypes.array.isRequired,
  handleDeleteContact: PropTypes.func.isRequired,
};
export default Todolist;
