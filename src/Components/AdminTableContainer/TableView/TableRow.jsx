import { CircleX, Delete, Edit, Save, Trash } from 'lucide-react';
import React, { useState } from 'react';
import SearchBox from '../../General/SearchBox/SearchBox';
import FloatingButton from '../../General/Button/FloatingButton';

function TableRow({ user, selectedRows, setSelectedRows, updateUsers }) {

  console.log('-------user', Object.keys(user))

  const [edit, setEdit] = useState(false);
  const [userData, setUserData] = useState({ ...user });

  const saveEdit = () => {
    const checkEMptyValues =
      Object.values(userData).filter((item) => item === '').length > 0;
    console.log('---checkEMptyValues', checkEMptyValues);
    if (checkEMptyValues) {
      return;
    }

    updateUsers((prev) => prev.map((u) => (u.id === user.id ? userData : u)));
    setEdit(false);
  };

  const deleteRow = () => {
    updateUsers((prev) => prev.filter((u) => u.id !== user.id));
  };

  const undoEdit = () => {
    setEdit(false);
  };

  const onChangeTableDataInput = (e, name) => {
    setUserData({ ...userData, [e.target.name]: e.target.value })
  }

  const setContentEditable = () => {
    setEdit(true)
  }

  return (
    <tr className={selectedRows.includes(user.id) ? 'selected-row' : ''}>
      <td>
        <input
          className="txt"
          type="checkbox"
          checked={selectedRows.includes(user.id)}
          onChange={() =>
            setSelectedRows((prev) =>
              prev.includes(user.id)
                ? prev.filter((id) => id !== user.id)
                : [...prev, user.id]
            )
          }
        />
      </td>
      {edit ? (
        <>
        {
          Object.keys(userData).slice(1).map((item, index) => (
           <td>
            {
              <SearchBox 
              handleSearchOnChange={onChangeTableDataInput}
              searchValue={userData[item]}
              key={index}
              currentClassName={"txt input_width"}
              name={item}
              />
            }
           </td>
          ))
        }
          {/* <td className="adjust_td_width">
            <input
              className="txt input_width"
              value={userData.name}
              onChange={(e) =>
                setUserData({ ...userData, name: e.target.value })
              }
            />
          </td>
          <td className="adjust_td_width">
            <input
              className="txt input_width"
              value={userData.email}
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
            />
          </td>
          <td className="adjust_td_width">
            <input
              className="txt input_width"
              value={userData.role}
              onChange={(e) =>
                setUserData({ ...userData, role: e.target.value })
              }
            />
          </td> */}
        </>
      ) : (
        <>
          <td className="txt">{user.name}</td>
          <td className="txt">{user.email}</td>
          <td className="txt">{user.role}</td>
        </>
      )}
      <td className="txt">
        {edit ? (
          <>
           <FloatingButton
           className={"txt common_utility_btns"}
           onClick={saveEdit}
          >
           <Save size={'20px'} color={'#000000'}/>
          </FloatingButton>

            <FloatingButton
           className={"txt common_utility_btns"}
           onClick={undoEdit}
          >
          <CircleX size={'20px'} color={'red'}/>
          </FloatingButton>
          </>
        ) : (
          <>
          <FloatingButton
           className={"edit txt common_utility_btns"}
           onClick={setContentEditable}
          >
          <Edit size={'20px'} color={'#000000'} />
          </FloatingButton>

          <FloatingButton
           className={"delete txt common_utility_btns"}
           onClick={deleteRow}
          >
           <Trash size={'20px'} color={'red'} />
          </FloatingButton>
          </>
        )}
      </td>
    </tr>
  );
}

export default TableRow;
