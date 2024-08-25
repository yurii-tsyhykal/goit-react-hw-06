import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  return (
    <div style={{ margin: 20 }}>
      <p>Find contacts by name</p>
      <input
        type="text"
        onChange={e => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
};

export default SearchBox;
