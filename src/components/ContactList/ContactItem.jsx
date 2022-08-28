import { useDeleteContactMutation } from '../../redux/Helpers';
import css from './ContactList.module.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactItem = ({ id, name, phone }) => {
  const [deleteContact] = useDeleteContactMutation();
  const handleDeleteContact = async id => {
    await deleteContact(id);
    toast.error('Deleted', {
      duration: 2000,
    });
  };

  return (
    <li key={id} className={css.item}>
      <p>
        {name}: {phone}
      </p>
      <button
        className={css.btnDelete}
        type="button"
        onClick={() => handleDeleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
};

export default ContactItem;
