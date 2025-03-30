import React from 'react';
import SearchBox from '../../../General/SearchBox/SearchBox';
import Button from '../../../General/Button/Button';

function SearchForm({
  type,
  handleSearchOnChange,
  searchValue,
  onSubmitHandleSearch,
}) {
  return (
    <div className="search_form_container">
      <div className="search_form_inner">
        <form className="search_form_main">
          <SearchBox
            type={type}
            handleSearchOnChange={handleSearchOnChange}
            searchValue={searchValue}
            onSubmitHandleSearch={onSubmitHandleSearch}
            placeholder={'Search by name, email or role'}
          />
          <Button
            onSubmitHandleSearch={onSubmitHandleSearch}
            variant={'search'}
            searchValue={searchValue}
          />
        </form>
      </div>
    </div>
  );
}

export default SearchForm;
