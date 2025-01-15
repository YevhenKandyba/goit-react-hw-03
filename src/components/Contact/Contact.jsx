import { FaUser } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import s from "./Contact.module.css";

const Contact = ({ name, number, onDelete }) => {
  return (
    <li className={s.contact}>
      <div className={s.valie}>
        <p>
          <FaUser className={s.icon} />
          {name}
        </p>
        <p>
          <FaPhone className={s.icon} />
          {number}
        </p>
      </div>
      <button className={s.cntBtn} onClick={onDelete}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
