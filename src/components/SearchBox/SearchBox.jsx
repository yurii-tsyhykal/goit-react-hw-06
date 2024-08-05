
const SearchBox = ({ setSearch, search }) => {

  return (
    <div style={{ margin: 20 }}>
      <p>Find contacts by name</p>
      <input
        type="text"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
