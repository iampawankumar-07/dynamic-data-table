import React from 'react';
import './SearchBox.css';

function SearchBox({
  type = 'text',
  handleSearchOnChange,
  searchValue,
  placeholder = 'search',
  currentClassName = null,
  name= null
}) {
  return (
    <div className="input_search_container">
      <input
        className={currentClassName ? currentClassName : 'input_search_box txt'}
        type={type}
        value={searchValue}
        onChange={handleSearchOnChange}
        aria-label="search-box"
        placeholder={placeholder}
        name={name ? name : ''}
      />
    </div>
  );
}

export default SearchBox;
