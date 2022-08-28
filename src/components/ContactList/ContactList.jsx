import css from './ContactList.module.css';
import ContactItem from './ContactItem';

const ContactList = ({ contacts }) => {
  return (
    <ul className={css.list}>
      {contacts &&
        contacts.map(({ name, phone, id }) => (
          <ContactItem
            key={id}
            id={id}
            data={contacts}
            name={name}
            phone={phone}
          />
        ))}
    </ul>
  );
};

export default ContactList;
