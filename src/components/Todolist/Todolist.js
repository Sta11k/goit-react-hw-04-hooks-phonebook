import s from './Todolist.module.css';
import PropTypes from 'prop-types';
// import { Form } from '../Forms/Form';
// import { App } from '../../App';
// import React, { Component } from 'react';

function Todolist({ contactsOll, onDeleteContact, filterContactsOll }) {
  console.log('LIST', contactsOll); // const filterContacts = contactsOll.filter({ name })=> name.toLowerCase().includes(filterContactsOll.toLowerCase());
  const filteredContacts = contactsOll.filter(({ name }) =>
    name.toLowerCase().includes(filterContactsOll.toLowerCase()),
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
              onClick={() => onDeleteContact(id)}
            >
              {' '}
              DELETE contact
            </button>
          </li>
        );
      })}
    </ul>
  );
}
export default Todolist;

Todolist.propTypes = {
  filterContactsOll: PropTypes.string.isRequired,
  contactsOll: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
