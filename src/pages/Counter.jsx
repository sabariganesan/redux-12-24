import React, { useState } from "react";
import ComponentOne from "../component/ComponentOne";

function Counter() {
  const [userName, setUserName] = useState("Sabari");

  return (
    <div style={{ border: "1px solid red", padding: "20px" }}>
      <ul>
        <ComponentOne name={userName} />
      </ul>
    </div>
  );
}

export default Counter;
