import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function ComponentThree() {
  const count = useSelector((state) => state.auth.count);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch({ type: "INC" });
  };

  return (
    <li>
      <span>
        Comp - {count} - {user}
        <button onClick={handleIncrement}>+</button>
        <button>-</button>
      </span>
    </li>
  );
}

export default ComponentThree;
