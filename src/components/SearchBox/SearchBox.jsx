import s from "./SearchBox.module.css";

const SearchBox = ({ value, onChange }) => {
  return (
    <label className={s.search}>
      <span>Find contacts by name</span>
      <input
        className={s.field}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
};

export default SearchBox;
