import React, { useState } from "react";

function DataList() {
  const [username, setUsername] = useState("");
  const [nameList, setNameList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setNameList((prev) => [...prev, username]);
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
            </tr>
          </thead>
          <tbody>
            {nameList.length > 0 ? (
              nameList.map((name, idx) => (
                <tr key={idx}>
                  <td>{name}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td>No record</td>
              </tr>
            )}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default DataList;
