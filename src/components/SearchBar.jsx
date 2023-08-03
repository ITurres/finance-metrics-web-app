import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { searchCompanies } from '../redux/companies/companiesSlice.js';

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('');
  const [showSearchBar, setShowSearchBar] = useState(true);
  const dispatch = useDispatch();

  const onHandleChange = (e) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    dispatch(searchCompanies(searchValue));
  }, [searchValue, dispatch]);

  return (
    <>
      {showSearchBar ? (
        <button
          type="button"
          aria-label="search"
          className="btn p-1"
          data-testid="search-button"
          onClick={() => setShowSearchBar(!showSearchBar)}
        >
          <FaSearch color="white" size={20} />
        </button>
      ) : (
        <input
          type="search"
          placeholder="Search..."
          onChange={onHandleChange}
          className="search-bar form-control w-50"
          data-testid="search-input"
        />
      )}
    </>
  );
};

export default SearchBar;
