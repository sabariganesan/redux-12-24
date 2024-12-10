import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ComponentFour from "./ComponentFour";
import { increment } from "../reducer/counterReducerSlice";

function ComponentThree() {
  const count = useSelector((state) => state.auth.count);
  const user = useSelector((state) => state.auth.user);
  const sliceCount = useSelector((state) => state.slice.count);

  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch({ type: "INC", payload: 10 });
  };

  const handleSliceIncrement = () => {
    dispatch(increment(10));
  };

  return (
    <li>
      <span>
        Comp - {count} - {user}
        <button onClick={handleIncrement}>+</button>
        slice count - {sliceCount}{" "}
        <button onClick={handleSliceIncrement}>+</button>
        <ul>
          <ComponentFour testProp="text" />
        </ul>
      </span>
    </li>
  );
}

export default ComponentThree;
