import React from "react";
import ComponentThree from "./ComponentThree";
import { useSelector } from "react-redux";

function ComponentTwo({ name }) {
  const count = useSelector((state) => state.auth.count);

  return (
    <li>
      <span> Comp - 2 - count value - {count}</span>
      <ul>
        <ComponentThree name={name} />
      </ul>
    </li>
  );
}

export default ComponentTwo;
