import React from 'react';
import TableRow from './TableRow';
import EmptyTableView from '../EmptyTableView/EmptyTableView';

function Table({ users, selectedRows, setSelectedRows, updateUsers }) {
  const selectAll = (e) => {
    setSelectedRows(e.target.checked ? users.map((u) => u.id) : []);
  };

  return (
    <div className="table_outer_container">
      <table className="table">
        <thead>
          <tr>
            <th>
              <input
                className="txt"
                type="checkbox"
                onChange={selectAll}
                checked={
                  users.every((u) => selectedRows.includes(u.id)) &&
                  users.length > 0
                }
              />
            </th>
            <th className="txt">Name</th>
            <th className="txt">Email</th>
            <th className="txt">Role</th>
            <th className="txt">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <TableRow
              key={user.id}
              user={user}
              selectedRows={selectedRows}
              setSelectedRows={setSelectedRows}
              updateUsers={updateUsers}
            />
          ))}
          {users.length === 0 && <EmptyTableView />}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
