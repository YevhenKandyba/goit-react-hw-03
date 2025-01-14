const SearchBox = ({ value, onChange }) => {
  return (
    <label>
      <span>Find contacts by name</span>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
};

export default SearchBox;
