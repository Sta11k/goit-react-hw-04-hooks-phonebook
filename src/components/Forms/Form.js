import React from 'react';
import { useState } from 'react';
// import { Component } from 'react';
import s from './Form.module.css';
import { v4 as uuid } from 'uuid';

const initialState = {
  name: '',
  number: '',
  association: 'Other',
};

function Form(contactsOll, hendlerSubmitForm) {
  let contactIdName = uuid();
  let contactIdNumber = uuid();
  const [contact, setContact] = useState(initialState);

  // const [id, setId] = useState('');
  // const [name, setName] = useState('');
  // const [number, setNumber] = useState('');
  // const [association, setAssociation] = useState('Other');

  const handleChange = e => {
    setContact({ ...contact, [e.target.name]: e.target.value });

    // const { name, value } = e.currentTarget;
    // switch (name) {
    //   // case 'id':
    //   //   setId(() => contactIdName);
    //   //   break;
    //   case 'name':
    //     setName(value);
    //     break;
    //   case 'number':
    //     setNumber(value);
    //     break;
    //   case 'association':
    //     setAssociation(value);
    //     break;
    //   default:
    //     break;
  };
  // console.log(setId(value));

  const handleSabmit = e => {
    e.preventDefault();
    console.log('NAME', name);
    console.log(contactsOll);
    for (const { name } of contactsOll) {
      if (name === contact.name) {
        alert(`${name} is already in contacts`);

        return;
      }
    }
    const newContact = {
      id: contactIdName,
      name: contact.name,
      number: contact.number,
      association: contact.association,
    };

    hendlerSubmitForm(newContact);

    setContact({ name: '', number: '', association: 'Other' });
    // setId(() => contactIdName);
    // console.log(id, name, number, association);
    //  const { name, number, association } = this.state;
    // this.setState({
    //   // id,
    //   name,
    //   number,
    //   association,
    // });
    // this.setState({ contactPhone });
    // OnSubmit(name, number, association);

    // setId('');
    // setName('');
    // setNumber('');
    // setAssociation('Other');
  };

  // const resetForm = () => {
  //    setId = '';
  //    setName = '';
  //    setNumber = '';
  //   setAssociation = 'Other';
  // };

  const { name, number, association } = contact;
  return (
    <form onSubmit={handleSabmit} className={s.m}>
      <h2 className={s.title}>Phonebook</h2>
      <label htmlFor={contactIdName} className={s.form__name}>
        Name
        <input
          id={contactIdName}
          onChange={handleChange}
          type="text"
          value={name}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>
      <label htmlFor={contactIdNumber} className={s.form__number}>
        Number
        <input
          id={contactIdNumber}
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
}

export default Form;
