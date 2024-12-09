import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ComponentFour from "./ComponentFour";

function ComponentThree() {
  const count = useSelector((state) => state.auth.count);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch({ type: "INC", payload: 10 });
  };

  return (
    <li>
      <span>
        Comp - {count} - {user}
        <button onClick={handleIncrement}>+</button>
        <ul>
          <ComponentFour testProp="text" />
        </ul>
      </span>
    </li>
  );
}

export default ComponentThree;
