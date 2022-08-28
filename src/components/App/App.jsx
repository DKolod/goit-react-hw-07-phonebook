// import React, { Component } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { addContact, deleteContact, setContact } from '../../redux/Slice';
import { useGetContactsQuery } from '../../redux/Helpers';
import { useState } from 'react';
import css from './App.module.css';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';

export function App() {
  const [filter, setFilter] = useState('');
  const { data } = useGetContactsQuery();

  const isVisibleContacts = () => {
    if (data) {
      if (data.length !== 0) {
        return data.filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        );
      }
    }
    return;
  };

  const changeFilter = e => {
    setFilter(e.target.value);
  };

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <div className={css.wrap}>
        <ContactForm />
      </div>
      <h2 className={css.titleSection}>Contacts</h2>

      <Filter filter={filter} onChange={changeFilter} />
      <ContactList contacts={isVisibleContacts()} />
    </div>
  );
}
