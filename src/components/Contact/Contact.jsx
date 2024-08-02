import css from './Contact.module.css';
import { RiContactsFill } from 'react-icons/ri';
import { IoCall } from 'react-icons/io5';
const Contact = ({ name, number }) => {
  return (
    <>
      <div className={css.userData}>
        <p>
                  <RiContactsFill className={css.userIcon} />
          {name}
        </p>
              <p><IoCall className={css.telIcon} />{number}</p>
      </div>
      <button type="button" className={css.deleteBtn}>
        Delete
      </button>
    </>
  );
};

export default Contact;
