import React from 'react';
import { useState } from 'react';
// import { Component } from 'react';
import s from './Form.module.css';
import shortid from 'shortid';

const initialContact = {
  name: '',
  number: '',
  association: 'Other',
};

const Form = ({ contacts, hendlerSubmitForm }) => {
  const [contact, setContact] = useState(initialContact);
  //  const [id, setId] = useState('');
  const handleChange = e =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const handleSabmit = e => {
    e.preventDefault();

    for (const { name } of contacts) {
      if (name === contact.name) {
        alert(`${name} is already in contacts`);

        return;
      }
    }

    const addContact = {
      id: shortid.generate(),
      name: contact.name,
      number: contact.number,
      association: contact.association,
    };

    hendlerSubmitForm(addContact);

    setContact({ id: '', name: '', number: '', association: 'Other' });
  };

  const { name, number, association } = contact;
  return (
    <form onSubmit={handleSabmit} className={s.m}>
      <h2 className={s.title}>Phonebook</h2>
      <label className={s.form__name}>
        Name
        <input
          // id={contactIdName}
          onChange={handleChange}
          type="text"
          value={name}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>
      <label className={s.form__number}>
        Number
        <input
          // id={contactIdNumber}
          onChange={handleChange}
          type="tel"
          value={number}
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </label>

      <div className={s.radio__btn}>
        <label>
          <input
            type="radio"
            name="association"
            value="Work"
            onChange={handleChange}
            checked={association === 'Work'}
          />
          Work
        </label>
        <label>
          <input
            type="radio"
            name="association"
            value="Family"
            onChange={handleChange}
            checked={association === 'Family'}
          />
          Family
        </label>
        <label>
          <input
            type="radio"
            name="association"
            value="Friends"
            onChange={handleChange}
            checked={association === 'Friends'}
          />
          Friends
        </label>
        <label>
          <input
            type="radio"
            name="association"
            value="Other"
            onChange={handleChange}
            checked={association === 'Other'}
          />
          Other
        </label>
      </div>
      <button type="submit">Add contacts</button>
    </form>
  );
};

export default Form;
