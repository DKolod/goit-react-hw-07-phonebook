// import React, { Component } from 'react';
import { useState } from 'react';

import css from './ContactForm.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  useAddContactMutation,
  useGetContactsQuery,
} from '../../redux/Helpers';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const { data } = useGetContactsQuery();
  const [addContact] = useAddContactMutation();

  const handleChange = e => {
    if (e.target.name === 'name') {
      setName(e.target.value);
    }

    if (e.target.name === 'number') {
      setNumber(e.target.value);
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (
      data.find(
        contact => contact.name.toLocaleLowerCase() === name.toLocaleLowerCase()
      )
    ) {
      reset();
      return toast.warning(`${name} alredy have`);
    }

    if (name && number) {
      await addContact({ name: name, phone: number });
      toast.success(`Done`);
      reset();
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label className={css.label}>
        <span className={css.nameForm}>Name</span>
        {/* Name */}
        <input
          onChange={handleChange}
          type="text"
          name="name"
          value={name}
          placeholder={'Enter name'}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces.
         For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={css.label}>
        Number
        <input
          onChange={handleChange}
          type="tel"
          name="number"
          value={number}
          placeholder={'Enter number'}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes,
         parentheses and can start with +"
          required
        />
      </label>
      <button type="submit">Add contact</button>
      <ToastContainer theme="colored" autoClose={2000} />
    </form>
  );
}
