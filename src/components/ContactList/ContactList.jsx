import Contact from '../Contact/Contact';
import css from './ContactList.module.css'

const ContactList = ({ contacts }) => {
  return (
    <ul className={css.contactsList}>
      {contacts.map(({ id, ...contact }) => (
        <li key={id} className={css.listItem}>
          <Contact {...contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
