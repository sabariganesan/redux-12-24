import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewName } from "../reducer/dataListReducer";

function DataList() {
  const [username, setUsername] = useState("");
  // const [nameList, setNameList] = useState([]);

  const nameList = useSelector((state) => state.list.nameList);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    // setNameList((prev) => [...prev, username]);
    dispatch(addNewName(username));
    setUsername("");
  };

  return (
    <div>
      <header>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username : </label>
            <input
              placeholder="Ex: John"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <button type="submit">Add</button>
          <button onClick={() => setUsername("")}>Reset</button>
        </form>
      </header>
      <section>
        <h3>Name List</h3>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {nameList.length > 0 ? (
              nameList.map((name, idx) => (
                <tr key={idx}>
                  <td>{name}</td>
                  <td>
                    <button>Edit</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={2}>No record</td>
              </tr>
            )}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default DataList;
