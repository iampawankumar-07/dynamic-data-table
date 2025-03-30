import React, { useState } from 'react';
import './AdminTableContainer.css';
import { FETCH_MEMBER_SERVICE_API_CONTRACT_DETAILS } from '../Configurations/ApiContracts.Server';
import { useServerFetch } from '../Hooks/useServerFetch';
import LoadingView from '../Components/AdminTableContainer/LoadingView';
import ServerErrorView from '../Components/AdminTableContainer/ServerErrorView';
import TableView from '../Components/AdminTableContainer/TableView/TableView';

function AdminTableContainer() {
  const {
    data,
    errorMsg,
    isLoading,
    setData,
    filteredUsers,
    setFilteredUsers,
  } = useServerFetch({
    currentServerEndpoint: FETCH_MEMBER_SERVICE_API_CONTRACT_DETAILS.ENDPOINT,
    options: FETCH_MEMBER_SERVICE_API_CONTRACT_DETAILS.OPTIONS,
  });

  console.log('data', data);
  console.log('filteredUsers', filteredUsers);
  // console.log('errorMsg', errorMsg);
  // console.log('isLoading', isLoading);

  const [searchValue, setSearchValue] = useState('');
  const [selectedRows, setSelectedRows] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  const handleSearchOnChange = (e) => {
    //add debouncing here
    let value = e.target.value.toLowerCase();

    if (value === '') {
      setFilteredUsers(data);
    }

    setSearchValue(value);
  };

  const onSubmitHandleSearch = (e) => {
    e.preventDefault();

    if (searchValue.length === 0) {
      setFilteredUsers(data);
      return;
    }

    let currentSearchValue = searchValue.toLowerCase();

    const filtered = data.filter(
      (u) =>
        u.name.toLowerCase().includes(currentSearchValue) ||
        u.email.toLowerCase().includes(currentSearchValue) ||
        u.role.toLowerCase().includes(currentSearchValue)
    );
    console.log('------filtered', filtered);
    setFilteredUsers(filtered);
    setCurrentPage(1);
  };

  const handleDelete = () => {
    const ids = selectedRows;

    if (ids.length > 0) {
      setFilteredUsers((prev) => prev.filter((u) => !ids.includes(u.id)));
      setData((prev) => prev.filter((u) => !ids.includes(u.id)));
      setSelectedRows([]);
    }
  };

  const renderMainContainer = () => {
    if (isLoading) {
      return <LoadingView />;
    } else {
      if (errorMsg) {
        return <ServerErrorView errorMsg={errorMsg} />;
      } else if (data && data.length > 0) {
        return (
          <TableView
            data={data}
            selectedRows={selectedRows}
            setSelectedRows={setSelectedRows}
            updateUsers={setFilteredUsers}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            filteredUsers={filteredUsers}
            rowsPerPage={rowsPerPage}
            handleSearchOnChange={handleSearchOnChange}
            onSubmitHandleSearch={onSubmitHandleSearch}
            searchValue={searchValue}
            deleteSelectedItems={handleDelete}
          />
        );
      }
    }
  };

  return (
    <div className="admin_details_outer">
      <div className="admin_details_main_container">
        <div className="admin_details_main">{renderMainContainer()}</div>
      </div>
    </div>
  );
}

export default AdminTableContainer;
