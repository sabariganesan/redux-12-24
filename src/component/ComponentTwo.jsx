import React from "react";
import ComponentThree from "./ComponentThree";

function ComponentTwo({ name }) {
  return (
    <li>
      <span> Comp - 2</span>
      <ul>
        <ComponentThree name={name} />
      </ul>
    </li>
  );
}

export default ComponentTwo;
