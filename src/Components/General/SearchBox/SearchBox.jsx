import React from 'react';
import './SearchBox.css';

function SearchBox({
  type = 'text',
  handleSearchOnChange,
  searchValue,
  placeholder = 'search',
}) {
  return (
    <div className="input_search_container">
      <input
        className={'input_search_box txt'}
        type={type}
        value={searchValue}
        onChange={handleSearchOnChange}
        aria-label="search-box"
        placeholder={placeholder}
      />
    </div>
  );
}

export default SearchBox;
