const Contact = ({ name, number, onDelete }) => {
  return (
    <li>
      <p>{name}</p>
      <p>{number}</p>
      <button onClick={onDelete}>Delete</button>
    </li>
  );
};

export default Contact;
