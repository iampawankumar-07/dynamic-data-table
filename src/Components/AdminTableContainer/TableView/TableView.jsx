import React from 'react';
import SearchForm from './SearchForm/SearchForm';
import Button from '../../General/Button/Button';
import Table from './Table';
import Pagination from '../../General/Pagination/Pagination';

function TableView({
  data,
  selectedRows,
  setSelectedRows,
  updateUsers,
  currentPage,
  setCurrentPage,
  filteredUsers,
  rowsPerPage,
  type = 'text',
  handleSearchOnChange,
  searchValue,
  onSubmitHandleSearch,
  deleteSelectedItems,
}) {
  return (
    <div className="table_view_outer">
      <div className="table_view_inner">
        <SearchForm
          type={type}
          handleSearchOnChange={handleSearchOnChange}
          searchValue={searchValue}
          onSubmitHandleSearch={onSubmitHandleSearch}
        />

        <Table
          users={filteredUsers.slice(
            (currentPage - 1) * rowsPerPage,
            currentPage * rowsPerPage
          )}
          selectedRows={selectedRows}
          setSelectedRows={setSelectedRows}
          updateUsers={updateUsers}
        />

        {filteredUsers.length > 0 && (
          <div className="footer mt-10">
            <Button
              type={'button'}
              onSubmitHandleSearch={deleteSelectedItems}
              variant={'delete'}
              btnText={'Delete Selected'}
            />
            <Pagination
              totalRows={filteredUsers.length}
              rowsPerPage={rowsPerPage}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default TableView;
