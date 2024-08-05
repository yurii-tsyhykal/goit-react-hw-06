import Contact from '../Contact/Contact';
import css from './ContactList.module.css'

const ContactList = ({ contacts, deleteContact }) => {
  
  return (
    <ul className={css.contactsList}>
      {contacts.map(({ id, ...contact }) => (
        <li key={id} className={css.listItem}>
          <Contact id={id}{...contact} deleteContact={deleteContact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
