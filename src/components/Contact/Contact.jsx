import css from './Contact.module.css';
import { RiContactsFill } from 'react-icons/ri';
import { IoCall } from 'react-icons/io5';
const Contact = ({ id, name, number, deleteContact }) => {
  return (
    <>
      <div className={css.userData}>
        <p>
          <RiContactsFill className={css.userIcon} />
          {name}
        </p>
        <p>
          <IoCall className={css.telIcon} />
          {number}
        </p>
      </div>
      <button
        type="button"
        className={css.deleteBtn}
        onClick={() => deleteContact(id)}
      >
        Delete
      </button>
    </>
  );
};

export default Contact;
