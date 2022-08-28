import { useDeleteContactMutation } from '../../redux/Helpers';
import css from './ContactList.module.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactItem = ({ id, name, phone }) => {
  const [deleteContact, { isLoading: isDeliting }] = useDeleteContactMutation();
  if (isDeliting) {
    toast.success(`Deleted`);
  }
  return (
    <li key={id} className={css.item}>
      <p>
        {name}: {phone}
      </p>
      <button
        className={css.btnDelete}
        type="button"
        onClick={() => deleteContact(id)}
        disabled={isDeliting}
      ></button>
    </li>
  );
};

export default ContactItem;
